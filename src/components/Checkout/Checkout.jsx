import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, removeCart, total } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [validationEmail, setValidationEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const submitFormCheckout = (e) => {
    e.preventDefault();

    if (!name || !lastName || !phone || !email || !validationEmail) {
      setError("All inputs are mandatory. Please complete them to continue.");
      return;
    }
    if (email !== validationEmail) {
      setError("The emails entered are not the same. Try again.");
      return;
    }

    const order = {
      items: cart.map((prod) => ({
        id: prod.item.id,
        name: prod.item.name,
        quantity: prod.quantity,
      })),
      total,
      date: new Date(),
      customer: {
        name,
        lastName,
        phone,
        email,
      },
    };
    Promise.all(
      order.items.map(async (orderProd) => {
        const refProd = doc(db, "products", orderProd.id);
        const docProd = await getDoc(refProd);
        const currentStock = docProd.data().stock;

        await updateDoc(refProd, { stock: currentStock - orderProd.quantity });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            resetForm();
            removeCart();
          })
          .catch((err) => console.log("Error creating order", err));
      })
      .catch((err) => {
        console.log("We could not update the stock", err);
        setError("Error updating stock");
      });
  };
  const resetForm = () => {
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setValidationEmail("");
    setError("");
  };
  return (
    <>
      {orderId ? (
        <p className="orderNumberCheckout">
          Thanks for your purchase. Your order number is: <span>{orderId}</span>
        </p>
      ) : (
        <>
          <h2 className="titleCheckout">
            Complete the form to finalize the purchase
          </h2>
          <form className="formCheckout" onSubmit={submitFormCheckout}>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              placeholder="Your last name..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="phone"></label>
            <input
              type="text"
              id="phone"
              placeholder="Your phone number..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="YourEmail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="valEmail"></label>
            <input
              type="email"
              id="valEmail"
              placeholder="YourEmail@example.com"
              value={validationEmail}
              onChange={(e) => setValidationEmail(e.target.value)}
            />
            {error && <p className="errorCheckout">{error}</p>}
            <div className="containerButtonCheckout">
              <button className="button" onClick={() => resetForm()}>
                Clean
              </button>
              <button className="button" disabled={cart.length === 0}>
                Send
              </button>
            </div>
          </form>
        </>
      )}

      <p className="totalCheckout">
        Total: <span>${total}</span>
      </p>
      <section className="containerCheckout">
        {cart.map((prod) => (
          <article className="checkOutProduct" key={prod.item.id}>
            <h3>{prod.item.name}</h3>
            <p>
              {prod.quantity} x <span>${prod.item.price}</span>
            </p>
            <picture>
              <img src={prod.item.image} alt="" />
            </picture>
            <p>
              Total:{" "}
              <span>${(prod.item.price * prod.quantity).toFixed(2)}</span>
            </p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Checkout;

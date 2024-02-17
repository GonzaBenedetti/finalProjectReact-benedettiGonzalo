import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, total, totalQuantity, removeCart } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <section className="sectionCartEmpty">
        <h1 className="titleCartEmpty">You have no items in your cart</h1>
        <Link className="button buttonCartEmpty" to="/shop">
          See products
        </Link>
      </section>
    );
  }

  return (
    <section className="sectionCart">
      <div className="containerEmptyButton">
        <button onClick={() => removeCart()} className="button emptyButtonCard">
          Empty cart
        </button>
      </div>
      <article className="productCart">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
        <h3 className="titleProdCart">
          Total: <span>${total.toFixed(2)}</span>
        </h3>
        <div className="containerBuyButton">
          <Link to="/checkout" className="button completeBuy">
            BUY
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Cart;

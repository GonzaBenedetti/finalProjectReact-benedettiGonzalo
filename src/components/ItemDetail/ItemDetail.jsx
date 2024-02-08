import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  price,
  brand,
  category,
  image,
  description,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem (item, quantity);
  }

  return (
    <article className="itemDetail">
      <picture>
        <img src={image} alt={name} className="imgItemDetail" />
      </picture>
      <div className="containerItemDetail">
        <header>
          <h2 className="titleItemDetail">{name}</h2>
        </header>
        <section className="sectionItemDetail">
          <p className="priceItemDetail">$ {price}</p>
          {
            quantityAdded > 0 ? (
              <Link to={"../../../cart"} className="button">Terminar compra</Link>
            ) : (
              <ItemCount stock={stock} onAdd={handleOnAdd}/>
            )
          }
        </section>
        <footer className="footerItemDetail">
          <h4 className="titleDescriptionItemDetail">
            What you need to know about this product:
          </h4>
          <p className="descriptionItemDetail">{description}</p>
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
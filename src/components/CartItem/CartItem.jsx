import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item, quantity }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="cartContainerProduct">
      <img src={item.image} alt={item.name} className="imageCartProduct" />
      <h3 className="titleCartProduct">{item.name}</h3>
      <p className="textCartProduct">
        Quantity: <span>{quantity}</span>
      </p>
      <p className="textCartProduct">
        Price: <span>${item.price}</span>
      </p>
      <i className="bx bxs-trash" onClick={() => deleteItem(item.id)}></i>
    </div>
  );
};

export default CartItem;

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <i className="bx bx-cart">{ totalQuantity }</i>    
    </>
  );
};

export default CartWidget;

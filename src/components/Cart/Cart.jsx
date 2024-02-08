import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
  const {cart, total, totalQuantity, removeCart} = useContext(CartContext);
  
  if(totalQuantity === 0) {
    return (
      <>
        <h1>You have no items in your cart</h1>
        <Link to="/shop">See products</Link>
      </>
    )
  }
  
  return (
    <div>
      { 
        cart.map(prod => <CartItem key={prod.id} {...prod}/>)
      }
      <h3>Total: ${total}</h3>
      <button onClick={() => removeCart()}>Empty cart</button>
      <Link to="/checkout">Finish shopping</Link>
    </div>
  )
}

export default Cart
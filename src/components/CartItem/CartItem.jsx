import React from "react"

const CartItem = ({item, quantity}) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>quantity: {quantity}</p>
      <p>price: {item.price}</p>
    </div>
  )
}

export default CartItem
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
    const[quantity, setQuantity] = useState(1)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
  return (
    <div className="counter">
        <div className="controls">
            <button className="button" onClick={decrement}> - </button>
            <h4 className="counterQuantity">{quantity} of {stock}</h4>
            <button className="button" onClick={increment}> + </button>
        </div>
        <div>
            <button className="button"onClick={() => onAdd(quantity)} disabled={!stock}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ItemCount
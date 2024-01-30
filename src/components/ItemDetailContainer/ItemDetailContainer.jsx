import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setProduct(res)
                console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
    }, [itemId]);

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
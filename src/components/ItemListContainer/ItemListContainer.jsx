import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import AsideItemListContainer from "../AsideItemListContainer/AsideItemListContainer"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {
    const productsFunction = idCategory ? getProductByCategory : getProducts

    productsFunction(idCategory)
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, [idCategory])

  return (
    <>
        <ItemList products={products}/>
        <AsideItemListContainer products={products}/>
    </>
  )
}

export default ItemListContainer
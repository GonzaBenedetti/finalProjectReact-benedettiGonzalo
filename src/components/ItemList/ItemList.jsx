import Item from "../Item/Item"
import AsideItemListContainer from "../AsideItemListContainer/AsideItemListContainer"
import "./ItemList.css"

const ItemList = ({products}) => {
  
  return (
    <section className="itemList">
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </section>
  )
}

export default ItemList
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import AsideItemListContainer from "../AsideItemListContainer/AsideItemListContainer"
import "./Shop.css"

const Shop = () => {
  return (
    <main className="shopContainer">
      <AsideItemListContainer/>
      <ItemListContainer/>
    </main>
  )
}

export default Shop
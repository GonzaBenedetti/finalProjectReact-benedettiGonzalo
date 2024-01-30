import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({id, name, price, brand, category, image, description, stock}) => {
  return (
    <article className="itemDetail">
        <picture>
            <img src={image} alt={name} className="imgItemDetail"/>
        </picture>
        <div className="containerItemDetail">
            <header>
                <h2 className="titleItemDetail">{name}</h2>
            </header>
            <section className="sectionItemDetail">
                <p className="priceItemDetail">$ {price}</p>
                <ItemCount stock={stock}/>            
            </section>
            <footer className="footerItemDetail">
                <h4 className="titleDescriptionItemDetail">What you need to know about this product:</h4>
                <p className="descriptionItemDetail">{description}</p>
            </footer>
        </div>
    </article>
  )
}

export default ItemDetail
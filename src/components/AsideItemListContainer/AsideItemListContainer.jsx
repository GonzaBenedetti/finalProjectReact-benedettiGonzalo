import { Link } from "react-router-dom"
import "./AsideItemListContainer.css"

const AsideItemListContainer = ({products}) => {
  const catProductsSet = new Set(products.map(prod => prod.category));

  const catProducts = Array.from(catProductsSet);
  return (
    <aside className="asideItemListContainer">
        <h3>Categories</h3>
        <hr />
        <ul className="listCatContainer">
          {
            catProducts.map(cat => (
              <li key={cat} className="listCat">
                <Link className="linkCat" to={`/shop/category/${cat}`}>{cat}</Link>
              </li>
            ))
          }
        </ul>
      </aside>
  )
}

export default AsideItemListContainer
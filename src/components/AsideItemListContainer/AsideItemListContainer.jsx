import { Link } from "react-router-dom"
import "./AsideItemListContainer.css"

const AsideItemListContainer = ({products}) => {
  return (
    <aside className="asideItemListContainer">
      <h3>Category</h3>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            <Link to={`/category/${prod.category}`}>{prod.category}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default AsideItemListContainer
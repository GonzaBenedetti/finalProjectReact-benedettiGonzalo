import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({
  id,
  name,
  price,
  brand,
  category,
  image,
  description,
  stock,
}) => {
  return (
    <article className="cardProduct">
      <picture>
        <Link to={`/shop/item/${id}`} className="linkImg">
          <img src={image} alt={name} className="imgCard" />
        </Link>
      </picture>
      <header className="titleCardContainer">
        <Link to={`/shop/item/${id}`} className="linkTitle">
          <h3 className="titleCard">{name}</h3>
        </Link>
      </header>
      <section>
        <p className="infoProduct">${price}</p>
      </section>
      <footer>
        <Link to={`/shop/item/${id}`} className="buttonCard">
          See Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;

import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <section className="itemList">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </section>
  );
};

export default ItemList;

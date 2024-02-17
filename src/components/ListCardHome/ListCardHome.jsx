import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { query, getDocs, collection, where } from "firebase/firestore";
import "./ListCardHome.css";

const ListCardHome = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    console.log("idCategory:", idCategory);
    const productsFunction = idCategory
      ? query(collection(db, "products"), where("category", "==", idCategory))
      : collection(db, "products");

    getDocs(productsFunction)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        const limitedProducts = newProducts.slice(0, 5);
        setProducts(limitedProducts);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [idCategory]);
  return (
    <section className="sectionCardProductsHome">
      {loader ? (
        <span className="loader"></span>
      ) : (
        <div className="containerCardProductsHome">
          <Link to="./shop" className="seeMoreProducts button">
            See more products
          </Link>
          <ItemList products={products} />
        </div>
      )}
    </section>
  );
};

export default ListCardHome;

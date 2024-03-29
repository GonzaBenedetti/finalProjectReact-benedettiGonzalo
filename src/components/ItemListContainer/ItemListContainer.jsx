import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import AsideItemListContainer from "../AsideItemListContainer/AsideItemListContainer";
import "./ItemListContainer.css";
import { query, getDocs, collection, where } from "firebase/firestore";

const ItemListContainer = () => {
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
        setProducts(newProducts);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <main className="mainListContainer">
      {loader ? (
        <span class="loader"></span>
      ) : (
        <>
          <AsideItemListContainer />
          <ItemList products={products} />
        </>
      )}
    </main>
  );
};

export default ItemListContainer;

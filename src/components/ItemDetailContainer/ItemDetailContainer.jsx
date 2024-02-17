import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const newDoc = doc(db, "products", itemId);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProduct(newProduct);
        setLoader(false);
      })
      .catch((err) => {
        console.log("Surgio un error: ", err);
      });
  }, [itemId]);
  return (
    <div className="itemDetailContainer">
      {loader ? <span className="loader"></span> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;

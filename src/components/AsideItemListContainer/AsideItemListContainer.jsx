import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./AsideItemListContainer.css";
import { db } from "../../services/firebase/firebaseConfig";

const AsideItemListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "products");
        const querySnapshot = await getDocs(categoriesCollection);
        const uniqueCategories = new Set();

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          uniqueCategories.add(data.category);
        });

        const uniqueCategoriesArray = Array.from(uniqueCategories);
        setCategories(uniqueCategoriesArray);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="asideItemListContainer">
      <h3>Categories</h3>
      <hr />
      <ul className="listCatContainer">
        {categories.map((category, index) => (
          <li key={index} className="listCat">
            <Link to={`/shop/category/${category}`} className="linkCat">
              {capitalizeFirstLetter(category)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideItemListContainer;

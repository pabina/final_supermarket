import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MyRoot } from "../Interface/ProductInterface";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState<MyRoot>();
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const warehouseId = 1;
  useEffect(() => {
    const getCategory = async () => {
      try {
        const config = {
          headers: {
            "Api-Key": apiKey,
            "Warehouse-Id": warehouseId,
          },
        };
        const response = await axios.get(
          `https://uat.ordering-dalle.ekbana.net/api/v4/category`,
          config
        );

        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (e) {
        console.log("Something went wrong", e);
      }
    };
    getCategory();
  }, []);
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul className="cate">
        {categories &&
          categories.data.map((category: any) => {
            return (
              <div key={category.id}>
                <li>
                  <Link to={"/" + category.title.toLowerCase()}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    {category.title.charAt(0).toUpperCase() +
                      category.title.slice(1).toLowerCase()}
                  </Link>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default Categories;

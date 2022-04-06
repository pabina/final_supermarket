import React from "react";
import { MyRoot as ProductDisplayInterface } from "../products/ProductDisplayInterface";
import axios from "axios";
import { useState, useEffect } from "react";
import OfferCard from "./OfferCard";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

const NewOffer: React.FC = () => {
  const [products, setProducts] = useState<ProductDisplayInterface>();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response = await axios.get(`${baseURL}/api/v4/product`, config);

        if (response.status == 200) {
          setProducts(response.data);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            {products &&
              products.data
                .filter(
                  (product: any) => product.unitPrice[0].hasOffer === true
                )
                .map((myfilterdata) => (
                  <OfferCard
                    offer={myfilterdata.unitPrice[0].hasOffer}
                    image={myfilterdata.categoryBackgroundImage}
                    title={myfilterdata.title}
                    sellPrice={myfilterdata.unitPrice[0].sellingPrice}
                    markedPrice={myfilterdata.unitPrice[0].markedPrice}
                  />
                ))}

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOffer;

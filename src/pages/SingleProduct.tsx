import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/products/ProductCard";
import Header from "../components/Header";
import MainNavbar from "../components/MyNavBar/MainNavbar";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import Footer from "../components/Footer";
import { Meta, Daum } from "../components/Interface/ProductInterface";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

type ProductDisplayInterface = {
  meta: Meta;
  data: Daum;
};

const SingleProduct = () => {
  const { id } = useParams();
  if (id) {
    var myid = id.toString();
    console.log(myid);
  }

  const [products, setProducts] = useState<ProductDisplayInterface>();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response = await axios.get(
          `${baseURL}/api/v4/product/${myid}`,
          config
        );

        if (response.status == 200) {
          setProducts(response.data);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, []);
  console.log(products);
  return (
    <>
      <Header />
      <MainNavbar />
      <BreadcrumbComponent page="single one" />

      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <img
                id="example"
                src={products && products.data.categoryBackgroundImage}
                alt=" "
                className="img-responsive"
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h2>{products && products.data.categoryTitle}</h2>
              <div className="rating1">
                <span className="starRating">
                  <label>
                    <input id="rating5" type="radio" name="rating" value="5" />5
                  </label>
                  <label>
                    <input id="rating4" type="radio" name="rating" value="4" />4
                  </label>
                  <label>
                    <input
                      id="rating3"
                      type="radio"
                      name="rating"
                      value="3"
                      checked
                    />
                    3
                  </label>
                  <label>
                    <input id="rating2" type="radio" name="rating" value="2" />2
                  </label>
                  <label>
                    <input id="rating1" type="radio" name="rating" value="1" />1
                  </label>
                </span>
              </div>
              <div className="w3agile_description">
                <h4>Description :</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4 className="m-sing">
                    {products && products.data.unitPrice[0].newPrice}
                    <span>
                      {products && products.data.unitPrice[0].oldPrice}
                    </span>
                  </h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input type="hidden" name="business" value=" " />
                      <input
                        type="hidden"
                        name="item_name"
                        value="pulao basmati rice"
                      />
                      <input type="hidden" name="amount" value="21.00" />
                      <input
                        type="hidden"
                        name="discount_amount"
                        value="1.00"
                      />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="return" value=" " />
                      <input type="hidden" name="cancel_return" value=" " />
                      <input
                        type="submit"
                        name="submit"
                        value="Add to cart"
                        className="button"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;

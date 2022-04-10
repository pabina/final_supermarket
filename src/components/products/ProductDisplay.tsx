import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Form } from "react-bootstrap";
import ShopNow from "../../pages/ShopNow";
import ProductCard from "./ProductCard";
import axios from "axios";

import { MyRoot } from "../Interface/ProductInterface";
import Sort from "./Sort";
import ReactPaginate from "react-paginate";
import Categories from "../Category/Categories";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function ProductDisplay(): JSX.Element {
  const [products, setProducts] = useState<MyRoot>();
  const [sort, setsort] = useState<any>();
  const [items, setItems] = useState<any>(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const config = {
          headers: {
            "Api-Key": apiKey,
            "Warehouse-Id": warehouseId,
            perpage: 6,
          },
        };

        let response = await axios.get(
          `${baseURL}/api/v4/product?page=${items}`,
          config
        );
        let response2 = await axios.get(`${baseURL}/api/v4/category`, config);

        if (response2.status == 200) {
          setProducts(response.data);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, [items]);

  function handlesort(e: any) {
    e.preventDefault();
    console.log(e.target.value);
  }

  const handlePageClick = (data: any = 1) => {
    const mypage = data.selected + 1;
    setItems(mypage);
    console.log(data.selected);
  };

  return (
    <>
      <div className="products">
        <Container>
          <Row>
            <Col md={4} className="products-left">
              <Categories />
            </Col>
            <Col md={8} className="products-right">
              <div className="products-right-grid">
                <div className="products-right-grids">
                  <Sort handlesort={handlesort} />
                </div>
              </div>
              <Row>
                {products &&
                  products.data.map((product: any) => (
                    <ProductCard
                      id={product.id}
                      offer={product.unitPrice[0].hasOffer}
                      image={product.categoryBackgroundImage}
                      title={product.title}
                      sellPrice={product.unitPrice[0].sellingPrice}
                      markedPrice={product.unitPrice[0].markedPrice}
                    />
                  ))}
              </Row>
              <div className="clearfix"> </div>
            </Col>
            <div className="clearfix"> </div>
          </Row>
          {products && (
            <ReactPaginate
              previousLabel={"<<"}
              pageCount={7}
              breakLabel={"..."}
              marginPagesDisplayed={4}
              nextLabel={">>"}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          )}
        </Container>
        <div className="clearfix"> </div>
      </div>
    </>
  );
}

export default ProductDisplay;

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Root as CategoriesInterface } from "../products/ProductDisplayInterface";

import axios from "axios";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

const MainNavbar = () => {
  const [categories, setCategories] = useState<CategoriesInterface>();
  console.log(categories);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };
        const response = await axios.get(`${baseURL}/api/v4/category`, config);

        if (response.status == 200) {
          setCategories(response.data);
        }
      } catch (e) {
        console.log("Something went wrong, ", e);
      }
    };
    getCategory();
  }, []);

  return (
    <div className="navigation-agileits">
      <Container>
        <Navbar>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-header nav_2"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Link className="nav-link" to="/">
                HOME
              </Link>
              <Link className="nav-link" to="/products">
                ALL PRODUCTS
              </Link>

              {categories &&
                categories.data.map((category: any) => {
                  return category.subcategories ? (
                    <NavDropdown title={category.title}>
                      <ul className="multi-column-dropdown">
                        <h6>{category.title}</h6>
                        {category.subcategories.data.map((sub: any) => (
                          <NavDropdown.Item>{sub.title}</NavDropdown.Item>
                        ))}
                      </ul>
                    </NavDropdown>
                  ) : (
                    <Link
                      key={category.id}
                      className="nav-link"
                      to={"/" + category.title.toLowerCase()}
                    >
                      {category.title}{" "}
                    </Link>
                  );
                })}
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MainNavbar;

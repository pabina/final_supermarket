import React from "react";
import { Link } from "react-router-dom";

const Navigation:React.FC = () => {
  return (
    <>
      <div className="navigation-agileits">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header nav_2">
              <button
                type="button"
                className="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/" className="act">
                    Home
                  </Link>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Groceries<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>All Groceries</h6>
                          <li>
                            <a href="groceries.html">Dals and Pulses</a>
                          </li>
                          <li>
                            <a href="groceries.html">Almonds</a>
                          </li>
                          <li>
                            <a href="groceries.html">Cashews</a>
                          </li>
                          <li>
                            <a href="groceries.html">Dry Fruit</a>
                          </li>
                          <li>
                            <a href="groceries.html"> Mukhwas </a>
                          </li>
                          <li>
                            <a href="groceries.html">Rice and Rice Products</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Household<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>All Household</h6>
                          <li>
                            <a href="household.html">Cookware</a>
                          </li>
                          <li>
                            <a href="household.html">Dust Pans</a>
                          </li>
                          <li>
                            <a href="household.html">Scrubbers</a>
                          </li>
                          <li>
                            <a href="household.html">Dust Cloth</a>
                          </li>
                          <li>
                            <a href="household.html"> Mops </a>
                          </li>
                          <li>
                            <a href="household.html">Kitchenware</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Personal Care<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Baby Care</h6>
                          <li>
                            <a href="personalcare.html">Baby Soap</a>
                          </li>
                          <li>
                            <a href="personalcare.html">
                              Baby Care Accessories
                            </a>
                          </li>
                          <li>
                            <a href="personalcare.html">Baby Oil and Shampoos</a>
                          </li>
                          <li>
                            <a href="personalcare.html">Baby Creams and Lotion</a>
                          </li>
                          <li>
                            <a href="personalcare.html"> Baby Powder</a>
                          </li>
                          <li>
                            <a href="personalcare.html">Diapers and Wipes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Packaged Foods<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>All Accessories</h6>
                          <li>
                            <a href="packagedfoods.html">Baby Food</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Dessert Items</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Biscuits</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Breakfast Cereals</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html"> Canned Food </a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Chocolates and Sweets</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Beverages<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Tea and Coeffe</h6>
                          <li>
                            <a href="beverages.html">Green Tea</a>
                          </li>
                          <li>
                            <a href="beverages.html">Ground Coffee</a>
                          </li>
                          <li>
                            <a href="beverages.html">Herbal Tea</a>
                          </li>
                          <li>
                            <a href="beverages.html">Instant Coffee</a>
                          </li>
                          <li>
                            <a href="beverages.html"> Tea </a>
                          </li>
                          <li>
                            <a href="beverages.html">Tea Bags</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li>
                  <a href="gourmet.html">Gourmet</a>
                </li>
                <li>
                  <a href="offers.html">Offers</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;

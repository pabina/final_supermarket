import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Category/Categories";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
              <h3>Contact</h3>

              <ul className="address">
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="short-codes.html">Short Codes</a>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="faq.html">FAQ's</a>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/shopNow">Special Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <Categories />
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/shopNow">Store</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="checkout.html">My Cart</a>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/createAccount">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div className="footer-copy">
          <div className="container">
            <p>
              © 2017 Super Market. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/">W3layouts</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul>
              <li>
                <a href="#" className="w3_agile_facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="agile_twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="w3_agile_dribble">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="w3_agile_vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img
              src="assets/images/card.png"
              alt=" "
              className="img-responsive"
            />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

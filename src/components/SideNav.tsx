import React from 'react';
import { Container, Col } from "react-bootstrap";

const SideNav = () => {
  return (
    <>
    <Col md={4} className="products-left">
                <div className="categories">
                    <h2>Categories</h2>
                    <ul className="cate">
                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fruits And Vegetables</a></li>
                        <ul>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Cuts & Sprouts</a></li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Flowers</a></li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fresh Herbs & Seasonings</a></li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Fresh Vegetables</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>International Vegetables</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Organic Fruits & Vegetables</a></li>
                        </ul>
                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Grocery & Staples</a></li>
                        <ul>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Dals & Pulses</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Dry Fruits</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Edible Oils & Ghee</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Flours & Sooji</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Masalas & Spices</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Organic Staples</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Rice & Rice Products</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Salt, Sugar & Jaggery</a></li>
                        </ul>
                        <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>PersonalCare</a></li>
                        <ul>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Baby Care</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Cosmetics</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Deos & Perfumes</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Skin Care</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sanitary Needs</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Oral Care</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Personal Hygiene</a> </li>
                            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Shaving Needs</a></li>
                        </ul>
                    </ul>
                </div>	</Col>
            <Col md={8} className="products-right">
                <div className="products-right-grid">
                    <div className="products-right-grid">
                    </div>
                    <div className="agile_top_brands_grids">
                        <Col md={4} className="top_brand_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <img src="assets/images/pf4.png" alt=" " className="img-responsive" />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <a href="single.html"><img title=" " alt=" " src="assets/images/pf4.png" /></a>
                                                    <p>Sampann-toor-dal</p>
                                                    <h4>$35.99 <span>$55.00</span></h4>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                                            <input type="hidden" name="amount" value="35.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </Col>

      
    </>
  )
}

export default SideNav

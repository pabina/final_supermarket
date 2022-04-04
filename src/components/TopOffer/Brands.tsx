import React from "react";

const Brands = () => {
  return <div></div>;
};

export default Brands;

// import React from "react";
// import { Col, Row, Tabs, Tab, Container } from "react-bootstrap";

// function Brands(): JSX.Element {
//   return (
//     <div className="top-brands">
//       <Container>
//         <h2>Top selling offers</h2>
//         <div className="grid_3 grid_5 nav nav-tabs">
//           <div className="agile_top_brands_grids">
//             <Tabs
//               defaultActiveKey="profile"
//               id="uncontrolled-tab-example"
//               className="mb-3"
//             >
//               <Tab eventKey="adOffer" title="Advertised Offer">
//                 <div id="myTab" className="nav nav-tabs">
//                   <div className="agile-tp">
//                     <h5>Advertised this week</h5>
//                     <p className="w3l-ad">
//                       We've pulled together all our advertised offers into one
//                       place, so you won't miss out on a great deal.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-md-4 top_brand_left">
//                   <div className="hover14 column">
//                     <div className="agile_top_brand_left_grid">
//                       <div className="agile_top_brand_left_grid_pos">
//                         <img
//                           src="assets/images/offer.png"
//                           alt=" "
//                           className="img-responsive"
//                         />
//                       </div>
//                       <div className="agile_top_brand_left_grid_pos">
//                         <img
//                           src="assets/images/offer.png"
//                           alt=" "
//                           className="img-responsive"
//                         />
//                       </div>
//                       <div className="agile_top_brand_left_grid1">
//                         <figure>
//                           <div className="snipcart-item block">
//                             <div className="snipcart-thumb">
//                               <a href="products.html">
//                                 <img
//                                   src="assets/images/6.png"
//                                   alt=" "
//                                   className="img-responsive"
//                                 />
//                               </a>
//                               <p>Saffola-gold</p>
//                               <h4>
//                                 $80.99 <span>$105.00</span>
//                               </h4>
//                             </div>
//                             <div className="snipcart-details top_brand_home_details">
//                               <form action="#" method="post">
//                                 <fieldset>
//                                   <input
//                                     type="hidden"
//                                     name="cmd"
//                                     value="_cart"
//                                   />
//                                   <input type="hidden" name="add" value="1" />
//                                   <input
//                                     type="hidden"
//                                     name="business"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="item_name"
//                                     value="Pepsi soft drink"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="amount"
//                                     value="80.00"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="discount_amount"
//                                     value="1.00"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="currency_code"
//                                     value="USD"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="return"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="cancel_return"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="submit"
//                                     name="submit"
//                                     value="Add to cart"
//                                     className="button"
//                                   />
//                                 </fieldset>
//                               </form>
//                             </div>
//                           </div>
//                         </figure>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab>
//               <Tab eventKey="todayOffer" title="Todays Offer">
//                 <div className="agile-tp">
//                   <h5>This week</h5>
//                   <p className="w3l-ad">
//                     We've pulled together all our advertised offers into one
//                     place, so you won't miss out on a great deal.
//                   </p>
//                 </div>

//                 <div className="col-md-4 top_brand_left">
//                   <div className="hover14 column">
//                     <div className="agile_top_brand_left_grid">
//                       <div className="agile_top_brand_left_grid_pos">
//                         <img
//                           src="assets/images/offer.png"
//                           alt=" "
//                           className="img-responsive"
//                         />
//                       </div>
//                       <div className="agile_top_brand_left_grid_pos">
//                         <img
//                           src="assets/images/offer.png"
//                           alt=" "
//                           className="img-responsive"
//                         />
//                       </div>
//                       <div className="agile_top_brand_left_grid1">
//                         <figure>
//                           <div className="snipcart-item block">
//                             <div className="snipcart-thumb">
//                               <a href="products.html">
//                                 <img
//                                   src="assets/images/6.png"
//                                   alt=" "
//                                   className="img-responsive"
//                                 />
//                               </a>
//                               <p>Saffola-gold</p>
//                               <div className="stars">
//                                 <i
//                                   className="fa fa-star blue-star"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <i
//                                   className="fa fa-star blue-star"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <i
//                                   className="fa fa-star blue-star"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <i
//                                   className="fa fa-star blue-star"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <i
//                                   className="fa fa-star gray-star"
//                                   aria-hidden="true"
//                                 ></i>
//                               </div>
//                               <h4>
//                                 $80.99 <span>$105.00</span>
//                               </h4>
//                             </div>
//                             <div className="snipcart-details top_brand_home_details">
//                               <form action="#" method="post">
//                                 <fieldset>
//                                   <input
//                                     type="hidden"
//                                     name="cmd"
//                                     value="_cart"
//                                   />
//                                   <input type="hidden" name="add" value="1" />
//                                   <input
//                                     type="hidden"
//                                     name="business"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="item_name"
//                                     value="Pepsi soft drink"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="amount"
//                                     value="80.00"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="discount_amount"
//                                     value="1.00"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="currency_code"
//                                     value="USD"
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="return"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="hidden"
//                                     name="cancel_return"
//                                     value=" "
//                                   />
//                                   <input
//                                     type="submit"
//                                     name="submit"
//                                     value="Add to cart"
//                                     className="button"
//                                   />
//                                 </fieldset>
//                               </form>
//                             </div>
//                           </div>
//                         </figure>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab>
//             </Tabs>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Brands;

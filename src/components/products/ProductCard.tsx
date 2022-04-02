import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
// import img1 from "../../images/offer.png";

type productProps = {
  offer: boolean;
  image: string;
  title: string;
  markedPrice: number;
  sellPrice: number;
};
function ProductCard(props: productProps) {
  return (
    <>
      <Col md={4} className="mb-4 top_brand_left">
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              {props.offer && (
                <img
                  src="assets/images/offer.png"
                  alt=" "
                  className="img-responsive"
                />
              )}
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <a href="single.html">
                      <img
                        src={props.image}
                        alt=" "
                        className="img-fluid"
                        style={{ height: "160px", width: "160px" }}
                      />
                    </a>
                    <p>{props.title}</p>
                    <h4>
                      Rs. {props.sellPrice} <span>Rs.{props.markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Pepsi soft drink"
                        />
                        <input type="hidden" name="amount" value="80.00" />
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
              </figure>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
export default ProductCard;

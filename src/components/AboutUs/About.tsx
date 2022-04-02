import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import BreadcrumbComponent from "../BreadcrumbComponent";

function About(): JSX.Element {
  return (
    <div>
      <BreadcrumbComponent page="About Us" />

      <div className="about">
        <Container>
          <h3 className="w3_agile_header">About Us</h3>
          <div className="about-agileinfo w3layouts">
            <Row>
              <Col md={8} className="col-md-8 about-wthree-grids grid-top">
                <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
                <p className="top">
                  Gnissimos voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi. atque corrupti quos dolores et quas
                  molestias excepturi sint occaecat officia deserunt mollitia
                  laborum et dolorum fuga
                </p>
                <p>
                  Dignissimos at vero eos et accusamus et iusto odio ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecat officia
                  deserunt mollitia laborum et dolorum fuga. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecat atque corrupti quos
                  dolores et quas molestias excepturi sint occaecat officia
                  deserunt mollitia laborum et dolorum{" "}
                </p>
                <div className="about-w3agilerow">
                  <Row>
                    <Col md={4} className="about-w3imgs">
                      <img
                        src="assets/images/p3.jpg"
                        alt=""
                        className="img-responsive zoom-img"
                      />
                    </Col>
                    <Col md={4} className="about-w3imgs">
                      <img
                        src="assets/images/p4.jpg"
                        alt=""
                        className="img-responsive zoom-img"
                      />
                    </Col>
                    <Col md={4} className="about-w3imgs">
                      <img
                        src="assets/images/p3.jpg"
                        alt=""
                        className="img-responsive zoom-img"
                      />
                    </Col>
                  </Row>

                  <div className="clearfix"> </div>
                </div>
              </Col>
              <Col md={4} className="about-wthree-grids">
                <div className="offic-time">
                  <div className="time-top">
                    <h4>Praesentium :</h4>
                  </div>
                  <div className="time-bottom">
                    <h5>At vero eos </h5>
                    <h5>Accusamus et</h5>
                    <p>
                      Dignissimos at vero eos et accusamus et iusto odio ducimus
                      qui accusamus et.{" "}
                    </p>
                  </div>
                </div>
                <div className="testi">
                  <h3 className="w3_agile_header">Testimonial</h3>
                  <div id="top" className="callbacks_container">
                    <Carousel
                      fade
                      controls={false}
                      indicators={false}
                      className="rslides"
                    >
                      <Carousel.Item>
                        <div className="testi-slider">
                          <h4>" I AM VERY PLEASED.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="/">John Doe,</a>
                              Adipiscing
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider">
                          <h4>" I AM LOREM IPSUM.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="/">elit semper,</a>
                              Dolor Elit
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider">
                          <h4>" CONSECTETUR PIMAGNA.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse eu magna dolor, quisque semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="/">Amet Doe,</a>
                              Suspendisse
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="clearfix"> </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default About;

import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

function AboutTeam(): JSX.Element {
  return (
    <div className="about-team">
      <Container>
        <h3 className="w3_agile_header">Meet Our Team</h3>
        <div className="team-agileitsinfo">
          <Row>
            <Col md={3} className="about-team-grids">
              <Image fluid={true} src="assets/images/t4.jpg" alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>ANDERSON,</span> Manager
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
            </Col>
            <Col md={3} className="col-md-2 about-team-grids">
              <Image fluid={true} src="assets/images/t2.jpg" alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>ELIFS,</span> Director
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
            </Col>

            <Col md={3} className="about-team-grids">
              <Image fluid={true} src="assets/images/t1.jpg" alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>JESSICA,</span> Supervisior
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
            </Col>
            {/* <Col md={3} className="about-team-grids">
              <Image fluid={true} src="assets/images/t3.jpg" alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>RACKHAM,</span> Staff
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
            </Col> */}
          </Row>
          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutTeam;

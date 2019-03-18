import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

class TherapyContent extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <small className="details-category">CAMINHADA HISTÓRICA</small>
            <h1 className="details-title">Hidden Gems of Old Delhi</h1>
          </Col>
        </Row>

        <Row>
          <ul className="details-highlights">
            <li>(81) 9 9618-0810</li>
          </ul>
        </Row>
      </Fragment>
    );
  }
}

export default TherapyContent;

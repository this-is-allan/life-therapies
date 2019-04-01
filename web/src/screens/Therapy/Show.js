import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import TherapiesCategories from "../../containers/Therapies/TherapiesCategories";
import TherapyContent from "../../containers/Therapy/Content";

const TherapyShowScreen = ({
  match: {
    params: { id }
  }
}) => (
  <Fragment>
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <TherapiesCategories />
        </Col>
      </Row>

      <Row>
        <Col>
          <TherapyContent id={id} />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default TherapyShowScreen;

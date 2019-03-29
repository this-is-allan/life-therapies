import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import TherapiesCategories from "../../containers/Therapies/TherapiesCategories";
import ImagesCarousel from "../../components/Therapies/ImagesCarousel";
import TherapyContent from "../../containers/Therapy/Content";

const TherapyShowScreen = ({
  match: {
    params: { id }
  }
}) => (
  <Fragment>
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12}>
          <TherapiesCategories />
        </Col>
      </Row>

      <Row>
        <TherapyContent id={id} />
      </Row>
    </Container>
  </Fragment>
);

export default TherapyShowScreen;

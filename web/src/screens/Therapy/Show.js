import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import TherapiesCategories from "../../containers/Therapies/TherapiesCategories";
import ImagesCarousel from "../../components/Therapies/ImagesCarousel";
import TherapyContent from "../../containers/Therapies/Content";

const TherapyShowScreen = ({
  match: {
    params: { category }
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
        <Col lg={4}>
          <ImagesCarousel sticked />
        </Col>
        <Col lg={8}>
          <TherapyContent />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default TherapyShowScreen;

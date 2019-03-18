import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import TherapiesCardsList from "../../containers/Therapies/CardsList";
import TherapiesCategories from "../../containers/Therapies/TherapiesCategories";

const TherapyListScreen = ({
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
        <TherapiesCardsList category={category} />
      </Row>
    </Container>
  </Fragment>
);

export default TherapyListScreen;

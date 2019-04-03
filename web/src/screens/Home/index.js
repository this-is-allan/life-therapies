import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import TherapiesCardsList from "../../containers/Therapies/CardsList";
import TherapiesCategories from "../../containers/Therapies/TherapiesCategories";
import Header from "../../components/Header";

document.body.style.background = "#F8F9FD";

const HomeScreen = () => (
  <Fragment>
    <Header />
    <TherapiesCategories />
    <Container>
      <Row>
        <Col>
          <TherapiesCardsList />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default HomeScreen;

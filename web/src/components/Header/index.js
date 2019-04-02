import React from "react";

import { Container, Row, Col, Button } from "reactstrap";
import { HeaderWrapper, HeaderTitle } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Col>
            <HeaderTitle>
              Encontre a terapia perfeita para resolver o seu problema.
              <Button color="warning" outline>
                Sou terapeuta e quero criar a minha
              </Button>
            </HeaderTitle>
          </Col>
        </Row>
      </Container>
      <svg
        class="selfServeStepsWave-_t0iR4 wave-38gW17"
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="267"
        viewBox="0 0 1440 267"
      >
        <path
          d="M1440,71.5c-18.11-3.24-46.81,5.09-81.79,16.37-32.68,10.54-73.32,23.63-122.86,32.24-50.66,8.8-73.87-9.64-104.17-33.74-31.93-25.39-71.75-57-159.92-69.7C854.11-.14,759.57,31.7,682.83,57.54,647,69.6,615.1,80.35,586.56,84.24c-47.22,6.45-81.17-4.35-115.95-15.42-31.29-10-63.26-20.13-106.19-18.14-40,1.86-72.54,28.27-102.9,52.89-38.47,31.19-73.39,59.5-115.3,31.33C71.23,84.5,0,113.86,0,113.86V267H1440Z"
          fill="#F8F9FD"
        />
      </svg>
    </HeaderWrapper>
  );
};

export default Header;

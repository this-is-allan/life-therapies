import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { Row, Col, Button } from "reactstrap";

import ImagesCarousel from "../../Therapies/ImagesCarousel";
import { Highlights, Category, Title, Price, InfoSection } from "./styles";

const items = [
  {
    src:
      "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5ae8f5c2352f53ef3678cf77/1525216712429/zoe_saldana_avatar.jpg?format=2500w",
    altText: "Slide 1",
    caption: "Slide 1"
  }
  // {
  //   src:
  //     "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  //   altText: "Slide 2",
  //   caption: "Slide 2"
  // },
  // {
  //   src:
  //     "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  //   altText: "Slide 3",
  //   caption: "Slide 3"
  // }
];

export const ShowTherapy = ({
  therapy: { category, title, description, price }
}) => (
  <Row>
    <Col lg={4}>
      <ImagesCarousel sticked images={items} />
    </Col>

    <Col lg={8}>
      <Category
        style={{
          color: category.color
        }}
      >
        {category.name}
      </Category>

      <Row>
        <Col>
          <Title>{title}</Title>
        </Col>
      </Row>

      <Row className="py-1">
        <Col>
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"R$"}
            renderText={value => (
              <Price color={category.color}>{value} por hora</Price>
            )}
          />
        </Col>
      </Row>

      <Row className="py-1">
        <Col>
          <Button
            tag={Link}
            color="primary"
            replace
            target="_blank"
            to={`//api.whatsapp.com/send?phone=5581996180810&text=${encodeURIComponent(
              "olá, tudo bem?"
            )}`}
          >
            Iniciar conversa
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="my-4" style={{ borderColor: "#EBEBEB" }} />
          <Highlights>
            <li>
              <img
                src="https://image.flaticon.com/icons/svg/1244/1244223.svg"
                height="34"
                width="34"
                alt=""
              />
              <span>Novo anúncio</span>
            </li>

            <li>
              <img
                src="https://image.flaticon.com/icons/svg/167/167311.svg"
                height="34"
                width="34"
                alt=""
              />
              (81) 9 9618-0810
            </li>
          </Highlights>
          <hr className="my-4" style={{ borderColor: "#EBEBEB" }} />
        </Col>
      </Row>

      <Row>
        <Col>
          <InfoSection>
            <h5>Conheça o terapeuta</h5>
            <p>
              My passion for traveling & exploring Indian destinations has led
              me to start my own venture -Travelneed, I offer some unique tours
              to explore local culture, cuisines, tradition and people of this
              city. In this experience i will help you to understand the life of
              local people.
            </p>
          </InfoSection>
        </Col>
      </Row>

      <hr className="my-4" style={{ borderColor: "#EBEBEB" }} />

      <Row>
        <Col>
          <InfoSection>
            <h5>O que farão?</h5>
            <p>{description}</p>
          </InfoSection>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default ShowTherapy;

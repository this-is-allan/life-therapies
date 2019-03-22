import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import faker from "faker";
import { CardStyled, Image, Body, Price, Category, Title } from "./styles";

const TherapyCard = memo(({ therapy }) => (
  <CardStyled tag={Link} to={`/tarot/${therapy.id}`}>
    <Image top width="100%" src={therapy.cover} alt="" />
    <Body>
      <Category>{faker.commerce.product()}</Category>
      <Title>{therapy.title}</Title>
      <Price>{therapy.price}</Price>
    </Body>
  </CardStyled>
));

TherapyCard.propTypes = {
  therapy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  })
};

export default TherapyCard;

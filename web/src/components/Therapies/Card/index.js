import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import faker from "faker";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const TherapyCard = memo(({ therapy }) => (
  <Card tag={Link} to={`/tarot/${therapy.id}`}>
    <CardImg top width="100%" src={therapy.cover} alt="" />
    <CardBody>
      <CardSubtitle>{faker.commerce.product()}</CardSubtitle>
      <CardSubtitle>{therapy.price}</CardSubtitle>
      <CardTitle>{therapy.title}</CardTitle>
    </CardBody>
  </Card>
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

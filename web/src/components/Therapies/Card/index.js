import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { CardStyled, Image, Body, Price, Category, Title } from "./styles";

const TherapyCard = memo(({ therapy }) => (
  <CardStyled tag={Link} to={`/tarot/${therapy.id}`}>
    <Image
      top
      width="100%"
      alt=""
      src={
        therapy.image
          ? therapy.image
          : "http://palavrasecliches.com/wp-content/uploads/2017/03/import_placeholder.png"
      }
    />
    <Body>
      <Category color={therapy.category.color}>
        {therapy.category.name}
      </Category>
      <Title>{therapy.title}</Title>
      <Price>
        <NumberFormat
          value={therapy.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"R$"}
          renderText={value => <div>{value} por hora</div>}
        />
      </Price>
    </Body>
  </CardStyled>
));

TherapyCard.propTypes = {
  therapy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default TherapyCard;

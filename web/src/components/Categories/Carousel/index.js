import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import { Carousel } from "./styles";

const CategoriesCarousel = ({ settings, categories }) => (
  <Carousel {...settings}>
    {categories.map(category => (
      <div key={category.slug}>
        <Button
          tag={NavLink}
          to={`${category.uri}`}
          className={`btn-icon`}
          activeClassName="is-active"
          exact
        >
          {category.name}
          <img src={category.icon} alt={category.slug} />
        </Button>
      </div>
    ))}
  </Carousel>
);

CategoriesCarousel.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default CategoriesCarousel;

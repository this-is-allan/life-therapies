import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import Slider from "react-slick";
import "./style.css";

const CategoriesCarousel = ({ settings, categories }) => (
  <Slider {...settings}>
    {categories.map(category => (
      <div key={category.slug}>
        <Button className={`btn-icon`}>
          {category.name}
          <img src={category.icon} alt={category.slug} />
        </Button>
      </div>
    ))}
  </Slider>
);

CategoriesCarousel.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default CategoriesCarousel;

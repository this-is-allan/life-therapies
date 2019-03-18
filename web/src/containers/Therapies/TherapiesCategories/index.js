import React, { Component } from "react";

import CategoriesCarousel from "../../../components/Categories/CategoriesCarousel";

const categories = [
  {
    name: "Todos",
    uri: "/",
    slug: "todos",
    icon: "https://image.flaticon.com/icons/svg/148/148839.svg"
  },
  {
    name: "Tarot",
    uri: "/tarot",
    slug: "tarot",
    icon: "https://image.flaticon.com/icons/svg/867/867831.svg"
  },
  {
    name: "Astrologia",
    uri: "/astrologia",
    slug: "astrologia",
    icon: "https://image.flaticon.com/icons/svg/1146/1146295.svg"
  },
  {
    name: "Hipnose",
    uri: "/hipnose",
    slug: "hipnose",
    icon: "https://image.flaticon.com/icons/svg/820/820763.svg"
  },
  {
    name: "Thetahealing",
    uri: "/thetahealing",
    slug: "thetahealing",
    icon: "https://image.flaticon.com/icons/svg/890/890666.svg"
  },
  {
    name: "Florais",
    uri: "/florais",
    slug: "florais",
    icon: "https://image.flaticon.com/icons/svg/1450/1450795.svg"
  }
];

const settings = {
  className: "d-flex justify-content-center py-3 my-2",
  variableWidth: true,
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: categories.length,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

export default class TherapiesCategories extends Component {
  render() {
    return <CategoriesCarousel categories={categories} settings={settings} />;
  }
}

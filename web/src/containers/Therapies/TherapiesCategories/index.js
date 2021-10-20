import React, { Component } from "react";

import CategoriesCarousel from "../../../components/Categories/Carousel";

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
    icon: "https://cdn-icons-png.flaticon.com/512/867/867831.png"
  },
  {
    name: "Astrologia",
    uri: "/astrologia",
    slug: "astrologia",
    icon: "https://cdn-icons.flaticon.com/png/512/1146/premium/1146295.png?token=exp=1634773129~hmac=c3d3ac63f30c81722cb796114e6f8c95"
  },
  {
    name: "Hipnose",
    uri: "/hipnose",
    slug: "hipnose",
    icon: "https://image.flaticon.com/icons/png/512/820/820763.png"
  },
  {
    name: "Thetahealing",
    uri: "/thetahealing",
    slug: "thetahealing",
    icon: "https://cdn-icons-png.flaticon.com/512/890/890666.png"
  },
  {
    name: "Florais",
    uri: "/florais",
    slug: "florais",
    icon: "https://cdn-icons-png.flaticon.com/512/1450/1450795.png"
  }
];

const settings = {
  className: "d-flex justify-content-center py-3 my-2 zindex-dropdown",
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

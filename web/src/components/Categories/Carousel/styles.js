import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  a {
    background-color: #fff !important;
    border: 1px solid orange !important;
    border-radius: 4px !important;
    border-color: rgb(220, 224, 224) !important;
    margin: 0 5px !important;
    color: #727272 !important;
    text-transform: uppercase !important;
    font-size: 11px !important;
    font-family: "Circular Std Bold", sans-serif !important;
    padding: 8px 22px !important;
    display: flex !important;
    align-items: center !important;

    &:hover {
      border-color: #ffc107 !important;
    }

    img {
      height: 22px;
      width: 22px;
      margin: 0 5px;
    }

    &.is-active {
      border-color: #ffc107 !important;
    }
  }
`;

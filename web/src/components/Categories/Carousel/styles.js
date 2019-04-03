import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  a {
    background: none !important;
    border: 1px solid orange !important;
    border-radius: 4px !important;
    border-color: rgb(220, 224, 224) !important;
    margin: 0 5px !important;
    color: #727272 !important;
    text-transform: uppercase !important;
    font-size: 11px !important;
    font-family: "Circular Std Bold", sans-serif !important;
    padding: 6px 12px !important;
    display: flex !important;
    align-items: center !important;

    img {
      height: 22px;
      width: 22px;
      margin: 0 5px;
    }

    @media only screen and (min-width: 768px) {
    }
  }
`;

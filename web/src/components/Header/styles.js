import styled from "styled-components";

import { Button } from "reactstrap";

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  height: 300px;
  /* background: #5f27cd; */
  background-image: url("https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position-y: 75%;
  background-size: cover;
  background-repeat: no-repeat;

  svg {
    left: 50%;
    position: absolute;
    height: auto;
    pointer-events: none;
    transform: translateX(-50%);
    z-index: 1;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 38px;
  font-family: "Circular Std Bold";
`;

export const HeaderButton = styled(Button)`
  /* font-size: 38px; */
  font-family: "Circular Std Bold";

  @media all and (max-width: 480px) {
    width: 100%;
    display: block;
  }
`;

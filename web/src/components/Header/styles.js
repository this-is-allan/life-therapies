import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  height: 300px;
  background: #5f27cd;

  svg {
    left: 50%;
    position: absolute;
    height: auto;
    min-width: 980px;
    pointer-events: none;
    transform: translateX(-50%);
    width: calc(100% + 2px);
  }
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 38px;
  font-family: "Circular Std Bold";
`;

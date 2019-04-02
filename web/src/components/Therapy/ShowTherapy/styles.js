import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle, Badge } from "reactstrap";

export const Category = styled.small`
  font-weight: 800;
  font-size: 12px;
  line-height: 1.3333333333333333em;
  letter-spacing: normal;
  text-transform: uppercase;
  color: #484848;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: nowrap;
  margin-bottom: 2px;
  font-family: "Circular Std Book";
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 1.1304347826086956em;
  word-wrap: break-word;
  font-weight: 800;
  font-family: "Circular Std Bold";
  color: #484848;
`;

export const Highlights = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 10px 0;
    clear: both;
    span {
      font-family: "Circular Std Book";
      margin: 0px 5px;
      word-wrap: break-word;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4444444444444444em;
      color: #484848;
    }
  }
`;

export const InfoSection = styled.div`
  h5 {
    font-family: "Circular Std Medium";
    font-size: 18px;
    padding-bottom: 16px;
  }
  p {
    font-size: 16px;
    font-family: "Circular Std Book";
  }
  h5,
  p {
    margin: 0px;
    word-wrap: break-word;
    line-height: 1.4444444444444444em;
    color: #484848;
  }
`;

export const Price = styled.span`
  font-size: 17px;
  font-family: "Circular Std Book";
  color: #484848;
  background: #fbffd4;
  /* border: 1px dashed #00cea7; */
  padding: 4px 14px;
  /* border-radius: 0.25rem; */
`;

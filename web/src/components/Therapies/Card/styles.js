import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle, Badge } from "reactstrap";

export const CardStyled = styled(Card)`
  margin: 5px 0;
  border: none !important;
  text-decoration: none !important;
`;

export const Price = styled.small`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  font-family: "Circular Std Book";
  color: rgb(72, 72, 72) !important;
`;

export const Category = styled(Badge)`
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  text-transform: uppercase;
  color: rgb(118, 118, 118);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
  font-family: "Circular Std Book";
  overflow: hidden;
  padding: 3px;
  border-radius: 5px;
  background: ${props => props.color || "#ccc"} !important;
`;

export const Image = styled(CardImg)`
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const Body = styled(CardBody)`
  padding: 8px 0 !important;
`;

export const Title = styled(CardTitle)`
  font-weight: 800;
  margin-bottom: 0 !important;
  font-size: 16px;
  line-height: 1.375em;
  letter-spacing: normal;
  font-family: "Circular Std Bold";
  color: rgb(72, 72, 72);
  max-height: 36px;
  /* text-overflow: ellipsis; */
  display: block;
  /* white-space: pre-line;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; */
`;

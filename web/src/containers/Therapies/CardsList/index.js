import React, { Component } from "react";
import faker from "faker";
import { Col } from "reactstrap";

import TherapyCard from "../../../components/Therapies/TherapyCard";

const therapies = [
  {
    id: 1,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 2,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 3,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 4,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 5,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 6,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 7,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  },
  {
    id: 8,
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(3),
    price: faker.commerce.price(),
    cover: faker.image.image()
  }
];

export default class TherapiesCardsList extends Component {
  render() {
    return therapies.map(therapy => (
      <Col key={therapy.id} md={3}>
        <TherapyCard therapy={therapy} />
      </Col>
    ));
  }
}

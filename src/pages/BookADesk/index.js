import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SelectAnAvailableDesk from "../../components/SelectAnAvailableDesk";
import SelectDate from "../../components/SelectDate";

const BookADesk = () => (
  <Container>
    <Row>
      <h1>Book A Desk</h1>
    </Row>
    <Row>
      <Col>
        <h5>Choose A Date</h5>
        <SelectDate />
      </Col>
      <Col>
        <Image src="officemap-spaceIQ.jpg" fluid />
        <SelectAnAvailableDesk />
      </Col>
    </Row>
  </Container>
);
export default BookADesk;

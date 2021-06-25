import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer>
    <Container className="footer" fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © {new Date().getFullYear()} -{" "}
          <strong>Banu - Pallavi - Priya</strong>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;

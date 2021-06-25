import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";

const LoginPage = () => (
  <Container>
    <Row>
      <Col xl={12}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="username@sample.com"
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <div></div>
          <Link
            className="btn btn-outline-light btn-lg signbtn"
            role="button"
            to="/hello"
          >
            Login
          </Link>
        </Form>
      </Col>
    </Row>
  </Container>
);
export default LoginPage;

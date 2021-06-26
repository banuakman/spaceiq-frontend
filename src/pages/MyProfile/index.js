import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import EmployeeCard from "../../components/EmployeeCard";

const MyProfile = () => (
  <Container>
    <Row>
      <h1>Welcome</h1>
    </Row>
    <Row>
      <Col>
        <EmployeeCard />
      </Col>
      <Col>
        <div>
          <Link
            className="btn btn-outline-light btn-lg bookadeskbtn"
            role="button"
            to="/bookadesk"
          >
            Book A Desk
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-outline-light btn-lg mybookingsbtn"
            role="button"
            to="/mybookings"
          >
            My Bookings
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);
export default MyProfile;

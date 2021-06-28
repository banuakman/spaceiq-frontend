import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import HeaderPublic from "../../components/HeaderPublic";
import NavTabsPublic from "../../components/NavTabsPublic";
import "./style.css";

const LandingPage = () => (
  <>
    <HeaderPublic>
      <NavTabsPublic />
    </HeaderPublic>
    <Row>
      <Image src="landing-spaceIQ.jpg" fluid />
    </Row>
  </>
);
export default LandingPage;

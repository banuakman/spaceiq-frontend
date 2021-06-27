import api from "../../api";
import { useQuery } from "react-query";
import SelectAnAvailableDesk from "../../components/SelectAnAvailableDesk";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "react-bootstrap/Image";

import { Container, Row, Col } from "react-bootstrap";

const fetchDesk = async () => await api.getAllDesks();

function BookADesk() {
  const { status, data, error } = useQuery("desks", fetchDesk);
  console.log(data);
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <Row>
        <h1>Book A Desk</h1>
      </Row>
      <Row>
        <Col>
          <h5>Choose A Date</h5>
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </Col>
        <Col>
          <h5>Choose An Available Seat</h5>
          <Image src="officemap-spaceIQ.jpg" fluid />
          <SelectAnAvailableDesk />
        </Col>
      </Row>
    </Container>
  );
}
export default BookADesk;


// const [date, setDate] = useState({
//   partNumber: "",
//   description: "",
//   purchasePrice: 0.00,
//   salePrice: 0.00,
//   quantity: 0
// });
// const [apiResponseStatus, setApiResponseStatus] = useState('noShow')

// async function submit(){
//   try{
//     await API.getBookingByDate(date);
//     setApiResponseStatus('sucess')

//   } catch(err){
//     console.log(err)
//     setApiResponseStatus('error')
//   }

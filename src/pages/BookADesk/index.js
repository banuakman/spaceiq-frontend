
import SelectAnAvailableDesk from "../../components/SelectAnAvailableDesk";
import api from "../../api";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from 'react-query';

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; 
  var y = date.getFullYear();
  return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}



function BookADesk() {
  const queryClient = useQueryClient();
const addBooking = useMutation(payload => api.createBooking(payload));

const handleSubmit = event => {
  event.preventDefault();
  addBooking.mutate(Object.fromEntries(new FormData(event.target)), {
    onSuccess: () => {
      queryClient.invalidateQueries('booking');
    },
  });
};
  const [selectedDate, setDate] = useState(dateToYMD(new Date()));

  const onChange = date => {
    setDate(dateToYMD(date));
  };
  return (
    <Container>
      <Row>
        <h1>Book A Desk</h1>
      </Row>
      <Row>
        <Col>
          <h5>Choose A Date</h5>
          <div>
            <Calendar onChange={onChange} value={new Date(selectedDate)} />
            {/* <button className="btn btn-success">Add Date</button> */}
          </div>
        </Col>
        <Col>
          <h5>Choose An Available Seat</h5>
          <Image src="officemap-spaceIQ.jpg" fluid />
          <SelectAnAvailableDesk selectedDate={selectedDate} handler={handleSubmit}/>

        </Col>
      </Row>
    </Container>
  );
}
export default BookADesk;



import api from "../../api";
import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const fetchAvailableDeskByDate = async (selectedDate) =>
  await api.getAvailableDeskByDate(selectedDate);

function SelectAnAvailableDesk({ selectedDate, handler }) {
  console.log(selectedDate);
  const { status, data, error } = useQuery(
    ["bookingsByDate", selectedDate],
    () => fetchAvailableDeskByDate(selectedDate)
  );

  console.log(`Error:${error}`);
  console.log(`Status:${status}`);
  console.log(`Data:${data}`);

  switch (status) {
    case "loading":
      return (
        <Container className="container mx-auto">
          <Row className="justify-content-md-center">
            <Spinner
              as="span"
              animation="border"
              size="lg"
              role="status"
              aria-hidden="true"
            />
          </Row>
        </Container>
      );
    case "error":
      return <p className="text-danger">{error.message}</p>;
    default:
      return (
        <form>
          <div className="mb-3">
            <select
              id="deskId"
              className="form-select"
              aria-label="available desks"
            >
              <option selected>View Available Desks for Selected Date</option>
              {data.map((item) => (
                <option key={item.id}>{item.code}</option>
              ))}
              ;
            </select>
          </div>
          <button type="submit" className="btn btn-primary submitbtn">
            Submit
          </button>
        </form>
      );
  }
}
SelectAnAvailableDesk.propTypes = {
  selectedDate: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default SelectAnAvailableDesk;

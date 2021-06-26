import "./style.css";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import api from "api";
import BookingsTable from "../../components/BookingsTable";

// import { useQuery } from "react-query";

// const fetchBookings = async () => await api.getBookingByEmployee();

function MyBookings() {
  // const { status, data, error } = useQuery("bookings", fetchBookings);
  // switch (status) {
  //   case "loading":
  //     return (
  //       <Button variant="primary" disabled>
  //         <Spinner
  //           as="span"
  //           animation="grow"
  //           size="sm"
  //           role="status"
  //           aria-hidden="true"
  //         />
  //         Loading...
  //       </Button>
  //     );
  //   case "error":
  //     return <p className="text-danger">{error.message}</p>;
  //   default:
  return (
    <Container className="container mx-auto">
      <Row>
        <Col xl={12}>
          <strong>MY BOOKINGS</strong>
        </Col>
      </Row>
      <Row>
        {/* <BookingsTable bookings={data} /> */}
        <BookingsTable />
      </Row>
    </Container>
  );
  // }
}
export default MyBookings;

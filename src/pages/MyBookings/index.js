import api from "../../api";
import { useQuery } from "react-query";
import BookingsTable from "../../components/BookingsTable";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchBookings = async () => await api.getAllBookings();

function MyBookings() {
  const { status, data, error } = useQuery("bookings", fetchBookings);
  console.log(data);

  switch (status) {
    case "loading":
      return (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >
          Loading...
        </Spinner>
      );
    case "error":
      return <p className="text-danger">{error.message}</p>;
    default:
      return (
        <Container className="container mx-auto">
          <Row className="justify-content-md-center">
            <Col lg="10">
              <h1>My Bookings</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="10">
              <BookingsTable bookings={data} />
            </Col>
          </Row>
        </Container>
      );
  }
}
export default MyBookings;

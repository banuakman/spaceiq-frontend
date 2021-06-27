import api from "../../api";
import { useQuery } from "react-query";
import EmployeeCard from "../../components/EmployeeCard";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "./style.css";

const fetchEmployee = async () => await api.getEmployeeById(1);

function MyProfile() {
  const { status, data, error } = useQuery("employee", fetchEmployee);
  console.log("Employee Data Fetch to MYPROFILE:", data);

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
        <Container>
          <Row>
            <h1>Welcome</h1>
          </Row>
          <Row>
            <Col>
              <EmployeeCard employee={data} />
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
  }
}
export default MyProfile;

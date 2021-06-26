//import api from "api";
import PropTypes from "prop-types";
//import { useMutation, useQueryClient } from "react-query";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function EmployeeCard({ employee }) {
  // TODO: MAP EMPLOYEE

  // TODO: APPLY EDITABLE TEXT TO ADDRESS, PHONE & EMAIL

  // TODO: updateEmployee

  // const updateEmployee = useMutation(({ payload, id }) =>
  //   api.updateEmployee(payload, id)
  // );

  // function handleUpdate(event) {
  //   const updatedEmployee = {
  //     ...employee.find(
  //       ({ id }) =>
  //         id ===
  //         // Make sure to check as a number!
  //         Number(event.target.dataset.id)
  //     ),
  //     ...{ [event.target.dataset.key]: event.target.value },
  //   };
  //   updatedEmployee.mutate({
  //     payload: updatedEmployee,
  //     id: event.target.dataset.id,
  //   });
  // }

  return (
    <Card style={{ width: "300 px" }}>
      <Card.Header>
        <h5>Valerie Black</h5>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Please use the below form to update your contact details.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Address: 1122 Spring Street Champaign, IL 61820
        </ListGroup.Item>
        <ListGroup.Item>Phone: 217-769-2488</ListGroup.Item>
        <ListGroup.Item>Email: ValerieBlack@test.com</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
export default EmployeeCard;

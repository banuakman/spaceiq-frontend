import api from "../../api";
import PropTypes from "prop-types";
//import { useMutation, useQueryClient } from "react-query";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import { useMutation, useQueryClient } from "react-query";

function EmployeeCard({ employee }) {
  // TODO: APPLY EDITABLE TEXT TO ADDRESS, PHONE & EMAIL

  // TODO: updateEmployee

  // const updateEmployee = useMutation(({ updatedinfo, id }) =>
  //   api.updateEmployee(updatedinfo, id)
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
  //     updatedinfo: updatedEmployee,
  //     id: event.target.dataset.id,
  //   });
  // }

  return (
    <Card>
      <Card.Header key={employee.id} data-id={employee.id}>
        <h5>
          {employee.firstName} {employee.lastName}
        </h5>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Please update your contact details, if there is any change.
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group">
        <ListGroup.Item>Address: {employee.address}</ListGroup.Item>
        <ListGroup.Item>Phone: {employee.phoneNumber}</ListGroup.Item>
        <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
export default EmployeeCard;

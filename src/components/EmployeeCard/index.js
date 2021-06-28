import api from "../../api";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import EditableText from "./EditableText";
import { Heading } from "@chakra-ui/react";
import "./style.css";

function EmployeeCard({ employee }) {
  const updateEmployee = useMutation(({ updatedinfo, id }) =>
    api.updateEmployee(updatedinfo, id)
  );

  useMutation(({ payload, id }) => api.update(payload, id));

  function handleUpdate(event) {
    const updatedEmployee = {
      ...employee.id(({ id }) => id === Number(event.target.dataset.id)),
      ...{ [event.target.dataset.key]: event.target.value },
    };
    updateEmployee.mutate({
      payload: updatedEmployee,
      id: event.target.dataset.id,
    });
  }

  return (
    <Card className="employeeCard">
      <Card.Header employeeKey={employee.id} data-id={employee.id}>
        <Heading>
          {employee.firstName} {employee.lastName}
        </Heading>
      </Card.Header>
      {/* <Card.Body>
        <Card.Text>
          Please update your contact details, if there is any change.
        </Card.Text>
      </Card.Body> */}

      <ListGroup className="list-group">
        <ListGroup.Item>
          <div>Address:</div>
          <div>{employee.address}</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div>Email:</div>
          <div>{employee.email}</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div>Phone:</div>
          <EditableText
            value={employee.phoneNumber}
            handler={handleUpdate}
            employeekey="phoneNumber"
            id={employee.phoneNumber}
          />
        </ListGroup.Item>
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

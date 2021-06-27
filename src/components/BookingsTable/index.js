// import api from "api";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "./style.css";

//import { useMutation, useQueryClient } from "react-query";

function BookingsTable({ bookings }) {
  //   console.log (bookings);
  // const deleteBooking = useMutation((id) => api.delete(id));
  // const queryClient = useQueryClient();

  // function handleDelete(event) {
  //   console.log("Gonna delete the booking with id " + event.target.dataset.id);
  //   deleteBooking.mutate(event.target.dataset.id, {
  //     onSuccess: async () => {
  //       console.log("OK");
  //       queryClient.invalidateQueries("bookings");
  //     },
  //   });
  // }
  return (
    <Table responsive striped borderless hover>
      <thead>
        <tr>
          <th>BookingId</th>
          <th>Date</th>
          <th>Desk</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(({ id, date, deskId }) => (
          <tr key={id} data-id={id}>
            <td>{id}</td>
            <td>{date}</td>
            <td>B0{deskId}</td>
            <td>
              <button className="btn btn-primary deletebtn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

BookingsTable.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      deskId: PropTypes.number.isRequired,
    })
  ),
};
export default BookingsTable;

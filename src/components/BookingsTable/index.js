//import api from "api";
import PropTypes from "prop-types";
//import { useMutation, useQueryClient } from "react-query";
import Table from "react-bootstrap/Table";

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
    <Table responsive vstriped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Date</th>
          <th>Desk</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* {bookings.map(({ bookingId, deskId, employeeId, date }) => (
          <tr key={bookingId} data-id={bookingId}>
            <td>{bookingId}</td>
            <td>{deskId}</td>
            <td>{employeeId}</td>
            <td>{date}</td>
            <td>
              <button className="btn btn-primary">Delete</button>
            </td>
          </tr>
        ))} */}

        <tr>
          <td>011122312</td>
          <td>b12</td>
          <td>08.09.2021</td>
          <td>
            <button className="btn btn-primary">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

BookingsTable.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.exact({
      bookingId: PropTypes.string.isRequired,
      deskId: PropTypes.string.isRequired,
      employeeId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};
export default BookingsTable;

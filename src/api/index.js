import ky from "ky";

const bookingUrl = "http://localhost:8042/edge/bookings/";
const employeeUrl = "localhost:8042/edge/employee/";

const deskUrl = "http://localhost:8080/api/desks/";

const api = {
  // BOOKING
  getAllBookings() {
    return ky.get(bookingUrl).json();
  },
  getAllDesks() {
    return ky.get(deskUrl).json();
  },

  getBookingsById(id) {
    return ky.get(bookingUrl + id).json();
  },

  createBooking(booking) {
    return ky.post(bookingUrl, { json: booking }).json();
  },

  deleteBooking(id) {
    return ky.delete(`${bookingUrl}/${id}`);
  },

  //   EMPLOYEE

  getAllEmployees() {
    return ky.get(employeeUrl).json();
  },

  getEmployeeById(id) {
    return ky.get(employeeUrl + id).json();
  },

  updateEmployee(request) {
    return ky.put(employeeUrl, { json: request }).json();
  },
};

export default api;

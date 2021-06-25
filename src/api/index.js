import ky from "ky";

const bookingUrl = "http://localhost:8080/api/booking/";
const employeeUrl = "http://localhost:8080/api/employee/";

const API = {
  // BOOKING
  getAllBookings() {
    return ky.get(bookingUrl).json();
  },
  getBookingById(id) {
    return ky.get(bookingUrl + id).json();
  },
  createBooking(booking) {
    return ky.post(bookingUrl, { json: booking }).json();
  },
  deleteBooking(booking, id) {
    return ky.delete(bookingUrl + id, { json: booking }).json();
  },

  // EMPLOYEE
  updateEmployee(request) {
    return ky.put(employeeUrl, { json: request }).json();
  },
};

export default API;

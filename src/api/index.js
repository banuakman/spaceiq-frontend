import ky from "ky";

const bookingUrl = "http://localhost:8080/api/bookings/";
const employeeUrl = "http://localhost:8080/api/employees/";
const employeeBookingsUrl = "http://localhost:8080/api/employeeBookings/";

const API = {
  // BOOKING
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

  // BOOKING BY EMPLOYEE

  getBookingByEmployeeId(employeeId) {
    return ky.get(employeeBookingsUrl + employeeId).json();
  },
};

export default API;

// import api from "api";
// import PropTypes from "prop-types";
// import { useMutation, useQueryClient } from "react-query";

const SelectAnAvailableDesk = () => (
  <form>
    <div className="mb-3">
      <select className="form-select" aria-label="Default select example">
        <option selected>View Available Desks for Selected Date</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <button type="Book My Desk" className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default SelectAnAvailableDesk;

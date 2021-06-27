import api from "../../api";
import React from "react";
// import PropTypes from "prop-types";
// import { useMutation, useQueryClient } from "react-query";
function SelectAnAvailableDesk() {
  return (
    <form>
      <div className="mb-3">
        <select className="form-select" aria-label="Default select example">
          <option selected>View Available Desks for Selected Date</option>
          <option value="1">B1</option>
          <option value="2">B2</option>
          <option value="3">B3</option>
          <option value="2">B4</option>
          <option value="3">B5</option>
        </select>
      </div>
      
      <button type="Book My Desk"  className="btn btn-primary">
        Submit
      </button>
      {/* <button type="temp" onClick={() =>console.log(api.getallbookings)
 } className="btn btn-primary">
      temp
    </button> */}
    </form>
  );
}

export default SelectAnAvailableDesk;



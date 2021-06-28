import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function HeaderPublic({ children }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark justify-content-between headerpublic">
      {children}
    </nav>
  );
}
HeaderPublic.propTypes = {
  children: PropTypes.any,
};

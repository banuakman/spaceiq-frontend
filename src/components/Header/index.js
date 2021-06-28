import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Header({ children }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark justify-content-between headerprivate">
      {children}
    </nav>
  );
}
Header.propTypes = {
  children: PropTypes.any,
};

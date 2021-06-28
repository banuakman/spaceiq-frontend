import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabsPublic() {
  const location = useLocation();
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Link className="navbar-brand nav-text" to="/">
        <img
          src="logo-spaceIQ-public.png"
          alt="spaceIQ"
          width="160"
          height="60"
          className="d-inline-block align-text-top leftpicture"
        />
      </Link>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-toggle"
        aria-controls="nav-content"
        aria-expanded="false"
        onClick={() => setShow(!show)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        style={show ? { display: "block" } : { display: "none" }}
        className="navbar-collapse collapse nav-group "
        id="navbar-toggle"
      >
        <ul className="navbar-nav nav-group ms-auto rightmenu">
          <li className="nav-item">
            <Link
              to="/aboutus"
              className={
                location.pathname === "/aboutus"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                location.pathname === "/login" ? "nav-link active" : "nav-link"
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavTabsPublic;

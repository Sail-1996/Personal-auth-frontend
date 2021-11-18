import React from "react";
import { Link } from "react-router-dom";
const Header = ({ userName, isLoggedIn, onLogout }) => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-brand">
        <div className="d-flex align-items-center">
          <span className="h4">Personal Notes</span>
        </div>
      </div>
      {isLoggedIn && (
        <h4 style={{ marginLeft: "auto", marginRight: "4px" }}>
          <span className="badge badge-pill badge-secondary text-capitalize">
            Welcome {userName}
          </span>
        </h4>
      )}
      {isLoggedIn && (
        <button
          type="button"
          onClick={onLogout}
          className="btn btn-outline-warning"
        >
          Logout|<i className="fas fa-sign-out-alt"></i>
        </button>
      )}
    </div>
  </nav>
);

export default Header;

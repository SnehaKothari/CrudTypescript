import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";

type NavbarProps={
    styles?:React.CSSProperties;
}

const Navbar = (Props:NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      <Link className="navbar-brand" to="/">React User</Link>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
           <li className="nav-item">
      <Link className="nav-link" to="/"> Home</Link>
           </li>
           <li className="nav-item">
     <Link className="nav-link"  to="/about">About</Link>
           </li>
        </ul>
     </div>

    <Link className="btn btn-outline-light" to="/addUsers">Add User</Link>
    </div>
    </nav>
  );
};

export default Navbar;
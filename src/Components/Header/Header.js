import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import elite from "../Images/logo.png";

const Header = () => {
  return (
    <Navbar className="fs-5" bg="dark" variant="dark">
      <Container>
        <div className="d-grid me-5">
          <NavLink className="text-center" to="/home">
            <img src={elite} alt="" />
          </NavLink>
          <strong className="text-white">
            <span className="text-success">ELITE</span> BOXING
          </strong>
        </div>
        <Nav>

          <NavLink
            activeClassName="navs-active"
            className="navs me-5  text-decoration-none"
            to="/addreview"
          >
            Add Review
          </NavLink>

          <NavLink
            activeClassName="navs-active"
            className="navs me-5  text-decoration-none"
            to="/reviews"
          >
            Reviews
          </NavLink>

          <NavLink
            activeClassName="navs-active"
            className="navs me-5  text-decoration-none"
            to="/managereviews"
          >
            Manage Reviews
          </NavLink>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

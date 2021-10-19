import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const {user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Ever Care Clinic
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/#services">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to ="/centers">
            Care Centers
          </Nav.Link>
        {  user.email?(
          <button onClick={logOut} className=" btn btn-regular">LogOut</button>
        ):(
         <Nav.Link as={Link} to ="/login">
            Log In
          </Nav.Link>)}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

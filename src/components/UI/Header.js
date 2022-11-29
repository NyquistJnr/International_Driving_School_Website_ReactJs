import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useAuthContext } from "../../store/auth-context";

import classes from "./Header.module.css";

const Header = () => {
  const { isLogin, logout } = useAuthContext();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            International Driving School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey={1} as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link eventKey={3} as={Link} to="/registration">
                Registration
              </Nav.Link>
              <Nav.Link eventKey={7} as={Link} to="/payment">
                Payment
              </Nav.Link>
              <Nav.Link eventKey={4} as={Link} to="/about-us">
                About Us
              </Nav.Link>
              {isLogin && (
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/master-user"
                  className={classes.masteruser}
                >
                  MasterUser
                </Nav.Link>
              )}
              {!isLogin && (
                <Nav.Link
                  eventKey={5}
                  as={Link}
                  to="/login"
                  className={classes.login}
                >
                  Login
                </Nav.Link>
              )}
              {!isLogin && (
                <Nav.Link
                  eventKey={6}
                  as={Link}
                  to="/sign-up"
                  className={classes.signup}
                >
                  Sign-Up
                </Nav.Link>
              )}
              {isLogin && (
                <button
                  className="btn-sm btn btn-primary"
                  onClick={() => logout()}
                >
                  LogOut
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={classes.spacebuttom}></div>
    </>
  );
};

export default Header;

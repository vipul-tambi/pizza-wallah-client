import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdLocalOffer } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUserReducer } from "../reducers/userReducer";
import { logoutUser } from "../actions/userAction";

function ColorSchemesExample() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Image src="images/logo.png" alt="logo" style={{ height: "40px" }} />
          <Navbar.Brand href="/">
            <MdLocalOffer /> Free home delivery on order above{" "}
            <span>&#8377;</span>500
          </Navbar.Brand>
          <Nav className="ml-auto ">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy">
              <Nav.Link>Terms and Policy</Nav.Link>
            </LinkContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              title={currentUser ? currentUser.name : "User"}
            >
              {currentUser ? (
                <>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <LinkContainer to="/order">
                      <Nav.Link>Order</Nav.Link>
                    </LinkContainer>
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item>
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <LinkContainer to="/register">
                      <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                  </NavDropdown.Item>
                </>
              )}

              <NavDropdown.Item>
                <LinkContainer to="/cart">
                  <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

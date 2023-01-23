import React, { useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin)
      navigate("/");
  }, []);
  return (
    <>
      <Container className="p-1">
        <Row>
          <h1 className="bg-danger text-center text-light p-2 m-10">
            Admin Panel
          </h1>
          <Col md={5} />
          <Col md={2} style={{ display: "flex", alignItems: "center" }}>
            <ButtonGroup
              vertical
              style={{
                minHeight: "200px",
                minWidth: "200px",
                backgroundColor: "red",
              }}
            >
              <Button className="bg-danger" style={{ border: "1px solid red" }}>
                <LinkContainer to="/admin/userlist">
                  <Nav.Link>All Users</Nav.Link>
                </LinkContainer>
              </Button>
              <Button className="bg-danger" style={{ border: "1px solid red" }}>
                <LinkContainer to="/admin/pizzalist">
                  <Nav.Link>All Pizzas</Nav.Link>
                </LinkContainer>
              </Button>
              <Button className="bg-danger" style={{ border: "1px solid red" }}>
                <LinkContainer to="/admin/addnewpizza">
                  <Nav.Link>Add New Pizzas</Nav.Link>
                </LinkContainer>
              </Button>
              <Button className="bg-danger" style={{ border: "1px solid red" }}>
                <LinkContainer to="/admin/orderlist">
                  <Nav.Link>Order List</Nav.Link>
                </LinkContainer>
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={5}></Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;

import React, { useState, useEffect } from "react";
import { Container, Button, Form, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentItem")) {
      navigate("/");
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <>
      <Container>
        <Card style={{ width: "80%", margin: "auto" }}>
          <Card.Img
            style={{ height: "400px" }}
            src="https://thumbs.dreamstime.com/b/toddlers-running-pizza-vector-illustration-hungry-siblings-eating-italian-food-happy-brother-sister-cartoon-characters-146677027.jpg"
          />
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={loginHandler}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;

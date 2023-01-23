import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../actions/userAction";
import { message } from "antd";
import Loader from "../components/Loader";
import Error from "../components/Error";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
  const dispatch = useDispatch();
  const registerHandler = () => {
    if (password !== confirmPassword) {
      alert("Password do not match");
    } else {
      const user = { username, email, password, confirmPassword };
      dispatch(RegisterUser(user));
      setUsername("");
      setEmail("");
      setpassword("");
      setConfirmPassword("");
      message.success("Registration Successful");
    }
  };
  return (
    <>
      <Container>
        {loading && <Loader />}
        {error && <Error error="Something went wrong" />}
        <Card style={{ width: "80%", margin: "auto" }}>
          <Card.Img
            style={{ height: "400px" }}
            src="https://thumbs.dreamstime.com/b/toddlers-running-pizza-vector-illustration-hungry-siblings-eating-italian-food-happy-brother-sister-cartoon-characters-146677027.jpg"
          />
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

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
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={registerHandler}>
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Register;

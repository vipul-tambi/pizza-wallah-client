import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { addPizza } from "../../actions/pizzaAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import Error from "../Error";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
const AddNewPizza = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
    message.success("Pizza Added Successfully");
    navigate("/admin/pizzalist");
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Error in adding new Pizza" />}

      <Container
        style={{
          paddingLeft: "200px",
          paddingRight: "200px",
          marginTop: "5px",
        }}
      >
        <Form
          className="bg-warning"
          style={{ padding: "10px", borderRadius: "10px" }}
          onSubmit={submitForm}
        >
          <h1 style={{ textAlign: "center" }}>Add New Pizza</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Pizza Name"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Small Price</Form.Label>
                <Form.Control
                  value={smallPrice}
                  type="text"
                  onChange={(e) => setSmallPrice(e.target.value)}
                  placeholder="Enter Price"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Medium Price</Form.Label>
                <Form.Control
                  value={mediumPrice}
                  type="text"
                  onChange={(e) => setMediumPrice(e.target.value)}
                  placeholder="Enter Price"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Large Price</Form.Label>
                <Form.Control
                  value={largePrice}
                  type="text"
                  onChange={(e) => setLargePrice(e.target.value)}
                  placeholder="Enter Price"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter Image Url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add New Pizza
          </Button>
        </Form>
        <Link to="/admin" style={{ fontWeight: "bold", fontSize: "20px" }}>
          Back to admin Panel
        </Link>
      </Container>
    </>
  );
};

export default AddNewPizza;

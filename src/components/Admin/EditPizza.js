import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const EditPizza = () => {
  const navigate = useNavigate();
  const { pizzaId } = useParams();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading, updaterror, updatesuccess } = updatePizzaState;

  useEffect(() => {
    console.log(pizza);
    if (pizza) {
      if (pizza._id === pizzaId) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(pizzaId));
      }
    } else {
      dispatch(getPizzaById(pizzaId));
    }
  }, [pizza, dispatch, pizzaId]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: pizzaId,
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
    dispatch(updatePizza(updatedPizza));
    message.success("Pizza Updated Successfully");
    navigate("/admin/pizzalist");
  };

  return (
    <>
      {updateloading && <Loader />}
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
          <h1 style={{ textAlign: "center" }}>Edit Pizza</h1>
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
            Update Pizza
          </Button>
        </Form>
        <Link to="/admin" style={{ fontWeight: "bold", fontSize: "20px" }}>
          Back to admin Panel
        </Link>
      </Container>
    </>
  );
};

export default EditPizza;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { message } from "antd";
const Pizza = (props) => {
  const [show, setShow] = useState(false);
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const { pizza } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    message.success("Added to cart");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          style={{ height: "150px", cursor: "pointer" }}
          src={pizza.image}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>

          <Card.Text>
            <Row>
              <Col md={6}>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((i) => (
                    <option>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6} style={{ marginTop: "8px" }}>
              <span>&#8377;</span>
              {pizza.prices[0][varient] * quantity}
            </Col>
            <Col md={6}>
              <Button onClick={addToCartHandler}>
                <BsCartFill />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/*Modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              style={{ height: "300px", cursor: "pointer" }}
              src={pizza.image}
            />
          </div>
          <div>
            <h5 style={{ color: "red" }}>Description:</h5>
            {pizza.description}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";
import { message } from "antd";
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container>
        <Row>
          <Col md={5}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Card
                    style={{ backgroundColor: "#F2D2BD", marginTop: "10px" }}
                    key={item.name}
                  >
                    <Row>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Title style={{ color: "#5C4033" }}>
                            {item.name}
                          </Card.Title>
                          <Card.Text style={{ color: "#6E260E" }}>
                            Price : {item.quantity} x{" "}
                            {item.prices[0][item.varient]}= {"  "}
                            {item.price}
                            <br />
                            Quantity:{"    "}
                            <AiFillMinusCircle
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(
                                  addToCart(
                                    item,
                                    item.quantity - 1,
                                    item.varient
                                  )
                                )
                              }
                            />
                            {"    "} {item.quantity} {"    "}
                            <BsFillPlusCircleFill
                              className="text-success"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(
                                  addToCart(
                                    item,
                                    item.quantity + 1,
                                    item.varient
                                  )
                                )
                              }
                            />
                          </Card.Text>
                          <Button
                            className="bg-danger"
                            onClick={() => dispatch(deleteFromCart(item))}
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Col>
                      <Col md={6}>
                        <Card.Img src={item.image} style={{ height: "100%" }} />
                      </Col>
                    </Row>
                  </Card>
                </>
              ))}
            </Row>
          </Col>
          <Col md={2}></Col>

          <Col md={5}>
            <h1>Payment Info</h1>
            <Card style={{ backgroundColor: "#f1f7d0" }}>
              <Card.Body>
                {cartItems.map((item) => (
                  <Card.Text className="bg-white">
                    {item.name} : <span>&#8377;</span>
                    {item.price}
                  </Card.Text>
                ))}
              </Card.Body>

              <h4 className="bg-warning" style={{ margin: "15px" }}>
                Grand Total : <span>&#8377;</span>
                {subTotal}
              </h4>
              <div style={{ marginLeft: "20px", marginBottom: "5px" }}>
                <Checkout subTotal={subTotal} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;

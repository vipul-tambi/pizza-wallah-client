import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getUsersOrders } from "../actions/orderAction";
import { Row, Col } from "react-bootstrap";
const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, orders, error } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersOrders());
  }, [dispatch]);
  return (
    <>
      <h1
        style={{
          margin: "5px 100px",
        }}
      >
        Your Orders
      </h1>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {orders &&
        orders.map((order) => (
          <Row
            style={{
              margin: "5px 100px",
              backgroundColor: "#F0F8FF",
              border: "1px solid #4E78A0",
            }}
            key={order._id}
          >
            <Col md={4} style={{ margin: "auto 0px", color: "green" }}>
              {order.orderItems.map((item) => (
                <div key={item.name}>
                  <h6>
                    {item.name} ({item.varient}) * {item.quantity} ={" "}
                    {item.price}
                  </h6>
                </div>
              ))}
            </Col>
            <Col md={4}>
              <h4 style={{ color: "red" }}>Address</h4>
              <h6>Street : {order.shippingAddress.street}</h6>
              <h6>City : {order.shippingAddress.city}</h6>
              <h6>Pincode : {order.shippingAddress.pincode}</h6>
              <h6>Country : {order.shippingAddress.country}</h6>
            </Col>
            <Col md={4}>
              <h4 style={{ color: "red" }}>Order Info</h4>
              <h6>Amount : {order.orderAmount}</h6>
              <h6>Transaction Id : {order.transactionId}</h6>
              <h6>Order Id : {order._id}</h6>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default OrderScreen;

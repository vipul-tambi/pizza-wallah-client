import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deliverOrder } from "../../actions/orderAction";
import { Row, Col } from "react-bootstrap";
import Loader from "../Loader";
import Error from "../Error";
import { Button } from "react-bootstrap";
const OrderList = () => {
  const allOrderState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
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
            <Col md={3} style={{ margin: "auto 0px", color: "green" }}>
              {order.orderItems.map((item) => (
                <div key={item.name}>
                  <h6>
                    {item.name} ({item.varient}) * {item.quantity} ={" "}
                    {item.price}
                  </h6>
                </div>
              ))}
            </Col>
            <Col md={3}>
              <h4 style={{ color: "red" }}>Address</h4>
              <h6>Street : {order.shippingAddress.street}</h6>
              <h6>City : {order.shippingAddress.city}</h6>
              <h6>Pincode : {order.shippingAddress.pincode}</h6>
              <h6>Country : {order.shippingAddress.country}</h6>
            </Col>
            <Col md={3}>
              <h4 style={{ color: "red" }}>Order Info</h4>
              <h6>Username : {order.name}</h6>
              <h6>Email : {order.email}</h6>
              <h6>Amount : {order.orderAmount}</h6>
              <h6>Order Id : {order._id}</h6>
            </Col>

            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginTop: "100px",
                }}
              >
                {order.isDelivered ? (
                  <h6 className="text-success">Delivered</h6>
                ) : (
                  <>
                    <Button
                      className="btn-danger"
                      onClick={() => {
                        dispatch(deliverOrder(order._id));
                      }}
                      style={{
                        width: "100px",
                      }}
                    >
                      Deliver
                    </Button>
                  </>
                )}
              </div>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default OrderList;

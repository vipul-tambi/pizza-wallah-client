import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import { message } from "antd";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    // console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && message.success("Order Successfull")}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LqZTkSAzMUm1mNGRn2K2ykHOONPDAu9vuXFle8VNvmiAd0Lk0uZZOUcY8Ch5rNtw5wpcT1ZbrmVNdLefYqdS4cX00PytVS53n"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;

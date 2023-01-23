import axios from "axios";
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const res = await axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_ERROR" });
    console.log(error);
  }
};

export const getUsersOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.get(
      "https://pizza-wallah-server.onrender.com/api/orders/alluserorder"
    );
    console.log(response);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  dispatch({ type: "GET_ALL_ORDER_REQUEST" });
  try {
    const response = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/orders/deliverorder",
      { orderid }
    );

    const orders = await axios.get(
      "https://pizza-wallah-server.onrender.com/api/orders/alluserorder"
    );
    console.log(response);
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};

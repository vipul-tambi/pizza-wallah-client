import axios from "axios";
import { message } from "antd";
export const RegisterUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/users/register",
      user
    );
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const res = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/users/login",
      user
    );
    console.log(res);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: "GET_USERS_REQUEST",
  });
  try {
    const res = await axios.get(
      "https://pizza-wallah-server.onrender.com/api/users/getAllusers"
    );
    // console.log(res);
    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "GET_USERS_FAIL",
      payload: err,
    });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post(
      "https://pizza-wallah-server.onrender.com/api/users/deleteuser",
      { userid }
    );
    message.success("User Deleted Successully", 2);
    window.location.reload();
  } catch (error) {
    message.error(error);
  }
};

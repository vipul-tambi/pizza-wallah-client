import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({
    type: "GET_PIZZAS_REQUEST",
  });
  try {
    const res = await axios.get(
      "https://pizza-wallah-server.onrender.com/api/pizzas/getAllPizzas"
    );
    // console.log(res);
    dispatch({
      type: "GET_PIZZAS_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "GET_PIZZAS_FAIL",
      payload: err,
    });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({
    type: "ADD_PIZZAS_REQUEST",
  });
  try {
    const res = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/pizzas/addpizza",
      { pizza }
    );
    // console.log(res);
    dispatch({
      type: "ADD_PIZZAS_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ADD_PIZZAS_FAIL",
      payload: err,
    });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({
    type: "GET_PIZZABYID_REQUEST",
  });
  try {
    const res = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/pizzas/getpizzabyid",
      { pizzaId }
    );
    // console.log(res);
    dispatch({
      type: "GET_PIZZABYID_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "GET_PIZZABYID_FAIL",
      payload: err,
    });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({
    type: "UPDATE_PIZZABYID_REQUEST",
  });
  try {
    const res = await axios.post(
      "https://pizza-wallah-server.onrender.com/api/pizzas/updatepizza",
      { updatedPizza }
    );
    // console.log(res);
    dispatch({
      type: "UPDATE_PIZZABYID_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_PIZZABYID_FAIL",
      payload: err,
    });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post(
      "https://pizza-wallah-server.onrender.com/api/pizzas/deletepizza",
      { pizzaId }
    );
    message.success("Pizza Deleted Successully");
  } catch (error) {
    message.error(error);
  }
};

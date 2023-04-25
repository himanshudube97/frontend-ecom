import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import axios from "axios";
let baseUrl = "http://localhost:8000";

export const getProduct = () => async (dispatch) => {
  //this dispatch parameter is here provided by "react-thunk" and this async function is a thunk function.
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const { data } = await axios.get(baseUrl + "/api/v1/allProducts");
    console.log(data, "data");
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//CLEARING ERRORS

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

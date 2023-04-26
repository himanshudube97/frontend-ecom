import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import axios from "axios";
let baseUrl = "http://localhost:8000";

export const getProduct = () => async (dispatch) => {
  //this dispatch parameter is here provided by "react-thunk" and this async function is a thunk function.
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const { data } = await axios.get(baseUrl + "/api/v1/allProducts");

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${baseUrl}/api/v1/singleProduct/${id}`);
    console.log(data, "datarecevied")
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.result,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//CLEARING ERRORS

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

//the flow of redux is , action then dispatch function dispatches action and sends it to the store and there reducer function is called and according to initial state and action a new state is returned.

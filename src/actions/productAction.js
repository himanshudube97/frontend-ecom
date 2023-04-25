import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import axios from "axios";
let baseUrl = "http://localhost:8000";

export const getProduct = async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    console.log("helo")
    const { data } = await axios.get(baseUrl+"/api/v1/allProducts");
    console.log(data, "data");
    dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data
    })
  } catch (error) {
    console.log("bro")
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
import axios from 'axios'
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

export const getListProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/products')
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: {products: data}})
  } catch (err) {
    const error = err?.response?.data?.message || err?.message
    dispatch({type: PRODUCT_LIST_FAIL, payload: {error}})
  }
}

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST})
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: {product: data}})
  } catch (err) {
    const error = err?.response?.data?.message || err?.message
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: {error}})
  }
}

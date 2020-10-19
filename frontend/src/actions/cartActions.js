import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY } from '../constants/cartConstants'

export const addToCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {product}
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {id}
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const updateProductQty = (id, qty) => async (dispatch) => {
  dispatch({type: CART_UPDATE_QUANTITY, payload: {id, qty}})
}

import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY } from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: []}, action) => {
  const {product, id} = action.payload || {}
  switch (action.type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(cartItem => cartItem._id === product._id)
      const cartItems = existItem ? state.cartItems.map(cartItem => cartItem._id === existItem._id ? product : cartItem)
          : [...state.cartItems, product]
      return {...state, cartItems}
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem._id !== id),
      }
    case CART_UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => cartItem._id === id ?
            {...cartItem, qty: action.payload.qty} : {...cartItem})
      }
    default:
      return state
  }
}

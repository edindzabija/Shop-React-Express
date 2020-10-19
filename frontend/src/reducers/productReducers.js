import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from '../constants/productConstants';

const productListState = {
  products: [],
  loading: true
};

export const productListReducer = ( state = productListState, action ) => {
  const { loading = false, products, error } = action.payload || {};
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading, products };
    case PRODUCT_LIST_FAIL:
      return { loading, error };
    default:
      return state;
  }
};

const productDetailsState = {
  product: { reviews: [] },
  loading: true
};

export const productDetailsReducer = ( state = productDetailsState, action ) => {
  const { loading = false } = action.payload || {};
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading, product: action.payload.product };
    case PRODUCT_DETAILS_FAIL:
      return { loading, error: action.payload.error };
    default:
      return state;
  }
};

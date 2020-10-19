import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getProductDetails } from '../actions/productActions'
import ProductDetails from "../components/ProductDetails"
import { Button } from "react-bootstrap"

const ProductScreen = ( { history, match } ) => {
  const dispatch = useDispatch()
  const { loading, error, product } = useSelector( ( { productDetails } ) => productDetails ) || {}

  useEffect( () => {
    dispatch( getProductDetails( match.params.id ) )
  }, [dispatch, match] )

  return (
    <>
      <Button className='btn btn-dark my-3' onClick={() => history.goBack()}>
        Go Back
      </Button>
      {loading ? (<Loader/>)
        : error ? (<Message variant='danger'>{error}</Message>)
          : <ProductDetails product={product} history={history}/>
      }
    </>
  )
}

export default ProductScreen

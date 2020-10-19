import React, { useState } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from './Rating'
import { addToCart } from "../actions/cartActions"
import { useDispatch } from "react-redux"

const ProductDetails = ({product, history}) => {
  const {image, name, rating, numReviews, price, description, countInStock} = product || {}
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty: Number(qty)}))
    history.push(`/cart`)
  }

  return (
    <Row>
      <Col md={6}>
        <Image src={image} alt={name} fluid/>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              value={rating}
              text={`${numReviews} Reviews`}
            />
          </ListGroup.Item>
          <ListGroup.Item>Price: ${price}</ListGroup.Item>
          <ListGroup.Item>
            Description: {description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>
                    {countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            {countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e => setQty(e.target.value))}
                    >
                      {[...Array(countInStock).keys()].map((stock, index) => (
                        <option key={index} value={stock + 1}>
                          {stock + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}

            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className='btn-block'
                type='button'
                disabled={countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default ProductDetails

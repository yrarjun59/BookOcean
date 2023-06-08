import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailBook } from "../actions/bookActions";

import { useNavigate } from "react-router-dom";

function BookScreen() {
  const { id } = useParams();
  const [qty, SetQty] = useState(1);
  const dispatch = useDispatch();
  const { book, loading, error } = useSelector((state) => state.bookDetails);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailBook(id));
  }, []);

  const addToCartHandler = () => {
    console.log('working')
    // navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image src={book.image} alt={book.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{book.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
             
            </ListGroup.Item>

            <ListGroup.Item>{book.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>Rs {book.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Stock:</Col>
                <Col>{book.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
            </ListGroup.Item>

            {book.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>QTY</Col>
                  <Col xs="auto" className="my-1">
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => SetQty(e.target.value)}
                    >
                      {[...Array(book.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
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
                disabled={book.countInStock === 0}
                className="btn-block"
                type="button"
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default BookScreen;

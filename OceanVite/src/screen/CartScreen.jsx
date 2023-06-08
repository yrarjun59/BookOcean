import React, { useEffect } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const productId = id;
  const dispatch = useDispatch();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return <div>CartScreen</div>;
}

export default CartScreen;

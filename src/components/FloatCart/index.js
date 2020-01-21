import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
import firebase from 'firebase/app';
import 'firebase/database';

import './style.scss';

const FloatCart = ({ showCart, setShowCart, cartProducts, setCartProducts, inventory, setInventory }) => {
  const [state, setState] = useState(false);

  const removeProduct = (product) => {
    if (product.quantity === 1) {
      const index = cartProducts.findIndex(p => p.sku === product.sku);
      cartProducts.splice(index, 1);
      setCartProducts(cartProducts);
      setState(!state);
    } else {
      product.quantity = product.quantity - 1;
      setCartProducts(cartProducts);
      setState(!state);
    }
  };

  const products = cartProducts.map(product => {
    return (
      <CartProduct product={ product } removeProduct={() => {removeProduct(product)}} key={ product.sku } />
    );
  });

  const openFloatCart = () => {
    setShowCart(true);
  };

  const closeFloatCart = () => {
    setShowCart(false);
  };

  const proceedToCheckout = () => {
    const ref = firebase.database().ref();
    ref.update({
      "inventory": inventory
    })
    setCartProducts([]);
  };

  const totalPrice = () => {
    if (cartProducts.length === 0) {
      return {
        subTotal: 0
      }
    } else {
      const prices = cartProducts.map(p => (p.price * p.quantity));
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const total = prices.reduce(reducer);
      return {
        subTotal: total
      }
    }
  };

  return(
    <div className={`float-cart ${showCart? 'float-cart--open' : ''}`}>
      {showCart && (
        <div
          onClick={() => closeFloatCart()}
          className="float-cart__close-btn"
        >
          X
        </div>
      )}
      {!showCart && (
        <span
          onClick={() => openFloatCart()}
          className="bag bag--float-cart-closed"
        >
        </span>
      )}
      <div className="float-cart__content">
        <div className="float-cart__shelf-container">
          { products }
        </div>
        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">{totalPrice().subTotal}</p>
          </div>
          <div onClick={() => proceedToCheckout()} className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatCart;

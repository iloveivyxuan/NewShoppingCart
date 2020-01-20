import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';

import './style.scss';

const FloatCart = ({ showCart, setShowCart, cartProducts, setCartProducts }) => {

  const products = cartProducts.map(product => {
    return (
      <CartProduct product={ product } key={ product.sku } />
    );
  });

  const openFloatCart = () => {
    setShowCart(true);
  };

  const closeFloatCart = () => {
    setShowCart(false);
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
            <p className="sub-price__val">9.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatCart;

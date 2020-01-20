import React, { useEffect, useState } from 'react';

import './style.scss'

const Product = ({ product, showCart, setShowCart, cartProducts, setCartProducts, addProduct }) => {
  return (
    <div className="shelf-item" onClick={() => addProduct()}>
      <div className="shelf-stopper">Free Shipping</div>
      <div className="shelf-item__thumb">
        <img src={`/data/products/${product.sku}_1.jpg`} alt={product.title}/>
      </div>
      <div className="shelf-item__title">{ product.title }</div>
      <div className="shelf-item__price">{ product.price }</div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
}

export default Product;

import React, { useEffect, useState } from 'react';

import './style.scss'

const CartProduct = ({ product }) => {
  return (
    <div className="shelf-item">
      <div className="shelf-item__del"></div>
      <div className="shelf-item__thumb">
        <img src={`/data/products/${product.sku}_1.jpg`} alt={product.title}/>
      </div>
      <div className="shelf-item__details">
        <p className="title">{ product.title }</p>
        <p className="desc">{ product.description }</p>
      </div>
      <div className="shelf-item__price">
        <p>{ product.price }</p>
      </div>

    </div>
  );
}

export default CartProduct;

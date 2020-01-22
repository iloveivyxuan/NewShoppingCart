import React, { useEffect, useState } from 'react';

import './style.scss'

const Product = ({ product, showCart, setShowCart, cartProducts, setCartProducts, inventory, setInventory }) => {
  const addProduct = (product, size) => {
    setShowCart(true);
    if (product['quantity']) {
      product['quantity'] = product['quantity'] + 1;
    } else {
      product['quantity'] = 1;
      const list = cartProducts;
      list.push(product);
    }
    setCartProducts(cartProducts);
    inventory[product.sku][size] = inventory[product.sku][size] - 1;
    setInventory(inventory);
  };

  return (
    <div className="shelf-item">
      <div className="shelf-stopper">Free Shipping</div>
      <div className="shelf-item__thumb">
        <img src={`/data/products/${product.sku}_1.jpg`} alt={product.title}/>
      </div>
      <div className="shelf-item__title">{ product.title }</div>
      <div className="shelf-item__price">{ product.price }</div>
      {
        inventory[product.sku] && (
        <div className="shelf-item__sizes">
          <div
            className={`shelf-item__sizes-btn ${inventory[product.sku]['S'] > 0 ? 'available' : ''}`}
            onClick={() => addProduct(product, 'S')}>S</div>
          <div
            className={`shelf-item__sizes-btn ${inventory[product.sku]['M'] > 0 ? 'available' : ''}`}
            onClick={() => addProduct(product, 'M')}>M</div>
          <div
            className={`shelf-item__sizes-btn ${inventory[product.sku]['L'] > 0 ? 'available' : ''}`}
            onClick={() => addProduct(product, 'L')}>L</div>
          <div
            className={`shelf-item__sizes-btn ${inventory[product.sku]['XL'] > 0 ? 'available' : ''}`}
            onClick={() => addProduct(product, 'XL')}>XL</div>
        </div>
      )}
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
}

export default Product;

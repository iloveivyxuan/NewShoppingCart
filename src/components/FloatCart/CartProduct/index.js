import React, { useEffect, useState } from 'react';

const CartProduct = ({ product, removeProduct }) => {
  const [mouseOverState, setmouseOverState] = useState(false);

  const handleMouseOver = () => {
    setmouseOverState(true);
  };

  const handleMouseOut = () => {
    setmouseOverState(false);
  }

  return (
    <div className={`shelf-item ${mouseOverState? 'shelf-item--mouseover' : ''}`}>
      <div className="shelf-item__del"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        onClick={() => removeProduct(product)}
      />
      <div className="shelf-item__thumb">
        <img src={`/data/products/${product.sku}_1.jpg`} alt={product.title}/>
      </div>
      <div className="shelf-item__details">
        <p className="title">{ product.title }</p>
        <p className="desc">
          { product.style } <br/>
          Quality: { product.quantity }
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{ product.price }</p>
      </div>

    </div>
  );
}

export default CartProduct;

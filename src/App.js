import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="App">
      <main>
        <Shelf showCart={showCart} setShowCart={setShowCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </main>
      <FloatCart showCart={showCart} setShowCart={setShowCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
    </div>
  );
};

export default App;

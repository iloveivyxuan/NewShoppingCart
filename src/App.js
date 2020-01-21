import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/inventory.json');
      const json = await response.json();
      setInventory(json);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <main>
        <Shelf
          showCart={showCart}
          setShowCart={setShowCart}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          inventory={inventory}
          setInventory={setInventory} />
      </main>
      <FloatCart
        showCart={showCart}
        setShowCart={setShowCart}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        inventory={inventory}
        setInventory={setInventory} />
    </div>
  );
};

export default App;

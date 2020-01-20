import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <main>
        <Shelf showCart={showCart} setShowCart={setShowCart} />
      </main>
      <FloatCart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default App;

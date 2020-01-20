import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';

const App = () => {
  return (
    <div className="App">
      <main>
        <Shelf />
      </main>
      <FloatCart />
    </div>
  );
};

export default App;

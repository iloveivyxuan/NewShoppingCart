import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBXsGHQ2R0A-2H2cY7EbNQEZA7FB28NpU4",
  authDomain: "newshoppingcart-eccbc.firebaseapp.com",
  databaseURL: "https://newshoppingcart-eccbc.firebaseio.com",
  projectId: "newshoppingcart-eccbc",
  storageBucket: "newshoppingcart-eccbc.appspot.com",
  messagingSenderId: "699468622066",
  appId: "1:699468622066:web:947e45a20974766e71886b",
  measurementId: "G-EGZR7T90VR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const updateInventory = (snapshot) => {
      setInventory(snapshot.val());
    }
    db.once("value", updateInventory, error => alert(error));
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

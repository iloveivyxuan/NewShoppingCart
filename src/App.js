import React, { useEffect, useState } from 'react';
import Shelf from './components/Shelf';
import FloatCart from './components/FloatCart';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { SignIn } from './components/SignIn';
import SimplePopover from './components/Popover';
import { Avatar } from '@material-ui/core';


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
  const [user, setUser] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    const updateInventory = (snapshot) => {
      setInventory(snapshot.val());
    }
    db.once("value", updateInventory, error => alert(error));
  }, []);

  return (
    <div className="App">
      {user ? <SimplePopover><Avatar className='sign-in-btn' src={user.photoURL} /></SimplePopover> : <SignIn />}
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

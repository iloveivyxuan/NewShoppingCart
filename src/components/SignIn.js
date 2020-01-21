import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import '../App.css';

const SignIn = () => {
  return (
    <Button className='sign-in-btn' variant="contained" color="secondary" onClick={() => { SignInWithGoogle() }}>Sign In</Button>
  );
}

const SignOut = () => {
  firebase.auth().signOut()
}

const SignInWithGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export default SignIn;
export {SignOut, SignIn, SignInWithGoogle};

import React, { useState, Image } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import logo from './logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Button } from 'react-bootstrap';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './App.css';
import LoginModal from './LoginModal.js'
import RegisterModal from './RegisterModal.js'

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbMESaB6SiSbRq4a9Rxan9ITyPhJ8nzpU",
  authDomain: "coinlist-ccbdd.firebaseapp.com",
  projectId: "coinlist-ccbdd",
  storageBucket: "coinlist-ccbdd.appspot.com",
  messagingSenderId: "1019118624832",
  appId: "1:1019118624832:web:77e0b1d2d6292ad42c7fa5",
  measurementId: "G-0M4VL5ESD8"
};

const app = initializeApp(firebaseConfig);

function App() {

    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    const [rowData] = useState([
       { '#': 1, name: "Coin", price: "Celica", '7d%': 35000, 'market cap': 20, 'volume (24hr)': 20, 'tweets (24hr)': 20, 'Tweets last 7 days': 30, 'Price last 7 days': 100 }
   ]);

    const onLoginPressed = () => {
      const emailError = emailValidator(email.value)
      const passwordError = passwordValidator(password.value)
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError })
        setPassword({ ...password, error: passwordError })
        return
      }

      console.log(email, password)
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("logging in", user)
          props.route.params.login(user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });

    }
   
   const [columnDefs] = useState([
       { field: '#', width: 120 },
       { field: 'name', width: 120 },
       { field: 'price', width: 120 },
       { field: '7d%', width: 120 },
       { field: 'market cap', width: 120 },
       { field: 'volume (24hr)', width: 150 },
       { field: 'tweets (24hr)', width: 150 },
       { field: 'Tweets last 7 days', width: 150 },
       { field: 'Price last 7 days', width: 150 },
   ])


  return (
    <div className="App">
      <header className="NavBar">
        <img src={logo} className="logo" />
        <a href="/about">About</a>
        <a href="/zebracoin">Zebra Coin (ZC)</a>
        <a href="listing">Listing</a>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
        <Button variant="primary" onClick={handleShowSignup}>
          Sign Up
        </Button>
      </header>
      <LoginModal show={show} close={handleClose}/>
      <RegisterModal show={showSignup} close={handleCloseSignup}/>
       <div className="ag-theme-alpine" style={{height: 400, width: 1400, margin: '0 auto'}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
    </div>
  );
}

export default App;

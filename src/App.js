import React, { useState, Image } from 'react';
import logo from './logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './App.css';
import LoginModal from './modal/LoginModal.js'
import RegisterModal from './modal/RegisterModal.js'
import HomeScreen from './screen/HomeScreen.js'
import AboutScreen from './screen/AboutScreen.js'
import ZebraCoinScreen from './screen/ZebraCoinScreen.js'
import ListingScreen from './screen/ListingScreen.js'
import Navbar from './screen/Navbar.js'
import NavbarLogged from './screen/NavbarLogged.js'

import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAbMESaB6SiSbRq4a9Rxan9ITyPhJ8nzpU",
  authDomain: "coinlist-ccbdd.firebaseapp.com",
  projectId: "coinlist-ccbdd",
  storageBucket: "coinlist-ccbdd.appspot.com",
  messagingSenderId: "1019118624832",
  appId: "1:1019118624832:web:77e0b1d2d6292ad42c7fa5",
  measurementId: "G-0M4VL5ESD8"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const AuthorizationContext  = React.createContext();

function App() {

    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(null)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowSignup = () => setShowSignup(true);
    const handleCloseSignup = () => setShowSignup(false);

    function login(a) {
      setUser(a)
    }

    function logout(){
      setUser(null)
    }
  
  return (
    <div className="App">

      <Router>
          <header className="NavBar">
            <Link to="/"><img src={logo} className="logo" /> </Link>
            <Link to="/about">About</Link>
            <Link to="/zebracoin">Zebra Coin (ZC)</Link>
            <Link to="/listing">Listing</Link>

            <AuthorizationContext.Provider value={user}>
              {!!user ? <NavbarLogged logout={logout} /> : <Navbar handleShow={handleShow} handleShowSignup={handleShowSignup}/>}
            </AuthorizationContext.Provider>
            
          </header>

            <LoginModal show={show} close={handleClose} login={login}/>
            <RegisterModal show={showSignup} close={handleCloseSignup} login={login}/>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/zebracoin" element={<ZebraCoinScreen />} />
            <Route path="/listing" element={<ListingScreen />} />
          </Routes>
      </Router>
    </div>
  );
}


export { 
  auth, App as default 
}

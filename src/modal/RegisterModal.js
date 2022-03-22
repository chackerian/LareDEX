import React, { useState } from 'react'
import { TextField } from '@mui/material'

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

import auth from '../App.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function RegisterModal(props) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const onSignUpPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError ) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      console.log("ERROR", emailError, passwordError)
    }
      var user = {
        username: username.value,
        email: email.value,
        password: password.value
      }
      console.log("register", user)

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log("LOGGED", user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

      props.login(user)

  }

  const forgetPassword = () => {

  }

  const signup = () => {

  }

  return (
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalFields">
             <TextField id="filled-basic" label="Email" variant="filled" onChange={(text) => setEmail({ value: text.target.value, error: '' })}/>
             <TextField id="filled-basic" label="Username" variant="filled" onChange={(text) => setUsername({ value: text.target.value, error: '' })}/>
             <TextField id="filled-basic" label="Password" type="password" variant="filled" onChange={(text) => setPassword({ value: text.target.value, error: '' })}/>
          </div>
          <div className="divButtons">
            <Button onClick={onSignUpPressed}>
              Sign Up
            </Button>
            <Button onClick={forgetPassword}>
              Forget Your Password
            </Button>
          </div>
      </Modal.Body>
      </Modal>
  )
}
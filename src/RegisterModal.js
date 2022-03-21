import React, { useState  } from 'react'
import { TextField } from '@mui/material'

import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function LoginModal(props) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

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
  const forgetPassword = () => {

  }

  const signup = () => {

  }

  return (
      <Modal show={show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalFields">
             <TextField id="filled-basic" label="Email" variant="filled" />
             <TextField id="filled-basic" label="Username" variant="filled" />
             <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
          </div>
          <div className="divButtons">
            <Button onClick={signup}>
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
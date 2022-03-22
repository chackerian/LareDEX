import { Button } from 'react-bootstrap';

export default function Navbar(props) {

  return (
    <div>
         <Button variant="primary" onClick={props.handleShow}>
            Login
          </Button>
          <Button variant="primary" onClick={props.handleShowSignup}>
            Sign Up
          </Button>
    </div>
    )
}
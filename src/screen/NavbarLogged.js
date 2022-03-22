import { Button } from 'react-bootstrap';

export default function NavbarLogged(props) {

  return (
      <div>
         <Button variant="primary" onClick={props.logout}>
            Logout
          </Button>
      </div>
      )
}
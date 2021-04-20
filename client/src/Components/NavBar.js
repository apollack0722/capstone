import { Navbar, Nav} from 'react-bootstrap';
import "./slider.css";

const username = localStorage.getItem('username');
const Admin = localStorage.getItem('isAdmin')

const NavBar = () => {
  return (
  <Navbar bg="dark" variant="dark">
  <Nav className="mr-auto">
  <Navbar.Brand></Navbar.Brand>
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/Library">Library</Nav.Link>
  <Nav.Link href="/Cart">Cart</Nav.Link>
  <Nav.Link href="/Profile">My Account</Nav.Link>
  { Admin?
  <Nav.Link href="/Admin">Admin</Nav.Link> : ''} 
  <Nav.Link href="/Search">Search</Nav.Link>
  </Nav>
  <Navbar.Brand>
    {username? username : ''}
    </Navbar.Brand>
  </Navbar>
  )}
  export default NavBar
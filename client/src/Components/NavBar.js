import { sign } from 'jsonwebtoken';
import { Navbar, Nav} from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import SignOutButton from './SignOut';
import Image from './Image'
import "./slider.css";

const myToken = localStorage.getItem('myToken')
const username = localStorage.getItem('username');
const Admin = localStorage.getItem('isAdmin')
const userId = localStorage.getItem('userId')

const NavBar = () => {
  return (
  <Navbar bg="dark" variant="dark">
  <Nav className="mr-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/Library">Library</Nav.Link>
  <Nav.Link href="/Cart">Cart</Nav.Link>
  <Nav.Link href="/Profile">My Account</Nav.Link>
  { Admin?
  <Nav.Link href="/Admin">Admin</Nav.Link> : ''} 
  <Nav.Link href="/Search">Search</Nav.Link>
  </Nav>
  <Navbar.Brand> {username? username :''}
  </Navbar.Brand>
  <Navbar.Brand>
    {!userId? <RegisterModal /> : ''}
    </Navbar.Brand>
  {userId ? <SignOutButton /> : <LoginModal />}
  </Navbar>
  )}
  export default NavBar
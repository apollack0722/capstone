import {Navbar, Nav} from 'react-bootstrap';
import Search from './Search';
import "./slider.css";

const myToken = localStorage.getItem('myToken')
const username = localStorage.getItem('username');


const NavBar = () => {
  return (
  <Navbar bg="dark" variant="dark">
  <Nav className="mr-auto">
  <Nav.Link href="/Library">Library</Nav.Link>
  <Nav.Link href="/Cart">Cart</Nav.Link>
  <Nav.Link href="/Profile">My Account</Nav.Link>
  <Nav.Link href="/Admin">Admin</Nav.Link>
  <Search/>
  </Nav>
  <Navbar.Brand>
    {username? username : ''}
    </Navbar.Brand>
  </Navbar>
  )}
  export default NavBar
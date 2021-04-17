import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
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
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
    <Button variant="outline-info">Search</Button>
  </Form>  
  </Nav>
  <Navbar.Brand>
    {username? username : ''}
    </Navbar.Brand>
  </Navbar>
  )}
  export default NavBar
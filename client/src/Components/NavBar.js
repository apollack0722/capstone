import {Navbar, Nav, FormControl, Button, Form, Image} from 'react-bootstrap';

import {RegisterModal, LoginModal} from './'
const username = localStorage.getItem('username');
const Admin = localStorage.getItem('isAdmin')



const NavBar = () => {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/Library">Library</Nav.Link>
          <Nav.Link href="/Cart">Cart</Nav.Link>
          <Nav.Link href="/Profile">My Account</Nav.Link>
            { Admin?
          <Nav.Link href="/Admin">Admin</Nav.Link> : ''}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          <Button variant="outline-info">Search</Button>
          <RegisterModal />
          <LoginModal />
        </Form>  
        </Nav>
      <Navbar.Brand>
        {username? username : ''}
        </Navbar.Brand>
      </Navbar>
    </>
  )}
  export default NavBar
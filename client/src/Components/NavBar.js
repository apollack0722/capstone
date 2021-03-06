import { Navbar, Nav, Image} from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import SignOutButton from './SignOut';
import "./slider.css";


const username = localStorage.getItem('username');
const Admin = localStorage.getItem('isAdmin')
const userId = localStorage.getItem('userId')
const NavBar = () => {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Image src="finalAppleLogo.png" /> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Library">Library</Nav.Link>
      { userId ?
        <Nav.Link href="/Profile">My Favorites</Nav.Link> : ''
      }
      { Admin ?
        <Nav.Link href="/Admin">Admin</Nav.Link> : ''
      }
      <Nav.Link href="/Search">Search</Nav.Link>
    </Nav>
    <Navbar.Brand> {username? username : ''}
    </Navbar.Brand>
    <Navbar.Brand>
      {!userId? <RegisterModal /> : ''}
    </Navbar.Brand>
    {userId ? <SignOutButton /> : <LoginModal />}
  </Navbar>
  )}
  export default NavBar

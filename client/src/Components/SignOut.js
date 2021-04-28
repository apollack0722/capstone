import {Button} from 'react-bootstrap'
const SignOutButton = () => {

  const SignOut = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
    setTimeout(window.location.reload.bind(window.location), 250);
  }
  return (
  <>
    <Button
      variant="outline-info"
      onClick={SignOut}>
      Sign Out
    </Button>

  </>
)



}




export default SignOutButton;
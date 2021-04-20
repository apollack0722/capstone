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
    <button
      onClick={SignOut}>
      Sign Out
    </button>

  </>
)



}




export default SignOutButton;
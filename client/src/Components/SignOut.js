const SignOutButton = () => {

  const SignOut = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
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
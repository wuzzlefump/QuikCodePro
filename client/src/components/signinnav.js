import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function SigninNav(){
    return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/signin">Login</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
    </Nav>
  </Navbar>

    )
}
export default SigninNav
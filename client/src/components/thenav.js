import React, { useContext, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import UserContext from '../utils/UserContext'


function TheNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, logout } = useContext(UserContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar   >
        <Navbar.Brand href="/">React Auth</Navbar.Brand>


        <Nav.Link href="/">Feed</Nav.Link>


        <Nav.Link href="/profile">Profile</Nav.Link>


        <Nav.Link onClick={logout}>Logout</Nav.Link>


        <Nav.Link href="/login">Login</Nav.Link>

        <Nav.Link href="/signup">Signup</Nav.Link>




      </Navbar>
    </div>
  )
}
export default TheNav
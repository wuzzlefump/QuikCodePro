import React, { Component,useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Profile from './pages/profile'
import NewSnip from './pages/newsnip'
import NoPage from './pages/nopage'
import { isLoggedIn } from "../../config/middleware/authMiddleware";

function App() {
  const [ userData, setUserData ] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  const [ loggedIn,setLoggedIn ] = setState(false);
  const[ user, setUser ] = useState(null);
  const [ failureMessage, setfailuareMessage ] = setState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: userData.username,
      password: userData.password
    };
    if (userData.username && userData.password) {
      API.login(data).then((user) => {
        if (user.data.loggedIn) {
          setLoggedIn(true);
          setUser(user.data.user);

          console.log("log in successful");
        } else {
          console.log("something went wrong");
          alert("Login failed, please try again");
        }
      }).catch ((error) => {
        console.log("loggin function error",error);
      });
    }
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    try {
      const data = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: userData.password
      };
    
      //need to ask Jay about this block of code
    if (userData.username && userData.password) {
      API.signup(data).then((user) => {
        if (user.data === 'email is already in user') {
          alert("This email is already signed up with us")
        }
        if (user.data.loggedIn) {
          setLoggedIn(true);
          setUser(user.data.user);
          console.log("log in successful");
        } else {
          console.log("something went wrong");
          console.log(user.data);
          setFailuareMessage(user.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  } catch (error) {
    console.log(error);
  };

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then((user) => {
        if (user.data.loggedIn) {
          setLoggedIn(true);
          setUser(user.data.user);
        } else {
          console.log(user.data.message);
        }
      })
    }
  };

  const logout = () => {
    if(loggedIn) {
      API.logout().then(() => {
        console.log("logged out successfully");
        setLoggedIn(false);
        setUser(null);
      });
    }
  }

  const contextValue = {
    userData,
    loggedIn,
    user,
    failureMessage,
    handleInputChange,
    handleLogin,
    handleSignUp,
    logout
  };
  return (
<BrowserRouter>
  <div>
    <Switch>
      <Route exact path ="/">
        <Profile/>
      </Route>
      <Route exact path = "/signin">
      <SignIn/>
      </Route>
      <Route exact path = "/signup">
      <SignUp/>
      </Route>
      <Route exact path = "/newsnip">
      <NewSnip/>
      </Route>
      <Route>
      <NoPage/>
      </Route>
    </Switch>
  </div>
</BrowserRouter>
  );
}


export default App;

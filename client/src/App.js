import React, { Component } from "react";
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

function App() {
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

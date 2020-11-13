import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  return (
<BrowserRouter>
  <div>
    <Switch>
      <Route exact path ="/">
         {/* <Profile/> */}
      </Route>
      <Route exact path = "/signin">
      {/* <SignIn/> */}
      </Route>
      <Route exact path = "/signup">
      {/* <SignUp/> */}
      </Route>
      <Route exact path = "/newsnip">
      {/* <Editor/> */}
      </Route>
      <Route>
      {/* <NoPage/> */}
      </Route>
    </Switch>
  </div>
</BrowserRouter>
  );
}


export default App;

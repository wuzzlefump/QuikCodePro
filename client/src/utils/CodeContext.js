import React from 'react';

const CodeContext = React.createContext({
  snipData: {},
  loggedIn: false,
  user: {},
  failureMessage: "",
  handleInputChange: () => {},
  handleLogin: () => {},
  handleSignup: () => {},
  logout: () => {},
});

export default UserContext;

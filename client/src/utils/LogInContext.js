import React from "react";

const LogInContext = React.createContext({
  login: false,
  setlogin: () => {}
});

export default LogInContext;
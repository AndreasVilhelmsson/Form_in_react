import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="confirm user data" />
        <br />
        <h1>thank for your submission</h1>
        <h3>you will get an email confirmation</h3>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Success;

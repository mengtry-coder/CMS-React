/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import Page404 from "./pages/404/index";
import Login from "./login/LoginForm";
import User from "./pages/users/index";
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={getBasename()}>
        <Route path='/' exact component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/user' component={User} />
        {/* <Route component={Page404} /> */}
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;

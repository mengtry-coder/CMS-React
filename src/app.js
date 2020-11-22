/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import Page404 from "./pages/404/index";
import Login from "./pages/login/form";
import User from "./pages/users/index";
import AuthProvider from "./pages/authProvider/index";
import PrivateRoute from "./pages/authProvider/privateRoute";
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename={getBasename()}>
        <di>
          <PrivateRoute path='/' exact component={Dashboard} />
          {/* <Route path='/dashboard' component={Dashboard} /> */}
          <Route path='/login' component={Login} />
          <Route path='/user' component={User} />
        </di>
        {/* <Route component={Page404} /> */}
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;

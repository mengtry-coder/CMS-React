/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthProvider from "./pages/authProvider/index";
import Dashboard from "./pages/dashboard/index";
import Page404 from "./pages/404/index";
import PrivateRoute from "./pages/authProvider/privateRoute";
import Login from "./pages/login/form";
import User from "./pages/users/index";
import NotFound from "./pages/404/index"
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename={getBasename()}>
        <PrivateRoute path='/' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/user/index' component={User} />
        <Route component={NotFound} />
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;

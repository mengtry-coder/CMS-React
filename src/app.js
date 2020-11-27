/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./pages/authProvider/index";
import Dashboard from "./pages/dashboard/index";
import Page404 from "./pages/404/index";
import PrivateRoute from "./pages/authProvider/privateRoute";
import Login from "./pages/login/form";
import User from "./pages/users/index";
import NotFound from "./pages/404/index";
import Media from "./pages/media/index";
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename={getBasename()}>
        <PrivateRoute path='/' exact component={Dashboard} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user/index' component={User} />
        <PrivateRoute path='/media/index' component={Media} />
        {/* <Route component={NotFound} /> */}
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;

/** @format */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./pages/authProvider/index";
import Dashboard from "./pages/dashboard/index";
import Page404 from "./pages/404/index";
import PrivateRoute from "./pages/authProvider/privateRoute";
import Login from "./pages/login/form";
import User from "./pages/users/index";
import ProductType from "./pages/product-type/index";
import Product from "./pages/product/index";
import Config from "./pages/config/index";
import NotFound from "./pages/404/index";
import Media from "./pages/media/index";
import ConfirmEmail from "./pages/forgot-password/confirmEmail";
import ResetPassword from "./pages/forgot-password/resetPassword";
import Home from "./frontend/index";
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename={getBasename()}>
        <Switch>
          <PrivateRoute path="/admin" exact component={Dashboard} />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/confirm-email" component={ConfirmEmail} />
          <Route path="/reset-password" component={ResetPassword} />
          <PrivateRoute path="/admin/user/index" component={User} />
          <PrivateRoute path="/admin/media/index" component={Media} />
          <PrivateRoute path="/admin/config/index" component={Config} />
          <PrivateRoute path="/admin/product-type/index" component={ProductType} />
          <PrivateRoute path="/admin/product/index" component={Product} />
          <PrivateRoute component={Page404} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;

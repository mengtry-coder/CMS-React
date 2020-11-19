/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Deshboard/index";
import Page404 from "./pages/404/index";
import Login from "./pages/users/form";
const getBasename = () => `/${process.env.PUBLIC_URL.split("/").pop()}`;
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={getBasename()}>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/login' component={Login} />
        {/* <Route component={Page404} /> */}
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;

import React from "react";
import LoginForm from "./../login/LoginForm";
import Dashboard from "./../pages/dashboard/index";
const config_route = () => {
    const routes = [
        {
            path: "/",
            exact,
            component: {Dashboard}
        },
        {
          path: "/login",
          component: {LoginForm}
        },
        {
            path: "/dashboard",
            component: {Dashboard}
        }
      ];
}

export default config_route

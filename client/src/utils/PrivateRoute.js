import React from 'react';

import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needLogin === true ? (
        <Redirect to="/signup" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PrivateRoute
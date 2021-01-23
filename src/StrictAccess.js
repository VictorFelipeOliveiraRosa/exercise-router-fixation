import React from 'react';
// import { useParams } from 'react-router-dom';

import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './auth';

const StrictAccess = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated(user) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default StrictAccess;

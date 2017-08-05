// Include the React library
import React from 'react';

// Include the react-router module
import {BrowserRouter, Switch} from "react-router-dom";

// Reference the high-level components
import Main from '../components/Maps';
import Edit from '../components/Edit';

// Include the Route component for displaying individual routes
let Route = BrowserRouter.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
//var Router = router.Router;

// Include the IndexRoute (catch-all route)
let IndexRoute = BrowserRouter.IndexRoute;

// Export the Routes
let Routes = (

  // The high level component is the Router component
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Maps}>
        {/* If user selects edit, show the appropriate component */}
        <Route path="edit" component={Edit} />

        {/* If user selects any other path... we get the Info Route */}
        <IndexRoute component={Maps} />

      </Route>
    </Switch>
  </BrowserRouter>

);

export default Routes;

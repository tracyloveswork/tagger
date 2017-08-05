// Include React
import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


// Here we include all of the sub-components
import List from './List';
import Edit from './Edit';
import Maps from './Maps'

// Requiring our helper for making API calls
// import helpers from '../utils/helpers';

// Create the Main component
class Main extends Component {

  constructor() {
    super()
  }

  // Here we render the component
  render() {

    return (
      <div className="Main full">

        <div className="col-md-4 list-column">

          {/* <!-- Tag List --> */ }
          <List />

        </div>

        <div className="col-md-8 view-column">
            
          <Switch>

            {/* <!-- Maps --> */ }
            <Route exact path='/' component={Maps}/>
              
            {/* <!-- Tag View/Edit --> */ }
            <Route path='/edit' component={Edit}/>

          </Switch>

        </div>
          
      </div>

    )
  }
}

export default Main;
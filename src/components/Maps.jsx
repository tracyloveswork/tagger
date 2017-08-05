// Include React
import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class Maps extends Component {

	constructor() {
		super()
	}

  // Here we render the component
  render() {

    return (
	<div className="Maps">
		<h2>This is the component that displays the map.</h2>
	</div>
	)
  }
}

// Export the component back for use in other files
export default Maps;

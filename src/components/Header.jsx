import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class Header extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			 <div className="Header">    
        <div className="fixed-nav"> {/* Static Navbar */ }
          <div id="newTag">
            <Link to='/edit'>
            <button type="button" className="btn btn-danger btn-circle"><span className="glyphicon glyphicon-plus"></span></button>
            </Link>
          </div>
          {/* <!-- End of Navbar --> */ }
        </div> 
      </div>
		)
	}
}

export default Header
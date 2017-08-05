// Include React
import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Main from './components/Main.jsx'
import Header from './components/Header.jsx'

class App extends Component {
	render() {
		return(
 		<div className="App full">

      <div className="row full">

        {/* Static Navbar */ }
        <Header />
        {/* <!-- End of Navbar --> */ }

        {/* <!-- Main --> */ }
        <Main />
        {/* <!-- End of Main --> */ }
          
        </div> {/* <!-- End of row full --> */ }
        {/* <!-- End of App --> */ }
      </div> 
		
	 )
	}
}

// Export the component back for use in other files
export default App;

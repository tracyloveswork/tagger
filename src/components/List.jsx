// Include React
import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class List extends Component {
  // Here we render the component

  constructor() {
		super()
	}

  render() {

    return (
			<div className="List full">

					{/* <!-- Panel 1--> */ }
            <div className="tag-panel">

              <div className="panel-body">
             {/* <!--  <div className="list-active-bar"></div> --> */ }

                <div className="row">
                
                  <div className="col-md-2"><span className="glyphicon glyphicon-star-empty not-active"></span></div>
                  <div className="col-md-8">
                    <span className="tag-title">Tag Title 1</span><br />
                    <span className="tag-location">Location</span>
                  </div>
                  <div className="col-md-2"><span className="glyphicon glyphicon-time not-active"></span><br />
                    <span className="glyphicon glyphicon-eye-open active"></span></div>
                </div>
              </div>
            </div>
            {/* <!-- Endo of Panel 1--> */ }

            {/* <!-- Panel 2--> */ }
            <div className="tag-panel">

              <div className="panel-body">
              

                <div className="row">
                <div className="list-active-bar"></div>
                
                  <div className="col-md-2"><span className="glyphicon glyphicon-star-empty not-active"></span></div>
                  <div className="col-md-8">
                    <span className="tag-title">Tag Title 2</span><br />
                    <span className="tag-location">Location</span>
                  </div>
                  <div className="col-md-2"><span className="glyphicon glyphicon-time not-active"></span><br />
                    <span className="glyphicon glyphicon-eye-open active"></span></div>
                </div>
              </div>
            </div>
           {/* <!-- End of Panel 2--> */ }
		</div>
	)
 }
}

// Export the component back for use in other files
export default List;

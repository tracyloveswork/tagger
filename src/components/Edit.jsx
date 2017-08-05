// Include React
import React, { Component } from 'react'

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class Edit extends Component {

	constructor() {
		super()
	}

  // Here we render the component
  render() {

    return (
			<div className="Edit full">

				{/* <!-- Close View/Edit Button --> */ }
          <div className="row">
            <div className="col-md-12">
            <Link to='/'><span className="glyphicon glyphicon-remove"></span></Link>
            </div>
          </div>

          {/* <!-- Form Beginning --> */ }
            <form id="tag-form" className="tag-form">

              <div className="row">
                <div className="col-md-12">
                <p className="date-view">Monday 20 March 2017</p>
                <input type="text" className="tag-title-view" name="tag-title" value="Tag Title" />
                <p className="location-view">Location </p>            
                </div>
              </div>

              {/* <!-- Toggle Button Row --> */ }
             <div className="row">

              <div className="col-md-12">
              <div className="form-group form-inline">

                <div className="checkbox space-right checkbox-slider--b-flat checkbox-slider-warning">
                  <label>
                    <input type="checkbox" checked /><span className="space-left"> Public</span>
                  </label>
                </div>

                <div className="checkbox space-right checkbox-slider--b-flat checkbox-slider-warning">
                  <label>
                    <input type="checkbox" /><span className="space-left"> Expires</span>
                  </label>
                </div>

                </div> 
                </div>

              </div>
              {/* <!-- End of Toggle Button Row --> */ }

              {/* <!-- Decription Paragraph --> */ }
             <div className="row">
                <div className="col-md-12">
                <textarea className="tag-description-view" rows="10" form="tag-form" spellcheck="true" maxlength="500" name="tag-description">Description of your tagged location and/or event.</textarea>
                </div>
              </div>

              {/* <!-- Bottom Buttons --> */ }
              <div className="bottom-buttons">

                <button type="button" className="btn btn-danger">Delete</button>
              
                <button type="button" className="btn btn-warning space-left">Save</button>

              </div>

            </form>
            {/* <!-- End of Form --> */ }

			</div>
		)
  }
}

// Export the component back for use in other files
export default Edit;

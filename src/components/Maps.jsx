// Include React
import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class Maps extends Component {

	constructor(props) {
		super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions 
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
	}

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  // Here we render the component
  render() {

  return (
    <div className="Maps">

    	<h2>This is the component that displays the map.</h2>

        <Map google={this.props.google}
         zoom={14}
         onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>

        </Map>

    </div>
	)
  }
}

// Export the component back for use in other files
// export default Maps;
export default GoogleApiWrapper({apiKey: "AIzaSyAXmfoM3KbRgdzfmvJ7xBJOBmYDZOk20R0"})(Maps)

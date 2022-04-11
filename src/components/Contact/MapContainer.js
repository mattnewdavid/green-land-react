import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

 class MapContainer extends Component {
  render() {
    return (
      <div style={{ width: "100px", height: "10px" }}>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={10}
          initialCenter={{
            lat: 8.4786,
            lng: 4.53608,
          }}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB74bHR2zlOuDGqxi4OiMd2S0Pyo-4G9IM",
})(MapContainer)

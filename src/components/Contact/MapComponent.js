import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>{text}</div>
);

export default function MapComponent() {
  const defaultProps = {
    center: {
      lat: 8.4786,
      lng: 4.53608,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{height:"400px", width:"400px"}}>
      <GoogleMapReact
        
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent lat={39.955413} lng={20.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

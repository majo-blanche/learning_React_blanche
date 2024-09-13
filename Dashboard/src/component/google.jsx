import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const mapContainerStyle = () => {
	
		const mapStyles = {
			height: "700px",
      width: "100%",
      margin: "40px",
      
		};
		const defaultCenter = {
			lat: 40.748817,
			lng: -73.985428,
		};
	;

  return(
    <div>
      <h1>Google Maps</h1>
      <LoadScript
        googleMapsApiKey=''>
        <GoogleMap
           mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
         >
          <Marker position={defaultCenter}/>
        </GoogleMap>
      </LoadScript>
    </div>
  )
};

export default mapContainerStyle;


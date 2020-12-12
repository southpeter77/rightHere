/*global google*/
import React, {useState, useEffect} from "react"
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, Polyline, DirectionsRenderer, Polygon} from "react-google-maps"
import mapStyles from "./mapStyle"
import mapCss from "./mapCss.css"
const options = {
  styles: mapStyles, 
  // disableDefaultUI: true, 
  zoomControl: true,
}
const Map = ({coordinates}) => {
//lat: 41.505493 // lat diff 0.0014 = 0.1 miles or 0.0015
//lng: -81.68129 // lng dif 0.002 = 0.1 miles

const square = [
  // { lat: 41.505243, lng: -81.681640 },
  // { lat: 41.505243, lng: -81.681040},
  // { lat: 41.505743, lng: -81.681040 },
  // { lat: 41.505743, lng: -81.681640 },
{lat:coordinates.lat-0.0035, lng: coordinates.lng-0.005},
{lat:coordinates.lat-0.0035, lng: coordinates.lng+0.005},
{lat:coordinates.lat+0.0035, lng: coordinates.lng+0.005},
{lat:coordinates.lat+0.0035, lng: coordinates.lng-0.005},

];

// console.log(coordinates)
    useEffect(()=> {
    },[])
    return (
        <>
        {/* <button
        onClick={()=>console.log(coordinates)}
        >asdfasdf</button> */}
         <GoogleMap

mapContainerStyle={{
  border: '5px solid red'
}}
defaultZoom={14}
center={coordinates}
options={options}
>
<Marker
position={coordinates}
></Marker>

</GoogleMap>
<Polygon
            path={square}
            //key={1}
            options={{
                fillColor: "white",
                fillOpacity: 0.1,
                strokeColor: "white",
                strokeOpacity: 1,
                strokeWeight: 1
            }}
></Polygon>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
const MapContainer = ({coordinates}) => {


  return (
    <>
          <div  style={{ width: '500px', height: '450px', margin: "auto", borderRadius:'20pt' }}>
    <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{height: '100%',borderRadius:'20pt'}}/> }
    containerElement={<div style={{height:"100%",borderRadius:'20pt'}}/>}
    mapElement={<div style={{height: "100%",borderRadius:'20pt'}}/>}
    coordinates={coordinates}
    >
    </WrappedMap>
    </div>


    </>
  );
}
export default MapContainer
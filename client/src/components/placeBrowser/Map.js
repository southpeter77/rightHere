import React, {useState, useEffect} from "react"
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, Polyline, DirectionsRenderer} from "react-google-maps"
import mapStyles from "./mapStyle"
import mapCss from "./mapCss.css"
const options = {
  styles: mapStyles, 
  disableDefaultUI: true, 
  zoomControl: true,
}
const Map = ({coordinates}) => {
    // const [myLocation, setMyLocation] = useState("")
    // const [placeLatLng, setPlaceLatLng] = useState({})


    useEffect(()=> {
    //         navigator.geolocation.getCurrentPosition((position)=>{
    //     setMyLocation({lat: position.coords.latitude, lng: position.coords.longitude})
    //   }, ()=>null)
    
    
    },[])
    return (
        <>
        <button
        onClick={()=>console.log(coordinates)}
        >asdfasdf</button>
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

        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
const MapContainer = ({coordinates}) => {


  return (
    <>
          <div  style={{ width: '400px', height: '450px', margin: "auto" }}>
    <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{height: '100%'}}/> }
    containerElement={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height: "100%"}}/>}
    coordinates={coordinates}
    >
    </WrappedMap>
    </div>


    </>
  );
}
export default MapContainer
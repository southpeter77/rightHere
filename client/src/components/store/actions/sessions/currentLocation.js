export const CURRENT_LOCATION_COORDINATES = "CURRENT_LOCATION_COORDINATES"

export const currentLocationCoordinates = (data) =>{
    return {
        type: CURRENT_LOCATION_COORDINATES,
        data
    }
}

export const currentLocationCoordinatesThunk = (coordinates)=> async(dispatch) => {
    const response = await fetch("/api/places/current", {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(coordinates)
    })
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch(currentLocationCoordinates(data)) 
    }

}

export default function reducer (state={}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case CURRENT_LOCATION_COORDINATES:
            newState["currentLocation"]=action.data
            return newState

        default:
            return state
    }
}
export const CHECK_PLACE_EXIST = "CHECK_PLACE_EXIST"

//////////////////////////

export const checkPlaceExist = (data) => {
    return {
        type: CHECK_PLACE_EXIST,
        data
    }
}


////////////

export const checkPlaceExistThunk = (coordinates)=> async(dispatch)=> {
    const response =await fetch("/api/places/check", {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(coordinates)
    })
    if (response.ok) {
        const exist = await response.json()
        // console.log(exist)
        dispatch(checkPlaceExist(exist.message))
        return exist.message
    }
}


export default function reducer(state={}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case CHECK_PLACE_EXIST:
            newState["checkPlaceExist"]=action.data
            return newState
        default:
            return state
    }
}
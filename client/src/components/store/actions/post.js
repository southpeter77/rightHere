export const checkPlaceExist = (coordinates)=> async(dispatch)=> {
    const response =await fetch("/api/places/check", {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(coordinates)
    })
}
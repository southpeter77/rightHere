export const createPlace = (data) => async (dispatch) => {
    // console.log(data)
    const response = await fetch("/api/places/create", {
        method:"PUT",
        body:data
    })
    if (response.ok) {
        const data = await response.json()
        setTimeout(()=>{window.location.href=`/place/${data.id}`},3000)
        
    }
}

export const createPlaceCamera = (data) => async (dispatch) => {
    // console.log("hi")
    // console.log(data)
    const response = await fetch("/api/places/create/camera", {
        method:"PUT",
        body:data
    })
    if (response.ok) {
        const data = await response.json()
        setTimeout(()=>{window.location.href=`/place/${data.id}`},3000)
    }
}
export const createPlace = (data) => async (dispatch) => {
    console.log(data)
    const response = await fetch("/api/places/create", {
        method:"PUT",
        body:data
    })
}
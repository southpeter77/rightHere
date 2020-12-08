export const createPlace = (data) => async (dispatch) => {
    const response = await fetch("/api/places/create", {
        method:"PUT",
        body:data
    })
}
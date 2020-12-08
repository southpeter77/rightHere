export const checkPlaceExist = async(coordinates)=> {
    const response =await fetch("/api/places/check", {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(coordinates)
    })
    if (response.ok) {
        const exist = await response.json()
        return exist.message
    }
}


export const createPost = (data) => async (dispatch) => {
    console.log(data)
}
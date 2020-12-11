import {grabAllPostsByPlaceId} from "./entities/entities"

export const uploadPhotoByPlaceId = (data) => async (dispatch) => {
    console.log(data)
    const response = await fetch("/api/photos/upload", {
        method:"PUT",
        body:data
    })
    if (response.ok) {
        const parsedData = await response.json();
        // dispatch(grabAllPostsByPlaceId(parsedData))
    }

}

export const deletePhotoByPhotoId = async (id) => {
    const response = await fetch(`/api/photos/delete/${id}`, {
        method:"DELETE"
    })
    if (response.ok) {
        return true
    }
}
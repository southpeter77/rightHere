export const addFriend = (data) => async (dispatch) => {
    const response = await fetch(`/api/relationships/add`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)

    })
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
    }
}
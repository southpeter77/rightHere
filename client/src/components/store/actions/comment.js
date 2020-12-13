export const createComment = async (data) => {
    const response = await fetch("/api/comments/create", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json()
        // console.log(data)
    }
}
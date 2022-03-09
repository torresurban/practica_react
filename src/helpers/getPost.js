const getPost = async (usuarioId) => {
    
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${usuarioId}`
    const res = await fetch(url)
    const posts = await res.json()

    return posts
}

export default getPost;
const getUser = async () => {
    const idUser = Math.floor(Math.random()*10)+1
    const url = `https://jsonplaceholder.typicode.com/users/${idUser}`
    const res = await fetch(url)
    const user = await res.json()

    return user
}

export default getUser;
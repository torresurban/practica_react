import { useEffect, useState, useCallback } from "react"
import getPost from "../helpers/getPost"
import getUser from "../helpers/getUser"

/* const inicialUser = {
    name:'Tommy',
    email:'correo@torres.com'
} */

/* const inicialPost =[
    {id:1, title:'Post 1'},
    {id:2, title:'Post 2'}
] */



export default function FetchCard() {

    const [user, setUser] = useState({})
    const [post, setPost] = useState([])

    const updateUser = () => {
        getUser()
                .then((newUser) =>{
                    setUser(newUser)
                })
    }

    const updatePost = useCallback(() => {
        getPost(user.id)
            .then((listPost) => {
                setPost(listPost)
            })
    },[user.id])

    useEffect(() => {
        updateUser()
    },[])

    useEffect(() => {
        if(user?.id){
            updatePost()
        }
    },[user, updatePost])

  return (
    <div>
        <button onClick={updateUser} >Otro Usuario</button>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <br />

        <h2>Post - user: {user.id}</h2>
        <ul>
            {post.map(p => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    </div>
  )
}

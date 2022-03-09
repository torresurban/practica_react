import { useParams } from "react-router-dom"


export default function User() {

  //const params = useParams()
  const {id} = useParams()
  

  return (

    <div>
      
      {/* User <h1>{params.id}</h1> */}
      User <h1>{id}</h1>
      
    </div>
  )
}

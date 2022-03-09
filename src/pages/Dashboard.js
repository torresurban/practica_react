import { Link, Outlet, useNavigate } from "react-router-dom"


export default function Dashboard() {

    const navigate = useNavigate()
    
    
    const hacerClick = () => {
        navigate('/')
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <Link to={'welcome'}>
        say welcome
        </Link>
    
        <button onClick={hacerClick} >
            Logout
        </button>
        <Link to={'goodbye'}>
        say goodbye
        </Link>
        
          <Outlet />
        
    
    </div>
  )
}

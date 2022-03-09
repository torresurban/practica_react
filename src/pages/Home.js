import { Link } from "react-router-dom";
import Aumentar from "../components/Aumentar";
//import CuadroMouse from "../components/CuadroMouse";

export default function Home() {
  return (
    <div>Home

        <h1>Aplicación</h1>

        <Link to={'/users'} >Usuarios</Link>

        <Aumentar /> 

        {/* <CuadroMouse /> */}

    </div>
  )
}

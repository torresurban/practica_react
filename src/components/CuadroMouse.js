import { useState } from "react"
import MouseColor from "./MouseColor"


export default function CuadroMouse() {

    const [mostrar, setMostrar] = useState(true)

  return (
    <div>
        <button onClick={() => setMostrar(false)} >Dejar de Mostrar</button>
        {mostrar ? <MouseColor /> : null}
    </div>
  )
}

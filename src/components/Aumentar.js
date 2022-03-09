import { useEffect, useState } from "react"


export default function Aumentar() {
    //!aumentar de uno en uno
    /* const [cuenta, setCuenta] = useState(0)

    const updateCounter = () => {
        setCuenta(cuenta + 1)
    } */

    //! Incrementar de dos en dos
    let [cuenta, setCuenta] = useState(0)
    const updateCounter = () => {
      setCuenta(cuenta + 1)
      setCuenta(prevCuenta => prevCuenta + 1)
  }

    useEffect(() => {
        document.title = `La cuenta es ${cuenta}`
    })

  return (
    <div>
        <h1>La cuenta es: {cuenta}</h1>
        {/* otra manera de codificar */}
        {/* <button onClick={() => setCuenta(cuenta + 1)} >Aumentar</button> */}
        <button onClick={updateCounter} >Aumentar</button>
    </div>
  )
}

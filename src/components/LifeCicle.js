import { useEffect, useState } from "react"

export default function LifeCicle() {

    const [cuenta, setCuenta] = useState(0)
    const [cuenta2, setCuenta2] = useState(0)

    useEffect(() => {
        console.log('useEffect no dependecy');
    })

    useEffect(() => {
        console.log('useEffect []]');
    },[])
  return (
    <div>
        <h1>Clicks c1: {cuenta}</h1>
        <h1>Clicks c2: {cuenta2}</h1>
        <button onClick={() => setCuenta(cuenta + 1)}>cuenta</button>
        <button onClick={() => setCuenta2(cuenta2 + 1)}>cuenta2</button>
    </div>
  )
}

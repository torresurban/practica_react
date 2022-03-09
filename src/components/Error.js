import { useState } from "react"


const Error = () => {

    const [error, setError] = useState('')

  return (
    <div>
        <button onClick={() => setError('Error al traer el API')}>Error</button>
        <button onClick={() => setError('credenciales incorrectas')}>Otro Error</button>
        <button onClick={() => setError('')}>Proceso Exitoso</button>
        {error && <h1>{error}</h1> }
        
    </div>
  )
}

export default Error
import { useState } from "react"


const ConditionalApp = () => {

    const [condition, setCondition] = useState(true)


  return (
    <div>
        <button onClick={() => setCondition(!condition)} >Toggle</button>

        {/* {
            condition 
                    ? <h1>Muestra mensaje en true</h1>
                    : <h1>Mostrar el mensaje en false</h1>
        } */}


        {
            condition &&
            <h1>Mostrar resultados</h1>
        }

        <h2>el valor del estado es {condition.toString()}</h2>
    </div>
  )
}

export default ConditionalApp
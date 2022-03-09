import { useState } from "react"

const productoInicial = {
    title:'Título',
    description:'Descripción'
}

const Products = () => {

    const [product, setProduct] = useState(productoInicial)

    /* const updateProduct = () => {
        setProduct({
            ...product,
            title:'otro titulo'
            
        })
    } */

    //!otra forma
    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            [property]: value
        })
    }

  return (
    <div>
        {/* <button onClick={updateProduct} >update</button> */}
        {/* otra forma */}
        <button onClick={() => updateProduct('description','otra nueva descripcion')} >update</button>
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>

        <pre>{JSON.stringify(product,null,2)}</pre>
    </div>
  )
}

export default Products
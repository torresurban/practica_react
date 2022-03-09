import { useState } from "react"


const cartInicial = [
    {id:1, title:'Product 1', description:'Description 1'},
    {id:2, title:'Product 2', description:'Description 2'}
]

const ShoppingCart = () => {

  const [cart, setCart] = useState(cartInicial)

  const updateDelete = (productoID) => {
      const changeCart = cart.filter(producto => producto.id !== productoID)

      setCart(changeCart)
  }

  const updateAdd = (nuevoProducto) => {
      nuevoProducto.id = Date.now()
      const cambioProduct = [
        nuevoProducto,
        ...cart
      ]

      setCart(cambioProduct)
  }

  const updateProduct = editarProducto => {
      const changedProduct = cart.map(product => (
        product.id ===editarProducto.id
        ? editarProducto
        : product
      )) 

      setCart(changedProduct)
  }

  return (
    <div>
      
      <button onClick={() => updateAdd({title:'nuevo titulo', description:'nueva descripcion'})}>Add</button>

      

      {cart.map(product => (
        <div key={product.id}>
          <h2>{product.id}{product.title}</h2>
          <h2>{product.description}</h2>
          <button onClick={() => updateDelete(product.id)} >Delete</button>
          <button onClick={() => updateProduct({id:product.id, title:'Edit nuevo titulo', description:'Edit nueva descripcion'})}>Update</button>
        </div>
      ))}

      <br /><br />
      <pre>
          {JSON.stringify(cart, null, 2)}
      </pre>
      
    </div>
  )
}

export default ShoppingCart
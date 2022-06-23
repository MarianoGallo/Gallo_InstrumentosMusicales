import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

  const [productoRandom, setProductoRandom] = useState({});

  useEffect(() => {
    getFetchOne()
      .then( (resuelto)=> setProductoRandom(resuelto) ) 
      .catch( err => console.log("Error") )
      .finally( () => console.log("promesa finalizada") )
  
  }, []);

  return (
    <>
    <div>ItemDetailContainer</div>
    <ItemDetail producto= { productoRandom } />
    </>
  )
}

export default ItemDetailContainer
import React, { useState, useEffect } from 'react'
import { getFetchOne } from './helpers/getFetch';
import ItemDetail from './ItemDetail'




const ItemDetailContainer = () => {

  const [productoDetalle, setProductoDetalle] = useState({});

  useEffect(() => {
    getFetchOne()
      .then( (resuelto)=> setProductoDetalle(resuelto) ) 
      .catch( err => console.log("Error") )
      .finally( () => console.log("promesa finalizada") )
  
  }, []);

  return (
    <>
    <div>ItemDetailContainer</div>
    <ItemDetail producto= { productoDetalle } />
    </>
  )
}

export default ItemDetailContainer
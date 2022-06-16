import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { instrumentos } from './helpers/getFetch'

const getFetch = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(instrumentos); 
      }, 2000);
      
  });
};


const ItemDetailContainer = () => {

  const [productoRandom, setProductoRandom] = useState([]);

  useEffect(() => {
    getFetch()
      .then( (resuelto)=> setProductoRandom(resuelto) ) 
      .catch( error => console.log("no resuelto") )
      .finally( () => console.log("promesa finalizada") )
  
  } );

  return (
    <>
    <div>ItemDetailContainer</div>
    <ItemDetail />
    </>
  )
}

export default ItemDetailContainer
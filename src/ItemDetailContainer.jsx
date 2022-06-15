import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { instrumentos } from './helpers/getFetch'

const instrumentoRandom = Math.floor(Math.random()*instrumentos.length);
const productoRandom = instrumentos[instrumentoRandom]

const getFetch = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(productoRandom); 
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
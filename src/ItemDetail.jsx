import React from 'react'
import { instrumentos } from './helpers/getFetch'


const ItemDetail = ( {producto}) => {
  
  const instrumentoRandom = Math.floor(Math.random()*instrumentos.length)
  const productoRandom = instrumentos[instrumentoRandom]
  
  return (
    <>
    <div className='ItemDetail'>
        
              <Item producto = { productoRandom }/> 
        </div>
  </>
  )
}

export default ItemDetail
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { instrumentos } from './helpers/getFetch'



const ItemDetail = ( {producto}) => {
  
  /*
  const instrumentoRandom = Math.floor(Math.random()*instrumentos.length)
  const productoRandom = instrumentos[instrumentoRandom]
  */

  return (
    <>
    
          <div className='ItemDetail'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imageUrl} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>{producto.precio}</Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
          </div>
  </>
  )
}

export default ItemDetail
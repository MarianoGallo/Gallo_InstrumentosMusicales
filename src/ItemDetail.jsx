import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { getFetchOne } from './helpers/getFetch'



const ItemDetail = ( {producto}) => {
  
  return (
    <>
    
          <div className='ItemDetail'>
            <Card style={{ width: '24rem' }}>
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
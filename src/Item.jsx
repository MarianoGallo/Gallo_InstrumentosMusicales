import React from 'react'
import { Card, Button } from 'react-bootstrap';


function Item( {producto}) {
  return (
    <>
        <div className='Cards'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imageUrl} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>         
        </div>
        
    </>
  )
}

export default Item
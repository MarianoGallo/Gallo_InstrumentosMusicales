import React from 'react'

const ItemDetail = () => {
  return (
    <>
      <div className='Cards'>
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
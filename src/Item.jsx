import React from 'react'
import { Card, Button } from 'react-bootstrap';


function Item() {
  return (
    <>
        <div className='Cards'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='./imagenes/MAG_Guitar_03.jpg' />
                <Card.Body>
                    <Card.Title>Guitarra MAG Epsilon</Card.Title>
                    <Card.Text>Guitarra adaptable a usuarios con destreza izquierda o derecha.</Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='./imagenes/MAG_bajo_01.jpg' />
                <Card.Body>
                    <Card.Title>Bajo MAG Omega</Card.Title>
                    <Card.Text>Bajo adaptable a usuarios con destreza izquierda o derecha.</Card.Text>
                <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='./imagenes/Fender_newporter.jpg' />
                <Card.Body>
                    <Card.Title>Fender California Newporter Player</Card.Title>
                    <Card.Text>Guitarra electroacústica para diestros.</Card.Text>
                <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
        </div>
        
    </>
  )
}

export default Item
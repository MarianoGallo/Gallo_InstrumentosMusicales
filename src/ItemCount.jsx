
import { Button, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

;
function ItemCount( onAdd ) {

    const stock = 5;
    const inicial = 1;
    const [ contador, setContador ] = useState(inicial);
    
    function sumarContador() {
        if (contador < stock){
            setContador( contador + 1 );
        }
    }
    function restarContador() {
        if (contador > inicial)
        setContador( contador - 1 );
    }
    const agregar = () => {
        console.log(contador);
    }
    
    return (
        <>
        <ButtonGroup aria-label="Basic example">
            <Button variant="warning" onClick={restarContador}>-</Button>
            <p>cantidad =  <spam>{contador}</spam></p>
            <Button variant="warning" onClick={sumarContador} >+</Button>
            <Button variant="outline-secondary" onClick={agregar}>Agregar al carrito</Button>
        </ButtonGroup>
        </>
    )
}

export default ItemCount;
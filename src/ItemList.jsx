import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemList( props) {
    
    return (
        <div className='ItemList'>
            { props.productos.map( (producto) => <Item producto = { producto }/> ) }
        </div>
    )
}

export default ItemList
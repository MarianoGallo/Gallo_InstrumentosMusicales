import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { getFetch } from './helpers/getFetch'


function ItemListContainer(props) {
  
  const {greeting} = props;

  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState (true)

useEffect(() => {
  getFetch()
    .then(resp => setInstrumentos(resp))
    .catch(err => console.log(err))
    .finally(() => console.log("promesa finalizada"))
} );

  return (
    <>
      <div className='ItemListContainer'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis quod aperiam, quasi exercitationem adipisci mollitia amet. Harum a quae aspernatur inventore nam, distinctio cum obcaecati laborum, est reprehenderit fugit!</p>
        <h2>{greeting}</h2>
      </div>
      <div className='contenedorSecundario'>
        <ItemList productos={ instrumentos }/>
        <ItemCount />
      </div>
    </>
  )
}

export default ItemListContainer
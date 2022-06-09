import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import React, { useState, useEffect } from 'react'


const getFetch = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(instrumentos); 
      }, 2000);
      
  });
};


function ItemListContainer(props) {
  
  const {greeting} = props;

  const (instrumentos, setInstrumentos) = useState([]);

useEffect(() => {
  getFetch()
    .then((resuelto)=> {setInstrumentos(resuelto)});
    .catch(error => console.log("no resuelto"));
    .finally(() => console.log());

} )



  return (
    <>
      <div className='ItemListContainer'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis quod aperiam, quasi exercitationem adipisci mollitia amet. Harum a quae aspernatur inventore nam, distinctio cum obcaecati laborum, est reprehenderit fugit!</p>
        <h2>{greeting}</h2>
      </div>
      <div className='contenedorSecundario'>
        <ItemList />
        <ItemCount />
      </div>
    </>
  )
}

export default ItemListContainer
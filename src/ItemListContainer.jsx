import React from 'react'

function ItemListContainer(props) {
  //console.log(props)
  const {greeting} = props
  return (
    <div className='ItemListContainer'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis quod aperiam, quasi exercitationem adipisci mollitia amet. Harum a quae aspernatur inventore nam, distinctio cum obcaecati laborum, est reprehenderit fugit!</p>
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
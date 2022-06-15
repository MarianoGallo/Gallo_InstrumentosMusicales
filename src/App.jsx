
import './App.css';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';

function App() {
  return (
    <>
      
      <NavBar />
      <ItemListContainer greeting='Hola k se?' />
      <ItemDetailContainer />
    </>
  );
}

export default App;

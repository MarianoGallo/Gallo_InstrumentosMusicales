
import './App.css';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        
        <Route path='/lista_de_productos' element={ <ItemListContainer greeting='Hola k se?' />} />
        <Route path='/detalle' element={ <ItemDetailContainer />} />
        <Route path='*' element={ <Navigate to='/' /> } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

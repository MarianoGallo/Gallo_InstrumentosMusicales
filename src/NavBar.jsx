import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function NavBar() {
    return (
        
            <header className="app-header">
                <div className="marca">
                    <h1>MAG Instrumentos Musicales</h1>
                    <img src='./imagenes/logoEcommerce.png' className="logo-mag" alt="no se ve el logo"/>
                </div>
                
                <div className="App-links">
                    <button className='btn-warning'>
                        <a className="App-link" href="https://reactjs.org">HOME</a>
                    </button>
                    
                    <button className='btn-warning'>
                        <a className="App-link" href="https://reactjs.org">NOSOTROS</a>
                    </button>

                    <button className='btn-warning'>
                        <a className="App-link" href="https://reactjs.org" >PRODUCTOS</a>
                    </button>

                    <button className='btn-warning'>
                        <a className="App-link" href="https://reactjs.org">CONTACTO</a>
                    </button>
                </div>
            </header>
        
    );
}

export default NavBar;
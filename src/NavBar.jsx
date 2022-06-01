import './App.css';
//import {} from 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import CarWidget from './CarWidget';

function NavBar() {
    return (
                /*<header className="app-header">
                <div className="marca">
                    <h1>MAG music store</h1>
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
            </header>*/
            /*      
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <a className="navbar-brand" href="#"><img src='./imagenes/logoEcommerce.png' className="logo-mag" alt="no se ve el logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>MAG
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> 
                            <a className="nav-link" href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </nav>*/

            
            <Navbar bg="warning" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src='./imagenes/logoEcommerce.png' className="logo-mag" alt="no se ve el logo"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bajos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Percusión</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Teclados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Vientos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <CarWidget />
            </Container>
          </Navbar>       
        

    );
}

export default NavBar;


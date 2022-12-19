import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navegacion() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}>Productos CJGB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>
                        <Nav.Link as={NavLink} to={"/signin"}>Iniciar Sesión</Nav.Link>
                        <Nav.Link as={NavLink} to={"/crearProducto"}>Crear Producto</Nav.Link>
                        <NavDropdown title="nombre" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={"/misProductos"}>Mis Productos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to={"/perfil"}>Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to={"/"}>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;
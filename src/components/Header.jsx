import React from "react";
import {BrowserRouter,Navigate, Route,Routes} from "react-router-dom"; 
import Home from "../pages/Home";
import Alex from "../pages/Alex";
import Deleo from "../pages/Deleo";
import Logo from "../images/Logo.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from "react-router-dom";


function Header(){
    return(
        <header>
            <div>
                <div className="header-dark sticky-thc">
                    <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                        
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Brand as={Link} to={"/"}><img src={Logo} width={250}></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                                    <Nav.Link as={Link} to={"/Alex"}>Nosotros</Nav.Link>
                                    <Nav.Link as={Link} to={"/Alex"}>Servicios</Nav.Link>
                                    <Nav.Link as={Link} to={"/Contacto"}>Contacto</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/Alex"}>Action</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/Alex"}>
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/Contacto"}>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={"/"}>
                                        Separated link
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>                       
                   </nav>
                </div>
                <Outlet />
            </div>
        </header>
    );
}

export default Header;

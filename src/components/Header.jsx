import React, { useRef, useLayoutEffect }  from "react";
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

    //This code is to have a Sticky Header 
    const stickyHeader = useRef()
    useLayoutEffect(() => {
      const mainHeader = document.getElementById('mainHeader')
      let fixedTop = stickyHeader.current.offsetTop
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop +170) {
          mainHeader.classList.remove('header-dark')
          mainHeader.classList.add('fixedTop')
        } else {
          mainHeader.classList.remove('fixedTop')
          mainHeader.classList.add('header-dark')
        }
      }
      window.addEventListener('scroll', fixedHeader)
    }, [])

    return(
        <header>
            <div>
                <div className="header-dark" id="mainHeader" ref={stickyHeader}>
                    <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                        
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Brand as={Link} to={"/"}><img src={Logo} width={250}></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>INICIO</Nav.Link>
                                    <Nav.Link as={Link} to={"/Alex"}>NOSOTROS</Nav.Link>
                                    <Nav.Link as={Link} to={"/Alex"}>SERVICIOS</Nav.Link>
                                    <Nav.Link as={Link} to={"/Contacto"}>CONTACTO</Nav.Link>
                                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/Alex"}>Action</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/Alex"}>
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/Contacto"}>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={"/"}>
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> --> */} 
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


import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' sticky='top'>
            <Navbar.Brand href="#/home">Learning App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Przeglądaj" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/questions">Pytania</NavDropdown.Item>
                        <NavDropdown.Item href="#/questions-set">Zestawy</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#/practice">Ćwicz</Nav.Link>
                    <NavDropdown title="Stwórz" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/questions/create">Pytanie</NavDropdown.Item>
                        <NavDropdown.Item href="#/questions-set/create">Zestaw</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Zaloguj</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
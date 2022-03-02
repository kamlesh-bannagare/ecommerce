import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >Mahajan Club</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/cart">
                                <Nav.Link ><FaCartPlus /> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="login">
                                <Nav.Link ><FaUserAlt /> Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;

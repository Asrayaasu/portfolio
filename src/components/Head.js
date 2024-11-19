import React from 'react';
import Container from 'react-bootstrap/Container';
import {NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Style.module.css';

const Head = () => {
    return (
        <div>
            <Navbar expand="lg" className={style.navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={style.navLinks}>
                            <Nav.Link as={NavLink} to="/" className={style.navLink}></Nav.Link>
                            <Nav.Link as={NavLink} to="/portfolio" className={style.navLink}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className={style.navLink}>About</Nav.Link>
                            <Nav.Link as={NavLink} to="/skills" className={style.navLink}>Skills</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className={style.navLink}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Head;
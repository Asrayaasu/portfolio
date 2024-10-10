import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Style.module.css';
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { MdAlternateEmail } from "react-icons/md";

const Head = () => {
    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: "#E42217" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{color:"#fff" , fontSize:"30px", fontWeight:"700"}}>Asraya MP

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={style.links}>
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/portfolio">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                            {/* <Nav.Link style={{color:"#fff" , fontSize:"18px"}} as={NavLink} to="/project">Project</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                        </Nav>
                        {/* <Nav className="ml-auto">
                            <Nav.Link href="https://www.instagram.com" target="_blank">
                                <FaInstagram />
                            </Nav.Link>
                            <Nav.Link href="https://wa.me/1234567890" target="_blank">
                                <FaWhatsapp />
                            </Nav.Link>
                            <Nav.Link href="mailto:example@example.com" target="_blank">
                                <MdAlternateEmail />
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Head

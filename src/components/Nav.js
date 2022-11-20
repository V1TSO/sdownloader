import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nbar = () => {
    return (
        <div className="nBar">
            <Navbar bg="299EEE" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                        <Nav.Link href="/">API Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nbar
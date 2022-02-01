import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  style={{color:'rgb(216, 185, 45)', fontStyle:'italic'}}>Deco-INSIDE</Navbar.Brand>
        <Nav className="me-auto">
          <Link to = "/" className="nav-link">Home</Link>
          <Link to = "/login" className="nav-link">Login</Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

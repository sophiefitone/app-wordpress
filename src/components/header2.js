import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header2() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  style={{color:'rgb(216, 185, 45)', fontStyle:'italic'}}>Deco-INSIDE</Navbar.Brand>
        <Nav className="me-auto">
          <Link to = "/pages" className="nav-link">Recettes françaises</Link>
          <Link to = "/posts" className="nav-link">Nos cuisines</Link>
          <Link to = "/" className="nav-link">LogOut</Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

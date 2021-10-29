import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Bd Tour</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <Link to='./sd' style={{textDecoration:'none' , color:'white'}}>
        User
      </Link>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><Link to='/myorder' style={{textDecoration:'none' }}>My Order</Link></Dropdown.Item>
    <Dropdown.Item href="#/action-2">LogOut</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <Link to='./sd' style={{textDecoration:'none' , color:'white'}}>
        Admin
      </Link>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><Link style={{textDecoration:'none' }}>Manage Order</Link></Dropdown.Item>
    <Dropdown.Item href="#/action-2">Add New Tour Plan</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
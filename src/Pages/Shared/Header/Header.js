import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user , logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Bd Tour</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/be/a/member'>About Us</Nav.Link>
        <Nav.Link as={Link} to='/photoGallery'>Photo Gallery</Nav.Link>
    </Nav>
    <Nav>
  
    
      {user?.email?
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      
            {user?.displayName}
         
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/myorder' style={{textDecoration:'none' }}>Booked</Dropdown.Item>
        <Dropdown.Item as={Link} to='/user/showOrder' style={{textDecoration:'none' }}>Confirmed Order</Dropdown.Item>
        <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
      
        
      </Dropdown.Menu>
    </Dropdown>:<Nav.Link as={Link} to="/login">Login</Nav.Link>}

<Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
 
        Admin
     
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item as={Link} to='/admin/userOrder' style={{textDecoration:'none' }} >Manage Order</Dropdown.Item>
    <Dropdown.Item as={Link} to='/addNewTour' style={{textDecoration:'none' }}>Add New TourPackage</Dropdown.Item>
    
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
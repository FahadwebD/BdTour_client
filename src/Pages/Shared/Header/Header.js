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
 
    </Nav>
    <Nav>
    
      {user?.email?
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <Link to='/userManagement' style={{textDecoration:'none' , color:'dark'}}>
            {user?.displayName}
          </Link>
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item ><Link to='/myorder' style={{textDecoration:'none' }}>My Order</Link></Dropdown.Item>
        <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
      
        
      </Dropdown.Menu>
    </Dropdown>:<Nav.Link as={Link} to="/login">Login</Nav.Link>}

<Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
  <Link to='/sd' style={{textDecoration:'none' , color:'white'}}>
        Admin
      </Link>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item ><Link to='/admin/userOrder' style={{textDecoration:'none' }}>Manage Order</Link></Dropdown.Item>
    <Dropdown.Item><Link to='/addNewTour' style={{textDecoration:'none' }}>Add New TourPackage</Link></Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>

    </Nav>
  </Navbar.Collapse>
  <NavLink to='/be'>Be A Member</NavLink>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
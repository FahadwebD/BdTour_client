import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <Link to='/userManagement' style={{textDecoration:'none' , color:'white'}}>
            {user?.displayName}
          </Link>
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item ><Link to='/myorder' style={{textDecoration:'none' }}>My Order</Link></Dropdown.Item>
        <Dropdown.Item><Button onClick={logOut}>Logout</Button></Dropdown.Item>
      
        
      </Dropdown.Menu>
    </Dropdown>:<Nav.Link as={Link} to="/login"><Button>Login</Button></Nav.Link>}

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <Link to='/sd' style={{textDecoration:'none' , color:'white'}}>
        Admin
      </Link>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item ><Link to='/admin/userOrder' style={{textDecoration:'none' }}>Manage Order</Link></Dropdown.Item>
    <Dropdown.Item>Add New Tour Plan</Dropdown.Item>
    
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DRQ-MERN-ND</Navbar.Brand>
            <Nav className="me-auto">
              {/* Using Nav.link as Link allows me to change pages without the page reloading */}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/page1">Person Entry</Nav.Link>
                <Nav.Link as={Link} to="/page2">Entry Retrieval</Nav.Link>
            </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
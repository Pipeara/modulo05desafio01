import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
  <Navbar bg="danger" variant="dark" expand="lg">
  <Container>
    <Navbar.Toggle text-white="navbar" />
    <Navbar.Brand className="ms-3">
      <Link to="/" className="text-decoration-none text-white">🏠 Home</Link>
      <Link to="/contacto" className="text-decoration-none text-white ms-3">📒 Contacto</Link>
    </Navbar.Brand>
    <Navbar.Collapse id="navbar">
      <Nav className="ms-auto">
        <span className="text-white">Happy Cake 🍰</span> {/* se aplica clase text-white */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



        </>
    )
}

import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Offcanvas, Button } from "react-bootstrap";

const navLinks = ["Hobbies", "Calculator", "JSON", "Memoization"];

const Sidebar = ({ className }) => (
  <Col lg={2} className={className}>
    <Nav className="flex-column">
      <Navbar.Brand as={NavLink} to="/" className="text-decoration-none">
        <span className="text-danger fw-bold fs-3">JOSHUA</span>
        <span className="text-dark fs-3">BAYRON</span>
      </Navbar.Brand>
      {navLinks.map((link) => (
        <NavLink
          key={link}
          to={`/${link}`}
          className={({ isActive }) => `nav-link text-dark text-decoration-none ${isActive ? "fw-bold text-primary" : ""}`}
        >
          {link}
        </NavLink>
      ))}
    </Nav>
  </Col>
);

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container fluid className="p-0 m-0 overflow-hidden">
      <Row className="vh-100">
        <Sidebar className="d-none d-lg-block bg-light border-end p-3" />
        
        {/* Offcanvas Navbar for small screens */}
        <Navbar expand="lg" className="d-lg-none p-3 position-fixed start-0 top-0" style={{ zIndex: 1 }}>
          <Button variant="light" onClick={() => setShowSidebar(true)}>☰</Button>
        </Navbar>

        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
          <Offcanvas.Header closeButton className="justify-content-end w-100"/>
          <Offcanvas.Body>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <Col lg={10} className="p-0">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
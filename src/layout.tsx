import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Offcanvas,
  Button,
} from "react-bootstrap";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container fluid className="p-0">
      <Row className="vh-100">
        {/* Sidebar for large screens & Offcanvas for small screens */}
        <Col lg={2} className="d-none d-lg-block bg-light border-end p-3">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand href="home">JoshuaBayron</Navbar.Brand>
            <Nav.Link
              className="text-dark text-decoration-none"
              href="/Calculator"
            >
              Calculator
            </Nav.Link>
            <Nav.Link
              className="text-dark text-decoration-none"
              href="/Hobbies"
            >
              Hobbies
            </Nav.Link>
            <Nav.Link className="text-dark text-decoration-none" href="/JSON">
              JSON
            </Nav.Link>
            <Nav.Link
              className="text-dark text-decoration-none"
              href="/Memoization"
            >
              Memoization
            </Nav.Link>
          </Nav>
        </Col>

        {/* Offcanvas for small screens */}
        <Navbar
          expand="lg"
          className="d-lg-none p-3 position-fixed start-0 top-0"
          style={{ zIndex: "1" }}
        >
          <Button
            variant="light"
            onClick={() => setShowSidebar(true)}
            style={{ opacity: 0.7, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.target.style.opacity = 1)}
            onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
          >
            ☰
          </Button>
        </Navbar>

        <Offcanvas
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href="/Home" className="text-decoration-none text-dark">JoshuaBayron</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                className="text-dark text-decoration-none"
                href="/Calculator"
              >
                Calculator
              </Nav.Link>
              <Nav.Link
                className="text-dark text-decoration-none"
                href="/Hobbies"
              >
                Hobbies
              </Nav.Link>
              <Nav.Link className="text-dark text-decoration-none" href="/JSON">
                JSON
              </Nav.Link>
              <Nav.Link
                className="text-dark text-decoration-none"
                href="/Memoization"
              >
                Memoization
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <Col lg={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;

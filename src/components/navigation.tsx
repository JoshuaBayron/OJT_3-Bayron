import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" sticky-top burlywood-background"
    >
      <Container>
        <Navbar.Brand href="home">JoshuaBayron</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Calculator">Calculator</Nav.Link>
            <Nav.Link href="Hobbies">Hobbies</Nav.Link>
            <Nav.Link href="JSON">JSON</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

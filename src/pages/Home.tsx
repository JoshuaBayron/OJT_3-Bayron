import { Button, Container, Row, Col } from "react-bootstrap";
import FormTextInput from "../components/formTextInput";
import logo from "../assets/logo.png";
export default function Home() {
  return (
    <>
      <Container fluid className="text-center mt-5">
        <Row className="justify-content-center text-center my-3">
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <img
              src={logo}
              alt="JOSHY LOGO"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "auto" }}
            />
            <h1 className="mt-2">JOSHY DEV</h1>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md="auto" className="d-flex align-items-center gap-2">
            <h5 className="mb-0">
              <i>Created By:</i>
            </h5>
            <FormTextInput />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <p>
              Hi! My name is Joshua Bayron. By clicking the <b>button</b> below,
              you will learn more about me.
            </p>
            <Button variant="warning" href="/hobbies">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

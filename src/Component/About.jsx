import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cards">Cards</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

       <Container className="my-5">
      <h2 className="text-center mb-4">About Me</h2>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48"
            alt="Profile"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h4>Hi, I’m PiYuu$h ⚡</h4>
          <p>
            I'm an 18-year-old aspiring Full-Stack Developer currently learning web technologies.
            I enjoy building responsive websites and clean UIs.
          </p>
          <ul>
            <li><strong>Age:</strong> 18</li>
            <li><strong>Location:</strong> Ahmedabad, India</li>
            <li><strong>Email:</strong> baradpiyush2528@gmail.com</li>
            <li><strong>Instagram:</strong> @_.piyush.006 ⚡</li>
          </ul>
          <Button variant="primary" href="/resume.pdf" download>
            Download Resume
          </Button>
        </Col>
      </Row>

      <h3 className="text-center mb-4">My Skills</h3>
      <Row>
        <Col md={4}>
          <Card className="text-center shadow-sm mb-3">
            <Card.Body>
              <Card.Title>Frontend</Card.Title>
              <Card.Text>
                HTML, CSS, JavaScript, Bootstrap, React (learning)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm mb-3">
            <Card.Body>
              <Card.Title>Backend</Card.Title>
              <Card.Text>
                Coming Soon: Node.js, Express, MongoDB
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm mb-3">
            <Card.Body>
              <Card.Title>Tools</Card.Title>
              <Card.Text>
                Git, GitHub, VS Code, Figma (basic)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;

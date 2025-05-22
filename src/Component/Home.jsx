import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../app.css";

const colorfulHeaderStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: 'white',
  fontWeight: 'bold',
});

const Home = () => {
  return (
    <div className="page-wrapper"> 
      <div className="content">
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

        <div>
          <Accordion defaultActiveKey="0" className="my-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header style={colorfulHeaderStyle('#007bff')}>What is React?</Accordion.Header>
              <Accordion.Body>
                React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header style={colorfulHeaderStyle('#28a745')}>What is Bootstrap?</Accordion.Header>
              <Accordion.Body>
                Bootstrap is a popular CSS framework for building responsive and mobile-first websites quickly.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header style={colorfulHeaderStyle('#ffc107')}>How do I use React Bootstrap?</Accordion.Header>
              <Accordion.Body>
                React Bootstrap provides Bootstrap components built with React, letting you use Bootstrap styles easily in React apps.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header style={colorfulHeaderStyle('#dc3545')}>How to add routing in React?</Accordion.Header>
              <Accordion.Body>
                You can use React Router, a library that enables dynamic routing in React applications.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <footer className="bg-dark text-white mt-5 py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>PiYuu$h ⚡</h5>
              <p>Full-Stack Developer | Portfolio Project</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white">Home</a></li>
                <li><a href="#projects" className="text-white">Projects</a></li>
                <li><a href="#contact" className="text-white">Contact</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: baradpiyush2528@gmail.com</p>
              <p>Instagram: @_.piyush.006 ⚡</p>
            </Col>
          </Row>
          <hr className="border-light" />
          <p className="text-center mb-0">&copy; 2025 PiYuu$h. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;

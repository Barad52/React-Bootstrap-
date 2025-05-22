import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = () => {
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

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
        {/* Cards */}
        <Card border="primary" style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/5e/fd/7f/5efd7fbe6118fd3c2e200fa724070d39.jpg" height={400} />
          <Card.Body>
            <Card.Title>Nature Images</Card.Title>
            <Card.Text>
              I love nature's beauty! Everything from the birds singing in the morning, to the sunshine-filled days and watching sunsets at dusk.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card border="info" style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/62/8b/d4/628bd4f095f6e757aa3e80a77f5ee014.jpg" height={400} />
          <Card.Body>
            <Card.Title>Magical Sky</Card.Title>
            <Card.Text>
              The beauty of nature brings me so much joy! I feel so fortunate to be able to take part in its wonders.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card border="success" style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/13/be/95/13be95147b920e7c4ee958ff30db7a11.jpg" height={400} />
          <Card.Body>
            <Card.Title>Clouds</Card.Title>
            <Card.Text>
              Ever looked up at the sky and found yourself snapping a pic because those clouds were just too beautiful?
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Cards;

import React from 'react';
import './style.css';
import Logo from "./forLogo.png";
import {Navbar, Nav, Button, Card, Row, Col, Container} from 'react-bootstrap';
    
const Projects = (props) => {
    
  return (
    <div>
      <Navbar bg="dark" variant = "dark">
      <Navbar.Brand href="/skills"><img src = {Logo} alt = "Logo"/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav>
      </Navbar>
      <div className = "myCard">
          <Card className = "vertical-center horizontal-center mx-auto">
          <Card.Body>
            <Card.Title ><h1>Projects</h1></Card.Title>
            <hr className = "underline"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Tic-Tac-Toe Web Application</h3>
                  <p className = "projectDesc">
                    A simple Tic-Tac-Toe web application developed by me using
                    Javascript, express, JQuery, and hosted on a NodeJS server. 
                  </p>
                  <Button className = "buttonForGame text-center" href ="https://my-tic-tac-toe-web-app.herokuapp.com/" display = "block">
                    <span className = "textInButton">Play Tic-Tac-Toe!</span>
                  </Button>
                </Col>
              </Container>
            </Row>
            <hr className = "underlineProj"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Price Check</h3>
                  <p className = "projectDesc">
                    A program developed in Python that searches for the 
                    cheapest price of a given product.
                  </p>
                  <Button className = "buttonForPCheck text-center" href ="https://github.com/ThomasJuric/priceCheck" display = "block">
                    <span className = "textInButton">Check out the code!</span>
                  </Button>
                </Col>
              </Container>
            </Row>
            <hr className = "underlineProj"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>My Old Website</h3>
                  <p className = "projectDesc">
                    A website I developed with minimal use of Bootstrap, 
                    similar to this one in content.
                  </p>
                  <Button className = "buttonForWeb text-center" href ="https://thomas19.netlify.app/" display = "block">
                    <span className = "textInButton">Older Website!</span>
                  </Button>
                </Col>
              </Container>
            </Row>
          </Card.Body>
            <Card.Footer className = "mx-auto">
                  <div className="column">
                      <a href ="mailto:thomasjuric@gmail.com" display = "block" width = "2px">
                          <i className="fa fa-envelope icon fa-4x"></i>
                      </a>
                  </div>
                  <div className = "column">
                      <a href ="https://github.com/ThomasJuric" display = "block" width = "2px">
                          <i className="fa fa-github-square icon fa-4x" aria-hidden="true"></i>
                      </a>
                  </div>
                  <div className = "column">
                      <a href ="https://www.linkedin.com/in/thomasjuric" display = "block" width = "2px">
                          <i className="fa fa-linkedin fa-4x" aria-hidden = "true"></i>
                      </a>
                  </div>
            </Card.Footer>
          </Card>
        </div>
        {/* <div className="footer">
        <hr id = "thefooter" className="my-2"></hr>
        <p>
            This Website is Property of Thomas Juric &copy;
        </p>
    </div> */}
    </div>
  );
}

export default Projects;

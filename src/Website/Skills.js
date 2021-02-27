import React from 'react';
import './style.css';
import {Navbar, Nav, Card, Col, Container, Row, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Skills = (props) => {
    
  return (
    <div>
      <div className = "largerNav">
        <Navbar  bg="dark" variant = "dark">
        <Navbar.Brand href = "/">TJ</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/experience">Experience</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar>
      </div>

      <div className = "mobileNav">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">TJ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Navigation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">About</NavDropdown.Item>
                  <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
                  <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                  <NavDropdown.Item href="/experience">Experience</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contact">Contact Me</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      <div className = "myCard">
          <Card className = "vertical-center horizontal-center mx-auto">
          <Card.Body>
            <Card.Title ><h1>Skills</h1></Card.Title>
            <hr className = "underline"></hr>
            <Container >
            <Row>
              <Col>
                <h2 className = "text-muted" id = "TheLangagues">Languages</h2>
                <ul id = "langList">
                    <li>C Language<img id = "langPhoto" alt = "C" src="https://img.icons8.com/color/48/000000/c-programming.png"/></li>
                    <li>Python <img id = "langPhoto" alt = "Python" src="https://img.icons8.com/color/48/000000/python.png"/></li>
                    <li>Java <img id = "langPhoto" alt = "Java" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></li>
                    <li>Javascript <img id = "langPhoto" alt = "Javascript" src="https://img.icons8.com/color/48/000000/javascript.png"/></li>
                    <li>HTML <img id = "langPhoto" alt = "HTML" src="https://img.icons8.com/color/48/000000/html-5.png"/></li>
                    <li>CSS <img id = "langPhoto" alt = "CSS" src="https://img.icons8.com/color/48/000000/css3.png"/></li>
                </ul>
              </Col>
              <Col className = "forBigger">
                <h2 className = "text-muted" id = "toolsAndTech">Tools & Technologies</h2>
                <ul id = "toolsList">
                    <li>React <img id = "langPhoto" src="https://img.icons8.com/nolan/64/react-native.png" alt = "React"/></li>
                    <li>NodeJS <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/nodejs.png" alt = "NodeJS"/></li>
                    <li>Selenium <img id = "langPhoto" src="https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png" alt = "Selenium"/></li>
                    <li>Linux <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/linux.png" alt = "Linux" /></li>
                    <li>Git <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/git.png" alt = "Git" /></li>
                    <li>Bootstrap <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/bootstrap.png" alt = "Bootstrap"/></li>
                    <li>Visual Studio Code <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt = "Visual Studio Code"/></li>
                </ul>
              </Col>
            </Row>
            <Row className = "forSmaller">
              <Col>
                <h2 className = "text-muted" id = "toolsAndTech">Tools & Technologies</h2>
                <ul id = "toolsList">
                    <li>React <img id = "langPhoto" src="https://img.icons8.com/nolan/64/react-native.png" alt = "React"/></li>
                    <li>NodeJS <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/nodejs.png" alt = "NodeJS"/></li>
                    <li>Selenium <img id = "langPhoto" src="https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png" alt = "Selenium"/></li>
                    <li>Linux <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/linux.png" alt = "Linux" /></li>
                    <li>Git <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/git.png" alt = "Git" /></li>
                    <li>Bootstrap <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/bootstrap.png" alt = "Bootstrap"/></li>
                    <li>Visual Studio Code <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt = "Visual Studio Code"/></li>
                </ul>
              </Col>
            </Row>
          </Container>
          </Card.Body>
            <Card.Footer className = "mx-auto">
                  <div className="column">
                      <a className = "icon" href ="mailto:tjuric@uoguelph.ca" display = "block" width = "2px">
                          <FontAwesomeIcon icon={["fa", "envelope"]} />
                      </a>
                  </div>
                  <div className = "column">
                      <a className = "icon" href ="https://github.com/ThomasJuric" display = "block" width = "2px">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </a>
                  </div>
                  <div className = "column">
                      <a className = "icon" href ="https://www.linkedin.com/in/thomasjuric" display = "block" width = "2px">
                        <FontAwesomeIcon icon={faLinkedin} />
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

export default Skills;

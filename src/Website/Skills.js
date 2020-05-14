import React from 'react';
import './style.css'
import {Navbar, Nav, Card, Col, Container, Row} from 'react-bootstrap';
    
const Skills = (props) => {
    
  return (
    <div>
      <Navbar bg="dark" variant = "dark">
      <Navbar.Brand href="/skills">Thomas Juric</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav>
      </Navbar>
      <div className = "myCard">
          <Card className = "vertical-center horizontal-center mx-auto">
          <Card.Body>
            <Card.Title ><h1>Skills</h1></Card.Title>
            <hr className = "underline"></hr>
            <Container >
            <Row>
              <Col>
                <h3 className = "text-muted" id = "TheLangagues">Languages</h3>
                <ul id = "langList">
                    <li>C Programming Language<img id = "langPhoto" alt = "C" src="https://img.icons8.com/color/48/000000/c-programming.png"/></li>
                    <li>Python <img id = "langPhoto" alt = "Python" src="https://img.icons8.com/color/48/000000/python.png"/></li>
                    <li>Java <img id = "langPhoto" alt = "Java" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></li>
                    <li>Javascript <img id = "langPhoto" alt = "Javascript" src="https://img.icons8.com/color/48/000000/javascript.png"/></li>
                    <li>HTML <img id = "langPhoto" alt = "HTML" src="https://img.icons8.com/color/48/000000/html-5.png"/></li>
                    <li>CSS <img id = "langPhoto" alt = "CSS" src="https://img.icons8.com/color/48/000000/css3.png"/></li>
                </ul>
              </Col>
              <Col className = "forBigger">
                <h3 class = "text-muted" id = "toolsAndTech">Tools & Technologies</h3>
                <ul id = "toolsList">
                    <li>NodeJS <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/nodejs.png" alt = "NodeJS"/></li>
                    <li>Selenium <img id = "langPhoto" src="https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png" alt = "Selenium"/></li>
                    <li>Linux <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/linux.png" alt = "Linux" /></li>
                    <li>React <img id = "langPhoto" src="https://img.icons8.com/nolan/64/react-native.png" alt = "React"/></li>
                    <li>Git <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/git.png" alt = "Git" /></li>
                    <li>Bootstrap <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/bootstrap.png" alt = "Bootstrap"/></li>
                    <li>Visual Studio Code <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt = "Visual Studio Code"/></li>
                </ul>
              </Col>
            </Row>
            <Row className = "forSmaller">
              <Col>
                <h3 class = "text-muted" id = "toolsAndTech">Tools & Technologies</h3>
                <ul id = "toolsList">
                    <li>NodeJS <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/nodejs.png" alt = "NodeJS"/></li>
                    <li>Selenium <img id = "langPhoto" src="https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png" alt = "Selenium"/></li>
                    <li>Linux <img id = "langPhoto" src="https://img.icons8.com/color/48/000000/linux.png" alt = "Linux" /></li>
                    <li>React <img id = "langPhoto" src="https://img.icons8.com/nolan/64/react-native.png" alt = "React"/></li>
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

export default Skills;

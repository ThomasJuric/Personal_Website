import React from 'react';
import './style.css';
import {Navbar, Nav, Button, Card, Row, Col, Container, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Projects = (props) => {
    
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
            <Card.Title ><h1>Projects</h1></Card.Title>
            <hr className = "underline"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Tic-Tac-Toe Web Application</h3>
                  <p className = "projectDesc">
                    This is a tic-tac-toe web application that I developed using HTML, CSS, and JavaScript. I used the minimax algorithm to determine the best possible move for the computer, so it's pretty hard.
                  </p>
                  
                </Col>
                <Row>
                <Button className = "theProjBtn text-center" href ="https://tic-tac-thomas.netlify.app/" >
                    <span className = "btnText">Click Here to Try the game</span>
                  </Button>
                </Row>
              </Container>
                
            </Row>
            {/* <hr className = "underlineProj"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Price Check</h3>
                  <p className = "projectDesc">
                    A program developed in Python that searches for the 
                    cheapest price of a given product. This program was developed 
                    using BeautifulSoup to parse the HTML from different pages, 
                    and the information of the cheapest available product is shown to the user, 
                    as well as a link to the desired product. Shopping websites that are searched 
                    as of now include Amazon.com and eBay.com, where the cheapest product is found 
                    from both of these sites.
                  </p>
                  <Button className = "buttonForPCheck text-center" href ="https://github.com/ThomasJuric/Price_Check_V2" display = "block">
                    <span className = "textInButton">Check out the code!</span>
                  </Button>
                </Col>
              </Container>
            </Row> */}
            <hr className = "underlineProj"></hr>
            <Row>
                <Container>
                  <Col>
                    <h3>Previous Personal Website</h3>
                    <p className = "projectDesc">
                      A website I developed with minimal use of Bootstrap, 
                      similar to this one in content. (Not Anymore - this one is more updated)
                    </p>
                    
                  </Col>
                  <Row className = "btnRow">
                    <Button className = "theProjBtn text-center" href ="https://thomas19.netlify.app/">
                      <span className = "btnText">View My Previous Website!</span>
                    </Button>
                </Row>
                </Container>
            </Row>
            <hr className = "underlineProj"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Friend's Art Portfolio</h3>
                  <p className = "projectDesc">
                    A Website I developed for my Friend's Art Portfolio using React.
                  </p>
                  
                </Col>
                <Row className = "btnRow">
                <Button className = "theProjBtn text-center" href ="https://jlenn.net" display = "block">
                      <span className = "btnText">Check Out my Friend's Website!</span>
                  </Button>
                </Row>
              </Container>
              
            </Row>
          </Card.Body>
            <Card.Footer className = "mx-auto">
              <div className="column">
                      <a href ="mailto:thomasjuric@gmail.com" display = "block" width = "2px">
                          <FontAwesomeIcon icon={["fa", "envelope"]} />
                      </a>
                  </div>
                  <div className = "column">
                      <a href ="https://github.com/ThomasJuric" display = "block" width = "2px">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </a>
                  </div>
                  <div className = "column">
                      <a href ="https://www.linkedin.com/in/thomasjuric" display = "block" width = "2px">
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

export default Projects;

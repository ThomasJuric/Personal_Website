import React from 'react';
import './style.css';
import {Navbar, Nav, Card, Row, Container, NavDropdown} from 'react-bootstrap';
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
            <Card.Title ><h1>Experience</h1></Card.Title>
            <hr className = "underline"></hr>
            <Row>
                <Container>
                    <h3>Website Support Developer</h3>
                    <Card.Subtitle className="mb-3 text-muted subtitle">August 2020 - January 2021 • University of Guelph</Card.Subtitle>
                    <div>
                        <ul>
                            <li>Developed & maintained public and development websites under the University of Guelph domain.</li>
                            <li>Used tools such as HTML, CSS, Drupal, Pantheon, SharePoint, & Gatsby to develop and improve existing websites.</li>
                            <li>Created documentation to construct client training for tools such as SharePoint.</li>
                            <li>Carried out Weekly Trainings for Clients for the Drupal CMS to assist them with learning the necessary tools to make their own site edits.</li>
                            <li>Participated in Weekly Agile & Scrum Meetings with the team to divide up work ahead.</li>
                            <li>Assisted with the onboarding process with the new Co-op student.</li>
                        </ul>
                    </div>
                </Container>
                
            </Row>
            
            
            
          </Card.Body>
            <Card.Footer className = "mx-auto">
                <div className="column">
                      <a className = "icon" href ="mailto:thomasjuric@gmail.com" display = "block" width = "2px">
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

export default Projects;

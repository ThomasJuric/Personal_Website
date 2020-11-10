import React from 'react';
import './style.css'
import {Navbar, Nav, Card, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const About = (props) => {
    
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
            <Card.Title ><h1>Thomas Juric</h1></Card.Title>
            <Card.Subtitle className="mb-3 text-muted subtitle">Computer Science Student</Card.Subtitle>
            <hr className = "underline"></hr>
            <Card.Text className = "cardText">
              Hey, my name is Thomas and I'm currently a second-year student studying towards a Bachelor of Computing Degree, 
              with a major in Computer Science. This is my personal website, where I plan to display my projects, skills, 
              experience, and anything else about me. I developed this website using React as a way to increase and showcase my web 
              development skillset.
            </Card.Text>
            <Card.Text className = "cardText">
              Aside from being a student, I enjoy playing basketball, keeping up with sports, hanging out with friends, and watching Netflix. 
              If you have any questions, feel free to shoot me an E-Mail.
            </Card.Text>
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

export default About;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


import {Navbar, Nav, Card, NavDropdown} from 'react-bootstrap';

const ContactMe = (props) => {
    
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
        <Card.Body >
          <Card.Title className = "mx-auto" ><h1>Contact Me</h1></Card.Title>
          <hr className = "underline"></hr>
            <p className = "contactBox">Feel free to contact me if you have any questions.<br /> The best way to get in touch is through <a href = "mailto:thomasjuric@gmail.com">E-Mail</a> </p>
        </Card.Body>
            <Card.Footer className = "mx-auto">
              <div className="column">
                      <a className = "icon"  href ="mailto:thomasjuric@gmail.com" display = "block" width = "2px">
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
  </div>  
);
}

export default ContactMe;

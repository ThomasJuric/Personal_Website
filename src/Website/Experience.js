import React from 'react';
import './style.css';
import Logo from "./forLogo.png";
import {Navbar, Nav, Card, Row, Container} from 'react-bootstrap';
    
const Projects = (props) => {
    
  return (
    <div>
      <Navbar bg="dark" variant = "dark">
      <Navbar.Brand href = "/"><img src = {Logo} alt = "Logo"/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/experience">Experience</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
      <div className = "myCard">
          <Card className = "vertical-center horizontal-center mx-auto">
          <Card.Body>
            <Card.Title ><h1>Experience</h1></Card.Title>
            <hr className = "underline"></hr>
            <Row>
                <Container>
                    <h3>Website Training & Support Specialist</h3>
                    <Card.Subtitle className="mb-3 text-muted subtitle">August 2020 - January 2021 • Remote</Card.Subtitle>
                    <div>
                        <ul>
                            <li>Developed & maintained public and developmental websites under the University of Guelph domain.</li>
                            <li>Used tools such as HTML, CSS, Drupal, Pantheon, SharePoint, & Gatsby to develop and improve existing websites.</li>
                            <li>Created documentation to construct client training for tools such as SharePoint.</li>
                            <li>Carried out Weekly Trainings for Clients for the Drupal CMS to assist them with learning the necessary tools to make their own site edits.</li>
                            <li>Participated in Weekly Agile & Scrum Meeting with the team to divide up work ahead.</li>
                            {/* <li>Assisted with the onboarding process with the new Co-op student.</li> */}
                        </ul>
                    </div>
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
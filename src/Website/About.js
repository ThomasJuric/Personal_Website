import React from 'react';
import './style.css'
import Logo from "./forLogo.png";
import {Navbar, Nav, Card} from 'react-bootstrap';
const About = (props) => {
    
  return (
    <div>
      <Navbar bg="dark" variant = "dark">
      <Navbar.Brand><img src = {Logo} alt = "Logo"/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav>
      </Navbar>
      <div className = "myCard">
          <Card className = "vertical-center horizontal-center mx-auto">
          <Card.Body>
            <Card.Title ><h1>Thomas Juric</h1></Card.Title>
            <Card.Subtitle className="mb-3 text-muted subtitle">Computer Science Student</Card.Subtitle>
            <hr className = "underline"></hr>
            <Card.Text className = "cardText">
              Hey, my name is Thomas and I'm currently a second-year student studying towards a Bachelor of Computing Degree, 
              with a major in Computer Science. This is my personal website, where I plan to display my projects, skills, 
              experience, and anything else about me. I developed this website using React as a way to increase my web 
              development skillset.
            </Card.Text>
            <Card.Text className = "cardText">
              Aside from being a student, I enjoy playing basketball, hanging out with friends, and watching Netflix. 
              If you have any questions for me, feel free to shoot me an E-Mail.
            </Card.Text>
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

export default About;

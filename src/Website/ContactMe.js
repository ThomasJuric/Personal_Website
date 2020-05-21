import React from 'react';
import Logo from "./forLogo.png";
import {Navbar, Nav, Card, Row} from 'react-bootstrap';
const ContactMe = (props) => {
    
return (
  <div>
  <Navbar bg="dark" variant = "dark">
      <Navbar.Brand><img src = {Logo} alt = "Logo"/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  <div className = "myCard">
    <Card className = "mainCard vertical-center horizontal-center mx-auto">
    <Card.Body>
      <Card.Title className = "mx-auto" ><h2>Contact Me!</h2></Card.Title>
      <hr className = "underline"></hr>
        <Card.Text className = "textForCard">
            Feel free to contact me if you have any questions.<br></br>The best way to get in touch is through E-Mail
            
        </Card.Text>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
        <Card.Body className = "text-center">
        <div className = "contactInfo">
                <Row>
                    <div className = "column text-center">
                        <a href ="mailto:thomasjuric@gmail.com" display = "block" width = "2px">
                            <i className="fa fa-envelope icon fa-3x"></i>
                        </a>
                    </div>
                    <div className = "column">
                        <a href ="https://github.com/ThomasJuric" display = "block" width = "2px">
                            <i className="fa fa-github-square icon fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className = "column">
                        <a href ="https://www.linkedin.com/in/thomasjuric" display = "block" width = "2px">
                            <i className="fa fa-linkedin fa-3x" aria-hidden = "true"></i>
                        </a>
                    </div>
                </Row>
                </div>
            </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  </div>  
  </div>  
);
}

export default ContactMe;

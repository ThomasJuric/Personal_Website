import React from 'react';
import './style.css';
import Logo from "./forLogo.png";
import {Navbar, Nav, Button, Card, Row, Col, Container} from 'react-bootstrap';
    
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
            <Card.Title ><h1>Projects</h1></Card.Title>
            <hr className = "underline"></hr>
            <Row>
              <Container>
                <Col>
                  <h3>Tic-Tac-Toe Web Application</h3>
                  <p className = "projectDesc">
                    This is a tic-tac-toe web application that I developed using HTML, CSS, and JavaScript. I used the minimax algorithm to determine the best possible move for the computer, so it's pretty hard.
                  </p>
                  <Button className = "buttonForGame text-center" href ="https://tic-tac-thomas.netlify.app/" display = "block">
                    <span className = "textInButton">Try the game</span>
                  </Button>
                </Col>
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
                    similar to this one in content.
                  </p>
                  <Button className = "buttonForWeb text-center" href ="https://thomas19.netlify.app/" display = "block">
                    <span className = "textInButton">Previous Website!</span>
                  </Button>
                </Col>
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
                  <Button className = "buttonForFriend text-center" href ="https://jlenn.net" display = "block">
                    <span className = "textFriend">Check Out Website!</span>
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

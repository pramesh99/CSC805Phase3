import {Nav, Navbar, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Home from './HomePage.js';
// import Photography from './PhotographyPage.js';
// import ProjectsComp from './ProjectsPage.js';


const NavbarComp = () => {
  return (
    <HashRouter>
      <Navbar collapseOnSelect={true} style={{backgroundColor: "#191a1b"}} variant="dark" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>CSC 805: Final Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link style={{color: "#e7c06b"}}>Link1</Nav.Link>
              {/* <Nav.Link style={{color: "#b0d387"}} as={Link} to={"/projects"}>Link1</Nav.Link> */}
              <Nav.Link style={{color: "#e7c06b"}} as={Link}>Link2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <Routes>
        <Route path='/*' element={<Home/>}/>
        {/* <Route path='/photography' element={<Photography/>}/>
        <Route path='/projects' element={<ProjectsComp/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default NavbarComp;
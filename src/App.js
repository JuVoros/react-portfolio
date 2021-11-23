import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Footer from "./components/footer";
import AboutMe from './pages/aboutMe';
import './App.css';

function App() {
return (
  <Router>
<Navbar className="navbar">
  <Container className="nav-container">
    <Navbar.Brand className="navTitle">Julian Voros</Navbar.Brand>
      <Nav className="nav">
        <Link to="/" className="navLink">About-Me</Link>
        <Nav.Link href="/Portfolio" className="navLink" >Portfolio</Nav.Link>
        <Nav.Link href="/Resume" className="navLink">Resume</Nav.Link>
        <Link to="/Contact" className="navLink">Contact</Link>
      </Nav>
  </Container>
</Navbar>
<Footer/>


<Switch>
  <Route exact path="/">
    <h1>About-Me</h1>
  </Route>
  <Route exact path="/Portfolio">
    <h1>Portfolio</h1>
  </Route>
  <Route exact path="/Resume">
    <h1>Resume</h1>
  </Route>
  <Route exact path="/Contact">
    <h1>Contact</h1>
  </Route>
  

</Switch>
</Router>
);
}

export default App;



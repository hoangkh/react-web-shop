import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './App.css';


import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar id="main-nav" bg="light" expand="lg">
      <Link to="/" className="brand-name">React Playground</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="menu-items" to="/about">About</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    <Switch>
      <Route path="/about">
        <About />
      </Route>
     
      <Route path="/under-construction">
        <UnderConstructionPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
</Router>
  
      <div id="shop-page">
      <Header />
      <Body />
      <Footer />
      </div>
    </div>
  );
}

export default App;

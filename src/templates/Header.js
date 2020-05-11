import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import Home from ".././App";
import About from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import UnderConstructionPage from "./UnderConstructionPage";

function Header() {
  const menuItem = ['Men', 'Woman', 'Kids', 'Accessories', 'Brands', 'Sales', 'My Basket'];
    return <div className="shop-page-header">
      <Router>
      <Navbar expand="lg">
      <Link to="/shop" className="brand-name">My Shop</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {menuItem.map((item, index) => (
              <Link className="menu-items" to="/under-construction">{item}</Link>    
            ))}
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
      </div>;
  }

export default Header;
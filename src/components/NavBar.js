import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {
          query: ""
      };
      this.search = this.search.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state.query)
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        console.log('A query was submitted: ' + this.state.query);
        event.preventDefault();
    }

    search() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="logo"
                        width={60}
                        height={60}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline onSubmit={this.handleSubmit}>
                    <FormControl value={this.state.query} onChange={this.handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" onClick={this.handleSubmit}>Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
          );
    }
}

export default NavBar;
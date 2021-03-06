import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import '../stylesheets/App.css';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar id="navbar" color="dark" dark expand="sm">
            <Container>
                <NavbarBrand href="https://mmtech871143481.wordpress.com/">Mike McGowan</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar pullright >
                        <NavItem pullright>
                            <NavLink href="https://quotes.mcgowanmedia.tech/">
                                Quotes Generator
                            </NavLink>
                        </NavItem>
                        <NavItem pullright>
                            <NavLink href="https://markdown.mcgowanmedia.tech/">
                                Markdown Previewer
                            </NavLink>
                        </NavItem>
                        <NavItem pullright>
                            <NavLink href="https://github.com/debiangeek">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://mmtech871143481.wordpress.com/">
                            Blog
                        </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>                
            </Container>            
            </Navbar>
            </div>
        );
   
    }
}

export default AppNavbar;
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

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    // TODO Change contact link to modal contact form

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Mike McGowan</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar pullRight >
                        <NavItem pullRight>
                            <NavLink href="https://sleepy-brook-63163.herokuapp.com/">
                                MERN Shopping List Example
                            </NavLink>
                        </NavItem>
                        <NavItem pullRight>
                            <NavLink href="https://github.com/debiangeek">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="mailto:mcgowan.michael@gmail.com">
                            Contact
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
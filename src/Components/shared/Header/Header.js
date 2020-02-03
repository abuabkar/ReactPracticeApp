import React, { Component } from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import './Header.scss'
class Header extends Component {

    render() {
        return (

            <div className="header-main">

                <div className="header-content">
                    <Navbar color="light" light expand="md" className="nav-header">
                        <Container>
                        <NavbarBrand href="/">Practice App</NavbarBrand>
                       
                        <Collapse  navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                   Contact
                            </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                          Form
                </DropdownItem>
                                        <DropdownItem>
                                          Render Props
                </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                          Props
                </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        
                        </Collapse>
                        </Container>
                    </Navbar>

                    
                </div>
            </div>



        )
    }
}

export default Header;
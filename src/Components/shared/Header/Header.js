import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import './Header.scss'
class Header extends Component {

    constructor(){
        super();
        this.state={
            isDropDownOpen:false,
        }
    }
    handleHoverDropDown=()=>{
        this.setState({
            isDropDownOpen:!this.state.isDropDownOpen
        })
    }

    render() {
        const {isDropDownOpen}=this.state;
        return (

            <div className="header-main">

                <div className="header-content">
                    <Navbar color="light" light expand="md" className="nav-header">
                        <Container>
                            <NavbarBrand href="/">Practice App</NavbarBrand>

                            <Collapse navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar onMouseEnter={this.handleHoverDropDown}  onMouseLeave={this.handleHoverDropDown} isOpen={isDropDownOpen}> 
                                        <DropdownToggle nav caret>
                                            Contact
                                     </DropdownToggle>
                                        <DropdownMenu left>
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
                                            <DropdownItem>
                                               HighOrder Component
                                            </DropdownItem>
                                            <DropdownItem>
                                             Designs
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
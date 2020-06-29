import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="headTop text-right">
                    <NavItem>Login</NavItem>
                    <NavItem>Sign Up</NavItem>
                </div>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <NavItem>CONTACT US</NavItem>
                    <NavItem>ABOUNT US</NavItem>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import './header.css'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" fixed="top">
                <NavbarBrand href="/" className="text-white">COVID19-Portal</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar/>
                    <Nav className="" navbar>
                        <NavItem><NavLink href="/">HOME</NavLink></NavItem>
                        <NavItem><NavLink>CONTACT US</NavLink></NavItem>
                        <NavItem><NavLink>ABOUT US</NavLink></NavItem>
                        <NavItem><NavLink href="/signin">Login</NavLink></NavItem>
                        <NavItem><NavLink href="/signin">Sign Up</NavLink></NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
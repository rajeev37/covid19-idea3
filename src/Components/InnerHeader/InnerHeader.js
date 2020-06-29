import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import './header.css'

const InnerHeader = (props) => {
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
                        <NavItem><NavLink>HOME</NavLink></NavItem>
                        <NavItem><NavLink>CONTACT US</NavLink></NavItem>
                        <NavItem><NavLink>ABOUT US</NavLink></NavItem>
                        <NavItem><NavLink>Login</NavLink></NavItem>
                        <NavItem><NavLink>Sign Up</NavLink></NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default InnerHeader;
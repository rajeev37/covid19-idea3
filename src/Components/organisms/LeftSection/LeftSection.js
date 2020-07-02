import React from "react";
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from "react-router-dom";

class LeftSection extends React.Component {
    render() {
        return (
            <section className="leftBar">
                <Nav vertical>
                    <button aria-label="Toggle navigation" type="button" className="leftBarIcon">Click!</button>
                    <NavItem>
                        <NavLink href="/service/door-step">Door Step Service</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">HelpLine Numbers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Covid19 Test Labs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Covid19 Test Hospitals</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Hospitals Providing Home Treatment</NavLink>
                    </NavItem>
                </Nav>
            </section>
        );
    }
}
export default LeftSection;
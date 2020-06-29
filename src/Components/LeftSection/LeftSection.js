import React from "react";
import {Nav, NavItem, NavLink} from 'reactstrap';

class LeftSection extends React.Component {
    render() {
        return (
            <section className="leftBar">
                <Nav vertical>
                    <button aria-label="Toggle navigation" type="button" className="leftBarIcon">Click!</button>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                </Nav>
            </section>
        );
    }
}
export default LeftSection;
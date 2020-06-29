import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader.js";

import LeftSection from "../LeftSection/LeftSection.js";

import RightSection from "../RightSection/RightSection.js";
import './Home.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
    render() {
        return (
            <>
                <InnerHeader/>
                <main id="inner-content">
                    <LeftSection/>
                    <div className="mainSection">
                        <Row xs="2">
                            <Col>
                                <h1>IMG</h1>
                            </Col>
                            <Col>
                                <RightSection/>
                            </Col>
                        </Row>
                    </div>
                </main>
            </>
        );
    }
}

export default Home;
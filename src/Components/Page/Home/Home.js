import React from "react";

import LeftSection from "../../organisms/LeftSection/LeftSection.js";

import RightSection from "../../organisms/RightSection/RightSection.js";
import './Home.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
    render() {
        return (
            <>                
                <main id="inner-content">
                    <LeftSection/>
                    <div className="mainSection">
                        <Row xs="2">
                            <Col>
                                <img src="images/corona.jpg" alt="thumb" class="img-fluid img-lg"/>
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
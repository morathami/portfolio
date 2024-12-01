import React from 'react';
import '../assets/works.css';
import FullProjectTable from "../components/FullProjectTable";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Image} from 'antd';

function Home() {
    return (
        // TODO add: WIZARDNESIA + CYBER BUDDY & WHISKERS + download resume as PDF + edit about page (add Tools and change text)
            <Container style={{marginTop:"120px", maxWidth: "1000px"}}>
                <Row className="justify-content-center px-0">
                    <Col>
                        <Link to="/cyberbuddy">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/52569652703_98705cd998_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/edumonster">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/52609804587_7f9e9a4cc6_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/pakobox">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/52632183561_5e870d560a_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/lighthearted">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/52568674032_d7de494bc3_o.png" />
                        </Link>
                    </Col>
                    <Col style={{textAlign:"right"}} className="px-0">
                        <Link to="/overtower">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/52569441459_82a6dc951f_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/ts4fashion">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/52606651655_14fde40d09_o.png" />
                        </Link>
                    </Col>
                    <Col style={{textAlign:"right"}} className="px-0">
                        <Link to="/webglmodel">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/52569163306_8d431e3cfa_o.png" />
                        </Link>
                    </Col>
                </Row>
                
                <Row className="fullwidth-button-container">
                    <FullProjectTable />
                </Row>
            </Container>
    );
}

export default Home;

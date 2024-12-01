import React from 'react';
import '../assets/works.css';
// import FullProjectTable from "../components/FullProjectTable";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Image} from 'antd';

function Home() {
    return (
        // TODO add: CYBER BUDDY & WHISKERS + add youtube video on games page
            <Container style={{marginTop:"120px", maxWidth: "1000px", marginBottom:"120px"}}>
                <Row className="justify-content-center px-0">
                    <Col>
                        <Link to="/portfolio/partyplanner">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/54175352936_ac05563390_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/portfolio/whiskers">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/54174463347_38ee8515c4_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/portfolio/cyberbuddy">
                            <Image className="border-radius-20" width={1000} src="https://live.staticflickr.com/65535/54175352951_f12d29ddbf_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/portfolio/edumonster">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/54174481052_9979e86cfa_o.png" />
                        </Link>
                    </Col>
                    <Col style={{textAlign:"right"}} className="px-0">
                        <Link to="/portfolio/pakobox">
                            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/54175370236_6bbbfb579f_o.png" />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center px-0 mt-5rem">
                    <Col>
                        <Link to="/portfolio/lighthearted">
                            <Image className="border-radius-20" width={300} src="https://live.staticflickr.com/65535/54175626838_c2754c8d93_o.png" />
                        </Link>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Link to="/portfolio/overtower">
                            <Image className="border-radius-20" width={300} src="https://live.staticflickr.com/65535/54174463337_f107bf7a8b_o.png" />
                        </Link>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <Link to="/portfolio/ts4fashion">
                            <Image className="border-radius-20" width={300} src="https://live.staticflickr.com/65535/54174504667_2b4e4cbe4b_o.png" />
                        </Link>
                    </Col>
                </Row>
                {/*<Row className="justify-content-center px-0 mt-5rem">*/}
                {/*    <Col>*/}
                {/*        <Link to="/portfolio/ts4fashion">*/}
                {/*            <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/54175809370_16a0db3862_o.png" />*/}
                {/*        </Link>*/}
                {/*    </Col>*/}
                {/*    <Col style={{textAlign:"right"}} className="px-0">*/}
                {/*        <Image className="border-radius-20" width={462} src="https://live.staticflickr.com/65535/54175367766_6c4627bdae_o.png" />*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                
                {/*<Row className="fullwidth-button-container">*/}
                {/*    <FullProjectTable />*/}
                {/*</Row>*/}
            </Container>
    );
}

export default Home;

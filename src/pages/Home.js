import React from 'react';
import '../assets/works.css';
// import FullProjectTable from "../components/FullProjectTable";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button, Image} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function Home() {
    return (
        // TODO add: CYBER BUDDY & WHISKERS & IMPRINTCORP + add youtube video on games page
        <Container style={{marginTop: "180px", maxWidth: "1000px", marginBottom: "180px"}}
                   className="text-center justify-content-center">
            <Row>
                <Col style={{textAlign: "left"}} className="px-5">
                    <h1 className="bold-text size-36-text text-fav-gradient">About me</h1>
                    <p className="size-17-text mt-4 body-text-line-height">My name is Thami. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p className="size-17-text mt-4 body-text-line-height">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    <Container style={{maxWidth: "60%"}} className="mx-0 px-0">
                        <Row>
                            <Col><Link to="/portfolio/about"><Button color="primary" variant="outlined"
                                                                     className="pink-secondary-button mt-4">Read more</Button></Link></Col>
                            <Col><Link to="/portfolio/about"><Button color="primary" variant="outlined" icon={<DownloadOutlined />}
                                                                     className="pink-main-button mt-4">Resume</Button></Link></Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Image width={480} height={500} preview={false}
                           src="https://live.staticflickr.com/65535/54175352936_ac05563390_o.png"/>
                </Col>
            </Row>
            <Row className="justify-content-center px-0">
                <Col>
                    <Link to="/portfolio/partyplanner">
                        <Image className="border-radius-20" width={1000}
                               src="https://live.staticflickr.com/65535/54175352936_ac05563390_o.png"/>
                    </Link>
                </Col>
            </Row>
            <Row className="justify-content-center px-0 mt-5rem">
                <Col>
                    <Link to="/portfolio/whiskers">
                        <Image className="border-radius-20" width={1000}
                               src="https://live.staticflickr.com/65535/54174463347_38ee8515c4_o.png"/>
                    </Link>
                </Col>
            </Row>
            <Row className="justify-content-center px-0 mt-5rem">
                <Col>
                    <Link to="/portfolio/cyberbuddy">
                        <Image className="border-radius-20" width={1000}
                               src="https://live.staticflickr.com/65535/54175352951_f12d29ddbf_o.png"/>
                    </Link>
                </Col>
            </Row>
            <Row className="justify-content-center px-0 mt-5rem">
                <Col>
                    <Link to="/portfolio/edumonster">
                        <Image className="border-radius-20" width={462}
                               src="https://live.staticflickr.com/65535/54174481052_9979e86cfa_o.png"/>
                    </Link>
                </Col>
                <Col style={{textAlign: "right"}} className="px-0">
                    <Link to="/portfolio/pakobox">
                        <Image className="border-radius-20" width={462}
                               src="https://live.staticflickr.com/65535/54175370236_6bbbfb579f_o.png"/>
                    </Link>
                </Col>
            </Row>
            <Row className="justify-content-center px-0 mt-5rem">
                <Col>
                    <Link to="/portfolio/imprint">
                        <Image className="border-radius-20" width={300}
                               src="https://live.staticflickr.com/65535/54176174775_552238003e_o.png"/>
                    </Link>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <Link to="/portfolio/overtower">
                        <Image className="border-radius-20" width={300}
                               src="https://live.staticflickr.com/65535/54174463337_f107bf7a8b_o.png"/>
                    </Link>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <Link to="/portfolio/lighthearted">
                        <Image className="border-radius-20" width={300}
                               src="https://live.staticflickr.com/65535/54175626838_c2754c8d93_o.png"/>
                    </Link>
                </Col>
            </Row>

            <Row className="justify-content-center px-0 mt-5rem">
                <Col>
                    <Link to="/portfolio/ts4fashion">
                        <Image className="border-radius-20" width={300}
                               src="https://live.staticflickr.com/65535/54174504667_2b4e4cbe4b_o.png"/>
                    </Link>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <Link to="/portfolio/webglmodel">
                        <Image className="border-radius-20" width={300}
                               src="https://live.staticflickr.com/65535/54175732206_32689be736_o.png"/>
                    </Link>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <Image preview={false} className="border-radius-20" width={300}
                           src="https://live.staticflickr.com/65535/54176031039_c014ecb522_o.png"/>
                </Col>
            </Row>

            {/*<Row className="fullwidth-button-container">*/}
            {/*    <FullProjectTable />*/}
            {/*</Row>*/}
        </Container>
    );
}

export default Home;

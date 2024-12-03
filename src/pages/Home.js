import React from 'react';
import '../assets/works.css';
// import FullProjectTable from "../components/FullProjectTable";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button, Image} from 'antd';
import {DownloadOutlined, SmileFilled} from '@ant-design/icons';
import Works from "../components/Works";

function Home() {
    return (
        // TODO add: CYBER BUDDY & WHISKERS & IMPRINTCORP + add youtube video on games page
        <Container style={{maxWidth: "1000px", marginBottom: "180px"}}
                   className="text-center justify-content-center margin-top-200">
            <Row>
                <Col style={{textAlign: "left"}} className="px-5">
                    <h1 className="bold-text size-36-text text-fav-gradient about-text-fav-gradient">About me</h1>
                    <p className="size-17-text mt-4 body-text-line-height">My name is Thami. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p className="size-17-text mt-4 body-text-line-height">Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    <Container style={{maxWidth: "60%"}} className="mx-0 px-0">
                        <Row>
                            <Col lg={5}><Link to="/portfolio/about" target="_blank" rel="noreferrer noopener"><Button
                                color="primary" variant="outlined" className="pink-secondary-button mt-4">Read
                                more</Button></Link></Col>
                            <Col lg={7}><a
                                href="https://drive.google.com/file/d/1LRhe3Z9bRTyz6o9ma5OcFGotcZ8e4-iy/view?usp=sharing"
                                target="_blank" rel="noreferrer noopener"><Button color="primary" variant="outlined"
                                                                                  icon={<DownloadOutlined/>}
                                                                                  className="pink-main-button mt-4">Download
                                resume</Button></a></Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Image width={480} height={500} preview={false}
                           src="https://live.staticflickr.com/65535/54175352936_ac05563390_o.png"/>
                </Col>
            </Row>

            <Row className="margin-top-200">
                <Col className="px-5">
                    <h1 className="bold-text size-36-text text-fav-gradient skills-text-fav-gradient">Key Skills</h1>
                </Col>
            </Row>
            <Row className="mt-3" style={{maxWidth: "700px", margin: "auto"}}>
                <Col>
                    <Container style={{background: "#F8F8F8", width: "200px", height: "200px", borderRadius: "10%"}}>
                        <Row className="pt-4"><Col><Image preview={false} className="border-radius-20" width="100px"
                                                          height="100px"
                                                          src="https://live.staticflickr.com/65535/54180270449_03a506ea3e_o.png"/></Col></Row>
                        <Row><Col><p className="semibold-text size-17-text pb-0 mb-0 mt-3">Game Design</p></Col></Row>
                        <Row><Col><p className="size-12-text">Elements (Mechanic, etc.)</p></Col></Row>
                    </Container>
                </Col>
                <Col>
                    <Container style={{background: "#F8F8F8", width: "200px", height: "200px", borderRadius: "10%"}}>
                        <Row className="pt-4"><Col><Image preview={false} className="border-radius-20" width="100px"
                                                          height="100px"
                                                          src="https://live.staticflickr.com/65535/54179911961_1b717b5b5a_o.png"/></Col></Row>
                        <Row><Col><p className="semibold-text size-17-text pb-0 mb-0 mt-3">Programming</p></Col></Row>
                        <Row><Col><p className="size-12-text">Unity (C#), Godot, JS</p></Col></Row>
                    </Container>
                </Col>
                <Col>
                    <Container style={{background: "#F8F8F8", width: "200px", height: "200px", borderRadius: "10%"}}>
                        <Row className="pt-4"><Col><Image preview={false} className="border-radius-20" width="100px"
                                                          height="100px"
                                                          src="https://live.staticflickr.com/65535/54179092322_7bf681561c_o.png"/></Col></Row>
                        <Row><Col><p className="semibold-text size-17-text pb-0 mb-0 mt-3">UI/UX Design</p></Col></Row>
                        <Row><Col><p className="size-12-text">Figma, Photoshop</p></Col></Row>
                    </Container>
                </Col>
            </Row>

            <Row className="margin-top-200">
                <Col className="px-5">
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Selected Works</h1>
                </Col>
            </Row>

            <Row style={{marginTop: "50px"}}><Col className="px-0"><Works leftImage={false} workConfig={{
                imageSrc: 'https://live.staticflickr.com/65535/54175352936_ac05563390_o.png',
                title: 'Party Planner',
                year: '2024',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                engine: 'Unity',
                research: true,
                workLink: '/portfolio/partyplanner',
                videoLink: 'https://www.youtube.com/watch?v=BnPsXnNiv-8'
            }}/></Col></Row>

            <Row style={{marginTop: "120px"}}><Col className="px-0"><Works leftImage={true} workConfig={{
                imageSrc: 'https://live.staticflickr.com/65535/54174463347_38ee8515c4_o.png',
                title: 'Whiskers',
                year: '2024',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                engine: 'Unity',
                research: false,
                workLink: '/portfolio/whiskers',
                videoLink: 'https://www.youtube.com/watch?v=mYdnO-KaCT8'
            }}/></Col></Row>

            <Row style={{marginTop: "120px"}}><Col className="px-0"><Works leftImage={false} workConfig={{
                imageSrc: 'https://live.staticflickr.com/65535/54175352951_f12d29ddbf_o.png',
                title: 'Cyber Buddy',
                year: '2022',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                engine: 'Godot',
                research: true,
                workLink: '/portfolio/cyberbuddy',
                videoLink: 'https://www.youtube.com/watch?v=nLoALCyvle8'
            }}/></Col></Row>
            
            <Row style={{marginTop:"100px"}}>
                <Col className="px-0">
                    <Link to="/portfolio/works" target="_blank" rel="noreferrer noopener"><Button
                    color="primary" variant="outlined" className="pink-secondary-button px-0" style={{width:"100%", height:"50px"}}>View more projects</Button></Link>
                </Col>
            </Row>

            <Row className="contact-card bg-fav-gradient">
                <Col className="px-5">
                    <h1 className="bold-text size-40-text">Let’s connect! <SmileFilled /></h1>
                    <h1 className="semibold-text size-20-text mt-4">Drop me a message
                        at <a href="mailto:thamidaulay@gmail.com" className="color-white" target="_blank" rel="noreferrer noopener" title="thamidaulay@gmail.com">thamidaulay@gmail.com</a></h1>
                </Col>
            </Row>


            {/*<Row className="justify-content-center px-0">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/partyplanner">*/}
            {/*            <Image className="border-radius-20" width={1000}*/}
            {/*                   src="https://live.staticflickr.com/65535/54175352936_ac05563390_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="justify-content-center px-0 mt-5rem">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/whiskers">*/}
            {/*            <Image className="border-radius-20" width={1000}*/}
            {/*                   src="https://live.staticflickr.com/65535/54174463347_38ee8515c4_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="justify-content-center px-0 mt-5rem">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/cyberbuddy">*/}
            {/*            <Image className="border-radius-20" width={1000}*/}
            {/*                   src="https://live.staticflickr.com/65535/54175352951_f12d29ddbf_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="justify-content-center px-0 mt-5rem">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/edumonster">*/}
            {/*            <Image className="border-radius-20" width={462}*/}
            {/*                   src="https://live.staticflickr.com/65535/54174481052_9979e86cfa_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col style={{textAlign: "right"}} className="px-0">*/}
            {/*        <Link to="/portfolio/pakobox">*/}
            {/*            <Image className="border-radius-20" width={462}*/}
            {/*                   src="https://live.staticflickr.com/65535/54175370236_6bbbfb579f_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="justify-content-center px-0 mt-5rem">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/imprint">*/}
            {/*            <Image className="border-radius-20" width={300}*/}
            {/*                   src="https://live.staticflickr.com/65535/54176174775_552238003e_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col style={{textAlign: "center"}}>*/}
            {/*        <Link to="/portfolio/overtower">*/}
            {/*            <Image className="border-radius-20" width={300}*/}
            {/*                   src="https://live.staticflickr.com/65535/54174463337_f107bf7a8b_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col style={{textAlign: "right"}}>*/}
            {/*        <Link to="/portfolio/lighthearted">*/}
            {/*            <Image className="border-radius-20" width={300}*/}
            {/*                   src="https://live.staticflickr.com/65535/54175626838_c2754c8d93_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<Row className="justify-content-center px-0 mt-5rem">*/}
            {/*    <Col>*/}
            {/*        <Link to="/portfolio/ts4fashion">*/}
            {/*            <Image className="border-radius-20" width={300}*/}
            {/*                   src="https://live.staticflickr.com/65535/54174504667_2b4e4cbe4b_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col style={{textAlign: "center"}}>*/}
            {/*        <Link to="/portfolio/webglmodel">*/}
            {/*            <Image className="border-radius-20" width={300}*/}
            {/*                   src="https://live.staticflickr.com/65535/54175732206_32689be736_o.png"/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col style={{textAlign: "right"}}>*/}
            {/*        <Image preview={false} className="border-radius-20" width={300}*/}
            {/*               src="https://live.staticflickr.com/65535/54176031039_c014ecb522_o.png"/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<Row className="fullwidth-button-container">*/}
            {/*    <FullProjectTable />*/}
            {/*</Row>*/}
        </Container>
    );
}

export default Home;

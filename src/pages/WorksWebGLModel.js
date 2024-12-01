import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const WebGLModel = () => {
    const { Link } = Anchor;

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#features" title="Features" />
                    <Link className="size-20-text" href="#code" title="Code Examples" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>WEBGL 3D MODELLING AND ANIMATION</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>CODING</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GROUP PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">WebGL2 Programmer (Lighting, Texture, and Camera Configuration)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2022 (+- 2 weeks)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TOOLS</h5>
                <p className="size-20-text">WebGL2 (Javascript), Visual Studio Code</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">FEATURES</h5>
                <p className="size-20-text">Ocean-themed WebGL-based interactive 3D modelling and animations built for Computer Graphics module final project. All interactive setting: Object movement, Display mode (Shading/Wireframe), Camera position and movement, Lighting.</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">ACHIEVEMENT</h5>
                <p className="size-20-text">Highest final project score (96/100) with full score (100/100) on Lighting, Light Movement, Shadow, Texture, and Display Mode components and 85/100 on Camera component</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">REFERENCES</h5>
                <p className="size-20-text">Computer Graphics module study materials, Edward Angel (2020) book source codes, webglfundamentals.org</p>
            </Col>
        </Row>

        <Row id="play-button">
            <Row className="fullwidth-button-container text-center">
                <h5 className="semibold-text size-20-text mb-0 mt-4 orange-color">INTERACT WITH THE OBJECTS ON ITCH.IO:</h5>
                <a href="https://morathami.itch.io/tugas-proyek-cgv" target="_blank" rel="noreferrer noopener">
                    <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg mt-1 mb-5 orange-button" type="button">
                        <span className="semibold-text size-20-text">bit.ly/thami-webgl</span>
                    </button>
                </a>
            </Row>
        </Row>

        <hr/>
        <Row id="features" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">features</h1>
                <Image.PreviewGroup>
                    <Container>
                        <Row className="justify-content-center">
                            <Image id="img-content" width={850} src="https://s4.gifyu.com/images/bandicam-2022-12-08-16-31-33-279.gif" />
                        </Row>
                        <Row className="justify-content-center text-center mt-5">
                            <Col>
                                <Image id="img-content" width={480} src="https://media.giphy.com/media/o9GSRFNc6iSzpt3Jog/giphy.gif" />
                                <h5 className="size-25-text">Texture & Shading Setting</h5>
                                <p className="size-15-text darkgrey-text-color">(done by me)</p>
                            </Col>
                            <Col>
                                <Image id="img-content" width={480} src="https://media.giphy.com/media/p2oBUeOL9Yk1hNnbNt/giphy.gif" />
                                <h5 className="size-25-text">Camera Movement</h5>
                                <p className="size-15-text darkgrey-text-color">(done by me)</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center text-center">
                            <Col>
                                <Image id="img-content" width={480} src="https://media.giphy.com/media/a2R2Sx5tqBp68pxfVP/giphy.gif" />
                                <h5 className="size-25-text">Lighting Setting</h5>
                                <p className="size-15-text darkgrey-text-color">(done by me)</p>
                            </Col>
                            <Col>
                                <Image id="img-content" width={480} src="https://media.giphy.com/media/NxYH78CkXWx5GA4E0a/giphy.gif" />
                                <h5 className="size-25-text">Objects Movement</h5>
                                <p className="size-15-text darkgrey-text-color">(teamwork)</p>
                            </Col>
                        </Row>
                    </Container>
                </Image.PreviewGroup>
            </Col>
        </Row>

        <hr/>
        <Row id="code" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">code examples</h1>
                <Row className="mt-3">
                    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1350px", marginLeft:"auto", marginRight:"auto"}} className="py-4 mt-3 mb-5 border-radius-20 text-center">
                        <Image width={1300} src="https://live.staticflickr.com/65535/52650985907_3a922d2b7d_o.png" />
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
    )
  };
  
  export default WebGLModel;
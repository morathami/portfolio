import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Image, Anchor, Button} from 'antd';
import {Link} from "react-router-dom";

const Lighthearted = () => {
    const {Link} = Anchor;

    return (
        <Container style={{marginTop: "120px", marginBottom: "120px"}}>
            <Row id="works-outline">
                <Col className="bg-lightgrey py-4 px-5">
                    <h1 className="semibold-text darkgrey-text-color">outline</h1>
                    <Anchor affix={false}>
                        <Link className="size-17-text" href="#overview" title="Overview"/>
                        <Link className="size-17-text" href="#images" title="Images"/>
                    </Anchor>
                </Col>
            </Row>

            <Row style={{marginTop: "30px", marginBottom: "30px", width: "888.89px"}}
                 className="text-center justify-content-center mx-auto">
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/WpwwlnihE4Q?si=w8dMQ3JPva7gxhop"
                        title="Lighthearted" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Row>

            <Row id="tags" style={{marginTop: "50px"}}>
                <Col>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>GAME DESIGN</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>CODING</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>SOLO PROJECT</Tag>
                </Col>
            </Row>

            <Row id="overview" style={{marginTop: "30px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">Game Designer and Programmer</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2020 (+- 3 weeks)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Photoshop, Figma, Godot</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">GENRE</h5>
                    <p className="size-17-text">Platformer, Puzzle</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">PC (Windows)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=WpwwlnihE4Q"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=WpwwlnihE4Q</a>
                    </p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">GAMEPLAY</h5>
                    <p className="size-17-text">Join Pink, a hopeful spirit, in a quest to find happiness in the world.
                        Pink
                        has heard some rumors that information about true happiness can be found on the highest ground
                        of
                        HappyTown. But to open the portal, Pink needs to do some happiness task under 3 minutes before
                        the
                        portal gone forever! Features: Matching pictures and nonogram puzzle.</p>
                </Col>
            </Row>

            <Row style={{marginTop: "50px", marginBottom: "100px"}}>
                <Col className="px-0">
                    <a href="https://morathami.itch.io/lighthearted" target="_blank" rel="noreferrer noopener"><Button
                        color="primary" variant="outlined" shape="round"
                        className="pink-main-button px-0"
                        style={{width: "100%", height: "50px"}}>DOWNLOAD GAME ON ITCH.IO</Button></a>
                </Col>
            </Row>

            <hr/>
            <Row id="images" style={{marginTop: "30px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">images</h1>
                    <div className="text-center p-2">
                        <Image.PreviewGroup>
                            <Image id="img-content" width={1000}
                                   src="https://live.staticflickr.com/65535/52548211767_e3ff2ffb28_h.jpg"/>
                            <Image id="img-content" width={500}
                                   src="https://live.staticflickr.com/65535/52548987899_40bed220f8_c.jpg"/>
                            <Image id="img-content" width={500}
                                   src="https://live.staticflickr.com/65535/52548206557_912d71e990_c.jpg"/>
                        </Image.PreviewGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Lighthearted;
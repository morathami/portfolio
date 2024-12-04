import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Image, Anchor, Button} from 'antd';

const Overtower = () => {
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
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/ILNhq7Kk7HI?si=i1WvO-Bi2qq6n2eX"
                        title="Overtower" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Row>

            <Row id="tags" style={{marginTop: "50px"}}>
                <Col>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>GAME DESIGN</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>CODING</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>GROUP PROJECT</Tag>
                </Col>
            </Row>

            <Row id="overview" style={{marginTop: "30px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">UI Designer and Game Programmer</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2020 (+- 4 months)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Photoshop, Figma, Godot</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">GENRE</h5>
                    <p className="size-17-text">Rouge-like, Platformer</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">PC (Windows)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=ILNhq7Kk7HI"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=ILNhq7Kk7HI</a>
                    </p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">GAMEPLAY</h5>
                    <p className="size-17-text">Overtower is a rougelike platformer and endless game where player
                        becomes an
                        adventurer called Negi. Unfortunately, that tower is inhabited by monsters. Fight the monsters
                        that
                        get in your way and try to make your way to the top to become a true adventurer! Features:
                        Power-ups
                        and leaderboard.</p>
                </Col>
            </Row>
            
            <Row style={{marginTop: "50px", marginBottom: "100px"}}>
                <Col className="px-0">
                    <a href="https://zafirr.itch.io/overtower" target="_blank" rel="noreferrer noopener"><Button
                        color="primary" variant="outlined" shape="round"
                        className="pink-main-button px-0"
                        style={{width: "100%", height: "50px"}}>DOWNLOAD GAME ON ITCH.IO</Button></a>
                </Col>
            </Row>

            <hr/>
            <Row id="images" style={{marginTop: "30px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">images</h1>
                    <div className="text-center py-2 px-0">
                        <Image.PreviewGroup>
                            <Container>
                                <Row>
                                    <Col>
                                        <Container>
                                            <Row className="justify-content-end">
                                                <Image id="img-content" width={460}
                                                       src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5OTY3NTEuZ2lm/original/qDEwwP.gif"/>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col>
                                        <Container>
                                            <Row>
                                                <Image id="img-content" width={500}
                                                       src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI5MDcucG5n/original/i4VmYa.png"/>
                                            </Row>
                                            <Row>
                                                <Image id="img-content" width={500}
                                                       src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI4ODcuZ2lm/original/yZfPVf.gif"/>
                                            </Row>
                                            <Row>
                                                <Image id="img-content" width={500}
                                                       src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI4MDkuZ2lm/original/eGHViQ.gif"/>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Image.PreviewGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Overtower;
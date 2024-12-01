import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Image, Anchor} from 'antd';

const Overtower = () => {
    const { Link } = Anchor;

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#images" title="Images" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GAME DESIGN</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>CODING</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GROUP PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">UI Designer and Game Programmer</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2020 (+- 4 months)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TOOLS</h5>
                <p className="size-20-text">Photoshop, Figma, Godot</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GENRE</h5>
                <p className="size-20-text">Rouge-like, Platformer</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">PLATFORM</h5>
                <p className="size-20-text">PC (Windows)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GAMEPLAY</h5>
                <p className="size-20-text">Overtower is a rougelike platformer and endless game where player becomes an adventurer called Negi. Unfortunately, that tower is inhabited by monsters. Fight the monsters that get in your way and try to make your way to the top to become a true adventurer! Features: Power-ups and leaderboard.</p>
            </Col>
        </Row>

        <Row id="play-button">
            <Row className="fullwidth-button-container text-center">
                <h5 className="semibold-text size-20-text mb-0 mt-4 orange-color">DOWNLOAD GAME ON ITCH.IO:</h5>
                <a href="https://zafirr.itch.io/overtower" target="_blank" rel="noreferrer noopener">
                    <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg mt-1 mb-5 orange-button" type="button">
                        <span className="semibold-text size-20-text">bit.ly/thami-overtower</span>
                    </button>
                </a>
            </Row>
        </Row>

        <hr/>
        <Row id="images" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">images</h1>
                <div className="text-center py-2 px-0">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ILNhq7Kk7HI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Image.PreviewGroup>
                        <Container>
                            <Row>
                                <Col>
                                    <Container>
                                        <Row className="justify-content-end">
                                            <Image id="img-content" width={460} src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5OTY3NTEuZ2lm/original/qDEwwP.gif" />
                                        </Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        <Row>
                                            <Image id="img-content" width={500} src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI5MDcucG5n/original/i4VmYa.png" />
                                        </Row>
                                        <Row>
                                            <Image id="img-content" width={500} src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI4ODcuZ2lm/original/yZfPVf.gif" />
                                        </Row>
                                        <Row>
                                            <Image id="img-content" width={500} src="https://img.itch.zone/aW1hZ2UvODM1OTg4LzQ5ODI4MDkuZ2lm/original/eGHViQ.gif" />
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
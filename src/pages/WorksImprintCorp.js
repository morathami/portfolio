import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Image, Anchor} from 'antd';
import ImageImprint1 from "../assets/Images/imprint-image-1.png";
import ImageImprint2 from "../assets/Images/imprint-image-2.png";
import ImageImprint3 from "../assets/Images/imprint-image-3.png";

const ImprintCorp = () => {
    const {Link} = Anchor;

    return (
        <Container style={{marginTop: "120px", marginBottom: "120px"}}>
            <Row id="works-outline">
                <Col className="bg-lightgrey py-4 px-5">
                    <h1 className="semibold-text darkgrey-text-color">Outline</h1>
                    <Anchor affix={false}>
                        <Link className="size-17-text" href="#overview" title="Overview"/>
                        <Link className="size-17-text" href="#gameplay" title="Gameplay"/>
                        <Link className="size-17-text" href="#images" title="Images"/>
                    </Anchor>
                </Col>
            </Row>

            <Row style={{marginTop: "30px", marginBottom: "30px", width: "888.89px"}}
                 className="text-center justify-content-center mx-auto">
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/5tO8TG5GmYg?si=A5m3y-UShMiPYDq_"
                        title="ImprintCorp" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Row>

            <Row id="tags" style={{marginTop: "50px"}}>
                <Col>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>RESEARCH</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>GAME DESIGN</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>CODING</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>SOLO PROJECT</Tag>
                </Col>
            </Row>

            <Row id="overview" style={{marginTop: "30px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">OBJECTIVE</h5>
                    <p className="size-17-text">Research question: How parallel processing contributes to the core
                        mechanics of time-management games and enhance the overall gameplay experience for players</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">Game Designer and Programmer</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2023 (+- 1 month)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Godot, Photoshop, Figma</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">GENRE</h5>
                    <p className="size-17-text">Simulation</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">PC (Windows)</p>

                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=5tO8TG5GmYg"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=5tO8TG5GmYg</a>
                    </p>
                </Col>
            </Row>

            <hr/>
            <Row id="gameplay" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Parallel Processing
                        in Time-Management Games</h1>
                    <p className="size-17-text">Time management games present players with time-pressure challenges and
                        repetitive, straightforward tasks to be completed within specific time constraints. This is why
                        parallel processing is commonly implemented in such games. In titles like Diner Dash (2004),
                        players in the role of restaurant servers can tend to other customers while waiting for a meal
                        to be prepared. Similarly, in Airport Mania: First Flight (2008), players can manage other
                        planes while waiting for one to unload passengers.</p>
                    <p className="size-17-text">Since many of the popular time-management games incorporate parallel
                        processing, it will likely contribute significantly to their core game mechanics. Despite this,
                        little research has been conducted to investigate its effects on players’ gameplay experience.
                        Therefore, this study aims to explore the answers to the research question of how parallel
                        processing contributes to the core mechanics of time-management games, enhancing the overall
                        gameplay experience for players.</p>
                </Col>
            </Row>

            <hr/>
            <Row id="gameplay" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Gameplay</h1>
                    <p className="size-17-text">ImprintCorp, a 2D game that simulates the role of an online shop owner
                        specialising in customisable notebooks, serves as the practice artefact in this research. It
                        highlights the importance of accuracy and efficiency in designing and printing notebook covers
                        based on customers’ orders, aligning with the principles of time-management games.</p>
                    <p className="size-17-text">It is made in two versions: one with a parallel processing mechanic and
                        the other without this feature. The version with parallel processing introduces waiting periods
                        when players print a template and print a customised cover. During these intervals, players can
                        utilise their time by working on cover designs for the following orders or sending printed
                        products to customers. In contrast, without parallel processing, the second version allows
                        players to design notebook covers and immediately fulfil customers’ orders, eliminating any
                        waiting time.</p>
                </Col>
            </Row>

            <hr/>
            <Row id="images" style={{marginTop: "30px"}}>
                <Col><h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Images</h1></Col>
            </Row>
            <Row><Col><h5 className="semibold-text size-17-text mb-0 mt-5 text-center">GAME FLOW</h5>
            </Col></Row>
            <Row className="mt-3"><Col className="m-auto text-center"><Image style={{border: "1px solid black"}} width="1000px" src={ImageImprint1}/></Col></Row>

            <Row><Col><h5 className="semibold-text size-17-text mb-0 mt-5 text-center">USER INTERFACE DESIGN ITERATIONS OF THE ORDER LIST SCENE</h5>
            </Col></Row>
            <Row className="mt-3"><Col className="m-auto text-center"><Image style={{border: "1px solid black"}} width="1000px" src={ImageImprint2}/></Col></Row>

            <Row><Col><h5 className="semibold-text size-17-text mb-0 mt-5 text-center">USER INTERFACE DESIGN ITERATIONS OF THE COVER DESIGN SCENE</h5>
            </Col></Row>
            <Row className="mt-3"><Col className="m-auto text-center"><Image style={{border: "1px solid black"}} width="800px" src={ImageImprint3}/></Col></Row>
        </Container>
    )
};

export default ImprintCorp;
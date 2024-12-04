import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const TemplateWorks = () => {
    // TODO ImprintCorp
    const {Link} = Anchor;

    function backToTopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Container style={{marginTop: "120px", marginBottom: "120px"}}>
            <Row id="works-outline">
                <Col className="bg-lightgrey py-4 px-5">
                    <h1 className="semibold-text darkgrey-text-color">outline</h1>
                    <Anchor affix={false}>
                        <Link className="size-17-text" href="#overview" title="Overview"/>
                        <Link className="size-17-text" href="#design-process" title="Design Process"/>
                        <Link className="size-17-text" href="#emphatise" title="Emphatise"/>
                        <Link className="size-17-text" href="#define" title="Define"/>
                        <Link className="size-17-text" href="#ideate" title="Ideate"/>
                        <Link className="size-17-text" href="#prototype" title="Prototype"/>
                        <Link className="size-17-text" href="#test" title="Test"/>
                        <Link className="size-17-text" href="#reflection" title="Reflection"/>
                    </Anchor>
                </Col>
            </Row>

            <Row style={{marginTop: "30px", marginBottom: "30px", width: "888.89px"}}
                 className="text-center justify-content-center mx-auto">
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/nLoALCyvle8?si=pZBi8gwYW_2X72uu"
                        title="Cyber Buddy" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Row>

            <Row id="tags" style={{marginTop: "50px"}}>
                <Col>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>RESEARCH</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>GAME DESIGN</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>CODING</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>WRITING</Tag>
                    <Tag color="#313131" className="bold-text" style={{letterSpacing: "1px"}}>SOLO PROJECT</Tag>
                </Col>
            </Row>

            <Row id="overview" style={{marginTop: "30px", marginBottom: "30px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">PROBLEM</h5>
                    <p className="size-17-text">Although technology can form many opportunities, it exposes children to
                        many threats, including cyberbullying. For this reason, there is a need to give cyberbullying
                        education from an early age. Using educational games can be a viable approach to creating
                        effective and fun learning because it stimulates curiosity and involves children in solving
                        challenges [1].</p>
                    <p className="size-12-text darkgrey-text-color">[1] T. Hainey, T. M. Connolly, E. A. Boyle, A.
                        Wilson and A. Razak, "A systematic literature review of games-based learning empirical evidence
                        in primary education," Computers & Education, vol. 102, pp. 202-223, 2016.</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-5">OBJECTIVE</h5>
                    <p className="size-17-text">Develop a compelling interactive educational game to prevent
                        cyberbullying among primary school students.</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2022 (+- 5 months)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">Researcher, Game Designer, Programmer</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Godot, Figma, Photoshop</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">Web (HTML5) - Published exclusively during the research period</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">PUBLICATION</h5>
                    <p className="size-17-text">2022 International Conference on Advanced Computer Science and
                        Information Systems (ICACSIS). DOI: <a href="https://doi.org/10.1109/ICACSIS56558.2022.9923480"
                                                               target="_blank"
                                                               rel="noreferrer noopener">10.1109/ICACSIS56558.2022.9923480</a>
                    </p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=nLoALCyvle8"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=nLoALCyvle8</a>
                    </p>
                </Col>
            </Row>

            <hr/>
            <Row id="design-process" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">design process</h1>
                    <div className="mt-4 text-center justify-content-center">
                        <Image width={1223} preview={false}
                               src="https://live.staticflickr.com/65535/52550402376_551a281b95_o.png"/>
                    </div>
                </Col>
            </Row>

            <hr/>
            <Row id="emphatise" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">emphatise</h1>
                    <p className="size-17-text">In order to understand the users and their educational need, I went
                        through two steps of process.</p>
                    <Container style={{maxWidth: "970px", marginTop: "50px"}}>
                        <Row className="justify-content-center text-center">
                            <Col style={{paddingLeft: "30px"}}>
                                <Image width={545} preview={false}
                                       src="https://live.staticflickr.com/65535/52550202032_eee18ce726_o.png"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="text-center semibold-text size-25-text mb-0 orange-color">01</h5>
                                <h5 className="text-center semibold-text size-25-text mb-3">User Interview</h5>
                                <ul>
                                    <li className="size-17-text">With children aged 8-11</li>
                                    <li className="size-17-text">To identify user's characteristic and game
                                        preferences
                                    </li>
                                </ul>
                            </Col>
                            <Col style={{marginLeft: "100px"}} className="px-0">
                                <h5 className="text-center semibold-text size-25-text mb-0 orange-color">02</h5>
                                <h5 className="text-center semibold-text size-25-text mb-3">Expert Interview</h5>
                                <ul>
                                    <li className="size-17-text">With psychologists & the government's educational QA
                                        analyst
                                    </li>
                                    <li className="size-17-text">To understand user's cyberbullying educational need
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <hr/>
            <Row id="define" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="semibold-text orange-color">define</h1>
                    <p className="size-17-text">Based on the findings from the user interview, I found that there are
                        four children's favoured game characteristics.</p>
                    <Container>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "400px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Children's favourite game genre: <span
                                        className="semibold-text">Simulation</span></p></Col></Row>
                                </Container>
                            </Col>
                            <Col style={{maxWidth: "400px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Children love games with clear goals
                                        or <span className="semibold-text">missions</span></p></Col></Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "400px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Children would like to <span
                                        className="semibold-text">customize</span> their game character's appearance</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                            <Col style={{maxWidth: "400px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Children would like to collect <span
                                        className="semibold-text">in-game currency</span> and buy things/powerups</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                    <h5 className="semibold-text size-17-text mb-0 mt-5">FINAL GAME PROTOTYPE</h5>
                    <Container className="px-0">
                        <Row>
                            <Col>
                                <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                    <Row>
                                        <Col className="flex-width-xs">
                                            <div
                                                className="circle-30-size bg-orange text-center semibold-text text-white size-17-text"
                                                style={{paddingTop: "0.2rem"}}>1
                                            </div>
                                        </Col>
                                        <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Orientation
                                            Stage</Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="size-15-text mb-0">The orientation stage is the first stage
                                            players go through after starting the game. This stage aims to enlighten the
                                            player on <span className="semibold-text">how to play the game</span> in
                                            general and let them create their avatar for the first time.</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="mt-5 justify-content-center text-center">
                            <Image.PreviewGroup>
                                <Col><Image width={450}
                                            src="https://s4.gifyu.com/images/Copy-of-CyberBuddy_Orientation1.gif"/></Col>
                                <Col><Image width={450}
                                            src="https://s4.gifyu.com/images/Copy-of-CyberBuddy_Orientation2.gif"/></Col>
                            </Image.PreviewGroup>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                    <Row>
                                        <Col className="flex-width-xs">
                                            <div
                                                className="circle-30-size bg-orange text-center semibold-text text-white size-17-text"
                                                style={{paddingTop: "0.2rem"}}>2
                                            </div>
                                        </Col>
                                        <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Main
                                            Menu Screen</Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="size-15-text mb-0">The whole game <span
                                            className="semibold-text">resembles a tablet PC</span> containing six apps.
                                            It is easier for children to transfer knowledge as the environment is
                                            designed to be similar to the real-world situations they are familiar with.</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="mt-4 justify-content-center">
                            <Image.PreviewGroup>
                                <Col style={{textAlign: "right"}}><Image width={600}
                                                                         src="https://live.staticflickr.com/65535/52554204985_9e668d55cf_o.png"/></Col>
                                <Col>
                                    <p className="semibold-text size-17-text mt-4">Avatar Happiness Meter <Tag
                                        color="#F6AA81" style={{marginLeft: "0.5rem"}}>SOLUTION</Tag></p>
                                    <p className="size-15-text">Represents the current avatar's point gain. If the
                                        player gains a point, the arrow will move to the right, and vice versa. Children
                                        can easily <span
                                            className="semibold-text">understand the game's final goal</span>, where the
                                        player will win when the arrow reaches the far right of the green section.</p>
                                    <div className="text-center"><Image width={444}
                                                                        src="https://live.staticflickr.com/65535/52553276652_9402a50410_o.png"/>
                                    </div>
                                    <p className="size-15-text">The <span
                                        className="semibold-text">avatar's expression</span> will also change based on
                                        the arrow position. It shows that the player's actions will affect the avatar's
                                        emotion, so they would be motivated to collect points and make their avatar
                                        happy.</p>
                                </Col>
                            </Image.PreviewGroup>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                    <Row>
                                        <Col className="flex-width-xs">
                                            <div
                                                className="circle-30-size bg-orange text-center semibold-text text-white size-17-text"
                                                style={{paddingTop: "0.2rem"}}>3
                                            </div>
                                        </Col>
                                        <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Social
                                            Media Simulation Apps <Tag color="#F6AA81"
                                                                       style={{marginLeft: "0.5rem"}}>SOLUTION</Tag></Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="size-15-text mb-0">There are four simulation apps designed:
                                            Fotogram, ChatApp, Tekspedia, and Playbox. Although they have different
                                            variations, these apps have the same mechanical elements: a <span
                                                className="semibold-text">multiple-choice quiz</span> where players must
                                            choose one option.</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="mt-4 justify-content-center">
                            <Container className="px-5">
                                <Image.PreviewGroup>
                                    <Row className="text-center">
                                        <Col><Image width={479}
                                                    src="https://live.staticflickr.com/65535/52554217220_6754de22e2_o.png"/></Col>
                                        <Col><Image width={479}
                                                    src="https://live.staticflickr.com/65535/52554038094_8e9f1d76cd_o.png"/></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={5} className="size-15-text mb-0" style={{marginLeft: "73px"}}>Resembles
                                            a photo-sharing app where children must <span className="semibold-text">choose which comment is most appropriate</span> to
                                            post on their friend's photo.</Col>
                                        <Col xs={5} className="size-15-text mb-0" style={{marginLeft: "110px"}}>Simulate
                                            chat messaging with friends and relatives where children must <span
                                                className="semibold-text">choose the most appropriate reply</span> option
                                            to <br></br>the messages they receive.</Col>
                                    </Row>
                                    <Row className="text-center mt-5">
                                        <Col><Image width={479}
                                                    src="https://live.staticflickr.com/65535/52554217285_43509ffd4b_o.png"/></Col>
                                        <Col><Image width={479}
                                                    src="https://live.staticflickr.com/65535/52554217305_588a7112ea_o.png"/></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={5} className="size-15-text mb-0" style={{marginLeft: "65px"}}>Asking
                                            players <span className="semibold-text">how they would feel</span> if they
                                            received a message from a friend. They should feel negative emotions
                                            (sadness, anger, etc.) when they receive inappropriate messages and vice
                                            versa.</Col>
                                        <Col xs={5} className="size-15-text mb-0" style={{marginLeft: "115px"}}>Children
                                            pretend to play an online multiplayer game and <br></br>must <span
                                                className="semibold-text">choose proper reactions to the game's scenarios</span> (can <br></br>be
                                            winning or losing conditions).</Col>
                                    </Row>
                                </Image.PreviewGroup>
                            </Container>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <hr/>
            <Row style={{marginTop: "50px"}}>
                <button size="large" shape="round"
                        className="ant-btn ant-btn-round ant-btn-default ant-btn-lg orange-button" type="button"
                        onClick={backToTopFunction}>
                    <span className="semibold-text size-17-text">back to top</span>
                </button>
            </Row>
        </Container>
    )
};

export default TemplateWorks;
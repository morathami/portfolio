import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const TemplateWorks = () => {
    const { Link } = Anchor;
    function backToTopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#design-process" title="Design Process" />
                    <Link className="size-20-text" href="#emphatise" title="Emphatise" />
                    <Link className="size-20-text" href="#define" title="Define" />
                    <Link className="size-20-text" href="#ideate" title="Ideate" />
                    <Link className="size-20-text" href="#prototype" title="Prototype" />
                    <Link className="size-20-text" href="#test" title="Test" />
                    <Link className="size-20-text" href="#reflection" title="Reflection" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>RESEARCH</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GAME DESIGN</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>CODING</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>WRITING</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>SOLO PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px", marginBottom:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">PROBLEM</h5>
                <p className="size-20-text">Although technology can form many opportunities, it exposes children to many threats, including cyberbullying. For this reason, there is a need to give cyberbullying education from an early age. Using educational games can be a viable approach to creating effective and fun learning because it stimulates curiosity and involves children in solving challenges [1].</p>
                <p className="size-12-text darkgrey-text-color">[1] T. Hainey, T. M. Connolly, E. A. Boyle, A. Wilson and A. Razak, "A systematic literature review of games-based learning empirical evidence in primary education," Computers & Education, vol. 102, pp. 202-223, 2016.</p>
                <h5 className="semibold-text size-20-text mb-0 mt-5">OBJECTIVE</h5>
                <p className="size-20-text">Develop a compelling interactive educational game to prevent cyberbullying among primary school students.</p>
                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2022 (+- 5 months)</p>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">Researcher, Game Designer, Programmer</p>
                <h5 className="semibold-text size-20-text mb-0 mt-4">TOOLS</h5>
                <p className="size-20-text">Figma, Photoshop, Godot</p>
                <h5 className="semibold-text size-20-text mb-0 mt-4">PUBLICATION</h5>
                <p className="size-20-text">2022 International Conference on Advanced Computer Science and Information Systems (ICACSIS). DOI: <a href="https://doi.org/10.1109/ICACSIS56558.2022.9923480" target="_blank" rel="noreferrer noopener">10.1109/ICACSIS56558.2022.9923480</a></p>
            </Col>
        </Row>

        <Row id="play-button">
            <Row className="fullwidth-button-container text-center">
                <h5 className="semibold-text size-20-text mb-0 mt-4 orange-color">WATCH PLAY DEMO ON YOUTUBE</h5>
                <a href="https://youtu.be/nLoALCyvle8" target="_blank" rel="noreferrer noopener">
                    <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg mt-1 mb-5 orange-button" type="button">
                        <span className="semibold-text size-20-text">bit.ly/CyberBuddyPlayDemo</span>
                    </button>
                </a>
            </Row>
        </Row>

        <hr/>
        <Row id="design-process" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">design process</h1>
                <div className="mt-4 text-center justify-content-center">
                    <Image width={1223} preview={false} src="https://live.staticflickr.com/65535/52550402376_551a281b95_o.png" />
                </div>
            </Col>
        </Row>

        <hr/>
        <Row id="emphatise" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">emphatise</h1>
                <p className="size-20-text">In order to understand the users and their educational need, I went through two steps of process.</p>
                <Container style={{maxWidth:"970px", marginTop:"50px"}}>
                    <Row className="justify-content-center text-center">
                        <Col style={{paddingLeft:"30px"}}>
                            <Image width={545} preview={false} src="https://live.staticflickr.com/65535/52550202032_eee18ce726_o.png" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className="text-center semibold-text size-25-text mb-0 orange-color">01</h5>
                            <h5 className="text-center semibold-text size-25-text mb-3">User Interview</h5>
                            <ul>
                                <li className="size-20-text">With children aged 8-11</li>
                                <li className="size-20-text">To identify user's characteristic and game preferences</li>
                            </ul>
                        </Col>
                        <Col style={{marginLeft:"100px"}} className="px-0">
                            <h5 className="text-center semibold-text size-25-text mb-0 orange-color">02</h5>
                            <h5 className="text-center semibold-text size-25-text mb-3">Expert Interview</h5>
                            <ul>
                                <li className="size-20-text">With psychologists & the government's educational QA analyst</li>
                                <li className="size-20-text">To understand user's cyberbullying educational need</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>

        <hr/>
        <Row id="define" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">define</h1>
                <p className="size-20-text">Based on the findings from the user interview, I found that there are four children's favoured game characteristics.</p>
                <Container>
                    <Row className="my-4 justify-content-center">
                        <Col style={{maxWidth:"400px"}} className="mx-5">
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-20-text mb-0">Children's favourite game genre: <span className="semibold-text">Simulation</span></p></Col></Row>
                            </Container>
                        </Col>
                        <Col style={{maxWidth:"400px"}} className="mx-5">
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-20-text mb-0">Children love games with clear goals or <span className="semibold-text">missions</span></p></Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="my-4 justify-content-center">
                        <Col style={{maxWidth:"400px"}} className="mx-5">
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-20-text mb-0">Children would like to <span className="semibold-text">customize</span> their game character's appearance</p></Col></Row>
                            </Container>
                        </Col>
                        <Col style={{maxWidth:"400px"}} className="mx-5">
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-20-text mb-0">Children would like to collect <span className="semibold-text">in-game currency</span> and buy things/powerups</p></Col></Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <p style={{marginTop:"85px"}} className="size-20-text">Based on the findings from the expert interview, I formulated two learning goals that are appropriate for primary school students.</p>
                <Container>
                    <Row className="my-4 justify-content-center">
                        <Col style={{maxWidth:"660px"}}>
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-15-text orange-color semibold-text">Learning Goal #1</p></Col></Row>
                                <Row><Col><p className="size-20-text semibold-text">Children understand how words can affect feelings</p></Col></Row>
                                <Row><Col><p className="size-15-text mb-0">Children can minimize cyberbullying behaviour if they know how words impact people's feelings and are being careful when sending messages.</p></Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col style={{maxWidth:"660px"}}>
                            <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                <Row><Col><p className="size-15-text orange-color semibold-text">Learning Goal #2</p></Col></Row>
                                <Row><Col><p className="size-20-text semibold-text">Children learn how to protect themselves</p></Col></Row>
                                <Row><Col><p className="size-15-text mb-0">Children can protect themselves from the negative behaviour of others by knowing when to block and report such behaviour.</p></Col></Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <p style={{marginTop:"85px"}} className="size-20-text">Then, I constructed a persona representing the user characteristics. The persona was made so that I will understand and remember that I am not designing a product for myself, but I always need to refer to that persona.</p>
                <Container style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1150px"}} className="px-5 py-5 border-radius-20 my-4">
                    <Row>
                        <Col xs={4} className="justify-content-center text-center">
                            <Image width={318} preview={false} src="https://live.staticflickr.com/65535/52551045979_a09bb17ce2_o.png" />
                        </Col>
                        <Col>
                            <Container className="py-4">
                                <Row><Col><h5 className="semibold-text size-50-text mb-3">Laila</h5></Col></Row>
                                <Row>
                                    <Col xs={5}>
                                        <Container>
                                            <Row>
                                                <Col xs={1} className="px-0"><Image width={15} preview={false} src="https://live.staticflickr.com/65535/52551231350_fea669f52d_o.png" /></Col>
                                                <Col className="size-15-text px-0">10 years old</Col>
                                            </Row>
                                            <Row>
                                                <Col xs={1} className="px-0"><Image width={15} preview={false} src="https://live.staticflickr.com/65535/52550305302_6fc31e818d_o.png" /></Col>
                                                <Col className="size-15-text px-0">Year 5</Col>
                                            </Row>
                                            <Row>
                                                <Col xs={1} className="px-0"><Image width={15} preview={false} src="https://live.staticflickr.com/65535/52550758256_70dc11178e_o.png" /></Col>
                                                <Col className="size-15-text px-0">Jakarta, Indonesia</Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={5} style={{marginLeft:"65px"}}>
                                        <h5 className="semibold-text size-20-text orange-color">Pain Point</h5>
                                        <p className="size-15-text my-0">Bored with the teacher-led conventional learning method</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"35px"}}>
                                    <Col xs={5}>
                                        <h5 className="semibold-text size-20-text orange-color">Internet Uses</h5>
                                        <Container>
                                            <Row>
                                                <Col className="size-15-text px-0" style={{marginRight:"10px"}}>Academic purposes</Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                            </Row>
                                        </Container>
                                        <Container>
                                            <Row>
                                                <Col className="size-15-text px-0" style={{marginRight:"10px"}}>Play video games</Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-darkgrey"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-darkgrey"/></Col>
                                            </Row>
                                        </Container>
                                        <Container>
                                            <Row>
                                                <Col className="size-15-text px-0" style={{marginRight:"10px"}}>Use social media</Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-orange"/></Col>
                                                <Col className="px-0 flex-width-s"><div className="circle-12-size bg-darkgrey"/></Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={5} style={{marginLeft:"65px"}}>
                                        <h5 className="semibold-text size-20-text orange-color">Most Used Social Media</h5>
                                        <Container style={{maxWidth:"200px"}} className="mx-0">
                                            <Row className="justify-content-center text-center">
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52550309882_923e2cf2c6_o.png" /></Col>
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52551058539_83f69b3fd5_o.png" /></Col>
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52550763091_0f71317ecc_o.png" /></Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"15px"}}>
                                    <Col xs={5}>
                                        <Container className="bg-pastel-orange py-3 px-3 border-radius-20">
                                            <Row>
                                                <Col xs={4} style={{paddingRight:0}}>
                                                    <Container>
                                                        <Row xs={4} className="justify-content-end">
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                                <Col className="size-12-text">Daily</Col>
                                            </Row>
                                            <Row>
                                                <Col xs={4} style={{paddingRight:0}}>
                                                    <Container>
                                                        <Row xs={4} className="justify-content-end">
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-darkgrey"/></Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                                <Col className="size-12-text">Several times a week</Col>
                                            </Row>
                                            <Row>
                                                <Col xs={4} style={{paddingRight:0}}>
                                                    <Container>
                                                        <Row xs={4} className="justify-content-end">
                                                            <Col className="px-0"><div className="circle-12-size bg-orange"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-darkgrey"/></Col>
                                                            <Col className="px-0"><div className="circle-12-size bg-darkgrey"/></Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                                <Col className="size-12-text">Once/twice a week</Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={5} style={{marginLeft:"65px"}}>
                                        <h5 className="semibold-text size-20-text orange-color">Most Played Games</h5>
                                        <Container style={{maxWidth:"200px"}} className="mx-0">
                                            <Row className="justify-content-center text-center">
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52551734442_8e6fc1dd29_o.png" /></Col>
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52552736953_c1f73aefdb_o.png" /></Col>
                                                <Col><Image width={34} preview={false} src="https://live.staticflickr.com/65535/52552736968_5c9ee88bac_o.png" /></Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>

        <hr/>
        <Row id="ideate" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">ideate</h1>
                <p className="size-20-text">With the user's requirements defined, I could brainstorm and come up with potential solutions.</p>
                <Container style={{maxWidth:"650px"}} className="my-5">
                    <Row>
                        <Col>
                            <Container className="bg-orange py-3 px-3 border-radius-40 text-white">
                                <Row><Col className="size-20-text mb-0 semibold-text text-center">NEEDS</Col></Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="bg-orange py-3 px-3 border-radius-40 text-white">
                                <Row><Col className="size-20-text mb-0 semibold-text text-center">SOLUTION</Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0">Children's favourite game genre: Simulation</Col></Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0">Social media simulation apps</Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0">Children love games with clear goals or missions</Col></Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0" style={{paddingTop:"0.75rem", paddingBottom:"0.75rem"}}>Avatar happiness meter</Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Container className="px-0">
                                <Row>
                                    <Col>
                                        <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                            <Row><Col className="size-15-text mb-0">Children would like to customize their game character's appearance</Col></Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"1rem"}}>
                                    <Col>
                                        <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                            <Row><Col className="size-15-text mb-0">Children would like to collect in-game currency and buy things/powerups</Col></Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0" style={{paddingTop:"5.75rem", paddingBottom:"5.75rem"}}>Avatar Creator app</Col></Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0" style={{paddingTop:"0.75rem", paddingBottom:"0.75rem"}}>Learning goals</Col></Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="bg-pastel-orange py-4 px-5 border-radius-20">
                                <Row><Col className="size-15-text mb-0">Cyberbullying simulation scenario</Col></Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <p className="size-20-text mt-4"><span className="semibold-text">Cyberbullying simulation scenarios</span> players encounter on social media simulation apps are the essence of cyberbullying educational content in the game.</p>
                <p className="size-20-text mt-4">There are 25 cyberbullying scenarios designed for the whole game. Some scenarios ask how the player feels when reading messages, and some make the player choose between messages to send. In others, players must select an action they take when receiving inappropriate messages.</p>
            </Col>
        </Row>

        <hr/>
        <Row id="prototype" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">prototype</h1>
                
                <h5 className="semibold-text size-20-text mb-0 mt-4">ITERATION</h5>
                <Container>
                    <Row className="text-center justify-content-center">
                        <Image.PreviewGroup>
                            <Col className="flex-width-m px-0"><Image width={299} src="https://live.staticflickr.com/65535/52551834792_6196be204e_o.png" /></Col>
                            <Col className="flex-width-xxs px-2 flex-align-center"><Image width={30} preview={false} src="https://live.staticflickr.com/65535/52551838527_0729cd82b2_o.png" /></Col>
                            <Col className="flex-width-m px-0"><Image width={299} src="https://live.staticflickr.com/65535/52552295321_99745322d3_o.png" /></Col>
                            <Col className="flex-width-xxs px-2 flex-align-center"><Image width={30} preview={false} src="https://live.staticflickr.com/65535/52551838527_0729cd82b2_o.png" /></Col>
                            <Col className="flex-width-m px-0"><Image width={299} src="https://live.staticflickr.com/65535/52552765380_537bb606e0_o.png" /></Col>
                            <Col className="flex-width-xxs px-2 flex-align-center"><Image width={30} preview={false} src="https://live.staticflickr.com/65535/52551838527_0729cd82b2_o.png" /></Col>
                            <Col className="flex-width-m px-0"><Image width={299} src="https://live.staticflickr.com/65535/52552765380_537bb606e0_o.png" /></Col>
                        </Image.PreviewGroup>
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Col className="flex-width-m px-0"><p className="size-15-text mb-0">Low-fidelity Prototype</p></Col>
                        <Col className="flex-width-xxs px-2 flex-align-center"/>
                        <Col className="flex-width-m px-0"><p className="size-15-text mb-0">Medium-fidelity Prototype</p></Col>
                        <Col className="flex-width-xxs px-2 flex-align-center"/>
                        <Col className="flex-width-m px-0"><p className="size-15-text mb-0">High-fidelity Prototype</p></Col>
                        <Col className="flex-width-xxs px-2 flex-align-center"/>
                        <Col className="flex-width-m px-0"><p className="size-15-text mb-0">Final Prototype <br></br>(Fully-programmed & functional)</p></Col>
                    </Row>
                </Container>

                <h5 className="semibold-text size-20-text mb-0 mt-5">FINAL GAME PROTOTYPE</h5>
                <Container className="px-0">
                    <Row>
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>1</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Orientation Stage</Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">The orientation stage is the first stage players go through after starting the game. This stage aims to enlighten the player on <span className="semibold-text">how to play the game</span> in general and let them create their avatar for the first time.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center text-center">
                        <Image.PreviewGroup>
                            <Col><Image width={450} src="https://s4.gifyu.com/images/Copy-of-CyberBuddy_Orientation1.gif" /></Col>
                            <Col><Image width={450} src="https://s4.gifyu.com/images/Copy-of-CyberBuddy_Orientation2.gif" /></Col>
                        </Image.PreviewGroup>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>2</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Main Menu Screen</Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">The whole game <span className="semibold-text">resembles a tablet PC</span> containing six apps. It is easier for children to transfer knowledge as the environment is designed to be similar to the real-world situations they are familiar with.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <Image.PreviewGroup>
                            <Col style={{textAlign:"right"}}><Image width={600} src="https://live.staticflickr.com/65535/52554204985_9e668d55cf_o.png" /></Col>
                            <Col>
                                <p className="semibold-text size-20-text mt-4">Avatar Happiness Meter <Tag color="#F6AA81" style={{marginLeft:"0.5rem"}}>SOLUTION</Tag></p>
                                <p className="size-15-text">Represents the current avatar's point gain. If the player gains a point, the arrow will move to the right, and vice versa. Children can easily <span className="semibold-text">understand the game's final goal</span>, where the player will win when the arrow reaches the far right of the green section.</p>
                                <div className="text-center"><Image width={444} src="https://live.staticflickr.com/65535/52553276652_9402a50410_o.png" /></div>
                                <p className="size-15-text">The <span className="semibold-text">avatar's expression</span> will also change based on the arrow position. It shows that the player's actions will affect the avatar's emotion, so they would be motivated to collect points and make their avatar happy.</p>
                            </Col>
                        </Image.PreviewGroup>
                    </Row>
                    
                    <Row className="mt-5">
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>3</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Social Media Simulation Apps <Tag color="#F6AA81" style={{marginLeft:"0.5rem"}}>SOLUTION</Tag></Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">There are four simulation apps designed: Fotogram, ChatApp, Tekspedia, and Playbox. Although they have different variations, these apps have the same mechanical elements: a <span className="semibold-text">multiple-choice quiz</span> where players must choose one option.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <Container className="px-5">
                            <Image.PreviewGroup>
                                <Row className="text-center">
                                    <Col><Image width={479} src="https://live.staticflickr.com/65535/52554217220_6754de22e2_o.png" /></Col>
                                    <Col><Image width={479} src="https://live.staticflickr.com/65535/52554038094_8e9f1d76cd_o.png" /></Col>
                                </Row>
                                <Row>
                                    <Col xs={5} className="size-15-text mb-0" style={{marginLeft:"73px"}}>Resembles a photo-sharing app where children must <span className="semibold-text">choose which comment is most appropriate</span> to post on their friend's photo.</Col>
                                    <Col xs={5} className="size-15-text mb-0" style={{marginLeft:"110px"}}>Simulate chat messaging with friends and relatives where children must <span className="semibold-text">choose the most appropriate reply</span> option to <br></br>the messages they receive.</Col>
                                </Row>
                                <Row className="text-center mt-5">
                                    <Col><Image width={479} src="https://live.staticflickr.com/65535/52554217285_43509ffd4b_o.png" /></Col>
                                    <Col><Image width={479} src="https://live.staticflickr.com/65535/52554217305_588a7112ea_o.png" /></Col>
                                </Row>
                                <Row>
                                    <Col xs={5} className="size-15-text mb-0" style={{marginLeft:"65px"}}>Asking players <span className="semibold-text">how they would feel</span> if they received a message from a friend. They should feel negative emotions (sadness, anger, etc.) when they receive inappropriate messages and vice versa.</Col>
                                    <Col xs={5} className="size-15-text mb-0" style={{marginLeft:"115px"}}>Children pretend to play an online multiplayer game and <br></br>must <span className="semibold-text">choose proper reactions to the game's scenarios</span> (can <br></br>be winning or losing conditions).</Col>
                                </Row>
                            </Image.PreviewGroup>
                        </Container>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>4</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Direct Feedback System</Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">Experts emphasize the importance of <span className="semibold-text">providing direct feedback on the actions taken</span> in games, such as "good job!" to motivate children to do good things. So after the player chooses an answer, the screen will display a feedback panel consisting of a brief explanation of why the action is appropriate or inappropriate. Example on Playbox app:</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Container className="px-5">
                            <Image.PreviewGroup>
                                <Row className="text-center">
                                    <Col><Image width={268} src="https://live.staticflickr.com/65535/52554300278_7e5d7f28df_o.png" /></Col>
                                    <Col xs={1} className="flex-align-center justify-content-center text-center"><Image width={50} preview={false} src="https://live.staticflickr.com/65535/52553776956_acb3bc2b8b_o.png" /></Col>
                                    <Col><Image width={268} src="https://live.staticflickr.com/65535/52553762726_e0832a9555_o.png" /></Col>
                                    <Col xs={1} className="flex-align-center justify-content-center text-center"><Image width={50} preview={false} src="https://live.staticflickr.com/65535/52553776956_acb3bc2b8b_o.png" /></Col>
                                    <Col><Image width={268} src="https://live.staticflickr.com/65535/52553303362_b859f8826a_o.png" /></Col>
                                    <Col></Col>
                                </Row>
                                <Row className="justify-content-center mt-2">
                                    <Col xs={3} style={{paddingRight:0}}><p className="size-15-text mb-0">Loading scene represents the player <br></br>is playing a multiplayer game with a friend.</p></Col>
                                    <Col xs={1} className="flex-width-xs px-0"/>
                                    <Col xs={3} className="px-0" style={{marginLeft:"30px"}}><p className="size-15-text mb-0">Shows a scenario where the player <br></br>lose to their friend and must choose <br></br>a message to send.</p></Col>
                                    <Col xs={1} className="flex-width-xs px-0"/>
                                    <Col xs={3} className="px-0" style={{marginLeft:"22px"}}><p className="size-15-text mb-0">Shows the message sent and their friend's reply to the player.</p></Col>
                                    <Col></Col>
                                </Row>
                                <Row className="mt-1">
                                    <Col xs={8}></Col>
                                    <Col><Image width={180} preview={false} src="https://live.staticflickr.com/65535/52553337642_c103cd9531_o.png" /></Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col xs={6}></Col>
                                    <Col><Image width={268} src="https://live.staticflickr.com/65535/52554300293_eeca367265_o.png" /></Col>
                                    <Col><Image width={268} src="https://live.staticflickr.com/65535/52554235320_8964473670_o.png" /></Col>
                                    <Col xs={1}></Col>
                                </Row>
                                <Row className="justify-content-center mt-2">
                                    <Col></Col>
                                    <Col xs={3} style={{paddingLeft:"12px", paddingRight:0}}><p className="size-15-text mb-0">Shows an appreciation if the player choose to congratulate their friend.</p></Col>
                                    <Col xs={3} style={{paddingLeft:"10px", paddingRight:0}}><p className="size-15-text mb-0">Shows an encouragement to choose better next time if the player insult <br></br>their friend.</p></Col>
                                </Row>
                            </Image.PreviewGroup>
                        </Container>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>5</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Avatar Creator App <Tag color="#F6AA81" style={{marginLeft:"0.5rem"}}>SOLUTION</Tag></Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">In this app, players can change the avatar's name and appearance. This application refers to the user's preferred game characteristics, which is the <span className="semibold-text">customization feature</span>. The mechanism for collecting points and opening new options represented the currency and shopping activity.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <Container className="px-5">
                            <Image.PreviewGroup>
                                <Row className="text-center">
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52554220919_a7f4c0d127_o.png" /></Col>
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52553469477_5340983330_o.png" /></Col>
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52554466118_9caf4b7cf2_o.png" /></Col>
                                </Row>
                                <Row className="mt-2"><Col className="size-15-text">At the start of the game, some options are still locked and players need to <span className="semibold-text">collect points</span> to unlock these options. The avatar design is stylized to be moderately cartoon-like and cute baby-like to promote positive emotional experiences, such as honesty and innocence, compared to realistically drawn avatars [2].</Col></Row>
                                <Row className="mt-3"><Col className="size-12-text darkgrey-text-color">[2] K. Segaran, A. Z. M. Ali, T. W. Hoe, “Does avatar design in educational games promote a positive emotional experience among learners?,” E-Learning and Digital Media, vol. 18, no. 5, pp. 422–440, 2021.</Col></Row>
                            </Image.PreviewGroup>
                        </Container>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <Container className="bg-pastel-orange mt-4 px-5 py-4">
                                <Row>
                                    <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>6</div></Col>
                                    <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Game Ending Scene</Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="size-15-text mb-0">There are three end-game conditions designed: the player <span className="semibold-text">wins, loses, and chooses to stop playing</span>. The player wins when they successfully collect points until the avatar's happiness level arrow reaches the far right. The player loses if they have not accumulated enough points and have passed the play duration limit. The last condition is when the player presses the "Stop Playing" button on Main Menu.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-center">
                        <Container className="px-5">
                            <Image.PreviewGroup>
                                <Row className="text-center">
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52553479487_40c05cba16_o.png" /></Col>
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52553938586_b1fab1ef43_o.png" /></Col>
                                    <Col xs={4}><Image width={410} src="https://live.staticflickr.com/65535/52554410065_4f348ca688_o.png" /></Col>
                                </Row>
                                <Row>
                                    <Col xs={4} className="size-15-text" style={{paddingLeft:"27px"}}>Congratulate the player if they win and encourage them to implement the knowledge and be a good friend in the real world.</Col>
                                    <Col xs={4} className="size-15-text" style={{paddingLeft:"40px"}}>Encourage the player to play again next time if they lose and cheer them up, saying they still <br></br>can be a good friend in the real world.</Col>
                                    <Col xs={4} className="size-15-text" style={{paddingLeft:"50px"}}>Express appreciation to the player for playing the game if the player chooses to quit.</Col>
                                </Row>
                            </Image.PreviewGroup>
                        </Container>
                    </Row>

                    <h5 className="semibold-text size-20-text mb-0 mt-5">GAME UI KIT</h5>
                    <Container style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1150px"}} className="px-5 py-5 border-radius-20 my-4">
                        <Row><Col className="size-20-text semibold-text">Logo Iteration</Col></Row>
                        <Row><Col className="size-20-text">“Sahabat Siber” = Cyber Buddy in Indonesian</Col></Row>
                        <Image.PreviewGroup>
                            <Row className="text-center my-4">
                                <Container style={{maxWidth:"1000px"}}>
                                    <Row>
                                        <Col><Image width={240} src="https://live.staticflickr.com/65535/52553955841_06d51d2bc5_o.png" /></Col>
                                        <Col xs={1} className="flex-align-center justify-content-center text-center"><Image width={50} preview={false} src="https://live.staticflickr.com/65535/52553776956_acb3bc2b8b_o.png" /></Col>
                                        <Col><Image width={240} src="https://live.staticflickr.com/65535/52553496682_86666c5cc1_o.png" /></Col>
                                        <Col xs={1} className="flex-align-center justify-content-center text-center"><Image width={50} preview={false} src="https://live.staticflickr.com/65535/52553776956_acb3bc2b8b_o.png" /></Col>
                                        <Col><Image width={240} src="https://live.staticflickr.com/65535/52553955866_e96a560c21_o.png" /></Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Image.PreviewGroup>
                        <Row><Col className="size-15-text">The logo is orange-yellow-ish coloured and uses <span className="fredoka-font">Fredoka One</span> font (a bold rounded font) to reflect Cyber Buddy's friendly, energizing, and cheerful personality.</Col></Row>
                    </Container>
                    <Container style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1150px"}} className="px-5 py-5 border-radius-20 my-5">
                        <Row>
                            <Col className="size-20-text semibold-text">Typography</Col>
                            <Col className="size-20-text semibold-text">Main Color Palette</Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Container className="px-0">
                                    <Row><Col><h2 className="poppins-font mb-0 bold-text" style={{fontSize: "30px"}}>Header, App Name</h2></Col></Row>
                                    <Row><Col><p className="mb-0 darkgrey-text-color">Poppins Bold 33pt</p></Col></Row>
                                    <Row className="mt-4"><Col><h5 className="poppins-font mb-0 semibold-text" style={{fontSize: "18px"}}>Subheader, Main Menu Buttons</h5></Col></Row>
                                    <Row><Col><p className="mb-0 darkgrey-text-color">Poppins Semibold 18pt</p></Col></Row>
                                    <Row className="mt-4"><Col><p className="poppins-font mb-0">Body</p></Col></Row>
                                    <Row><Col><p className="mb-0 darkgrey-text-color">Poppins Regular 15pt</p></Col></Row>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="px-0">
                                    <Row>
                                        <Col>
                                            <Container className="px-0">
                                                <Row>
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#F8EA69"}}/></Col>
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#57C3DB"}}/></Col>
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#E7F7FF"}}/></Col>
                                                </Row>
                                                <Row>
                                                    <Col className="size-12-text darkgrey-text-color">#F8EA69</Col>
                                                    <Col className="size-12-text darkgrey-text-color">#57C3DB</Col>
                                                    <Col className="size-12-text darkgrey-text-color">#E7F7FF</Col>
                                                </Row>
                                                <Row className="mt-4">
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#4DBD66"}}/></Col>
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#EA6481"}}/></Col>
                                                    <Col><div className="color-palette-square" style={{backgroundColor:"#996ACC"}}/></Col>
                                                </Row>
                                                <Row>
                                                    <Col className="size-12-text darkgrey-text-color">#4DBD66</Col>
                                                    <Col className="size-12-text darkgrey-text-color">#EA6481</Col>
                                                    <Col className="size-12-text darkgrey-text-color">#996ACC</Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col className="size-15-text">The “Poppins” font and the colorful color palette are used in the whole game to reflect Cyber Buddy's friendly, inviting, and lively personality.</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>


                </Container>
            </Col>
        </Row>

        <hr/>
        <Row id="test" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">test</h1>
                <p className="size-20-text">The evaluation was conducted by playtesting and interviewing sixteen 11-12 years old children. Here are the insights:</p>
                <Container style={{maxWidth:"1050px"}}>
                    <Row>
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">01</Col>
                        <Col className="size-20-text">Most participants liked to play the game, quickly understood how to play the game, and easily understood the learning content delivered.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">02</Col>
                        <Col className="size-20-text">Half of the participants also felt that the scenarios were relevant to experiences encountered in the real world.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">03</Col>
                        <Col className="size-20-text">All participants successfully completed the game and 75% of them were interested in playing again in the future.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">04</Col>
                        <Col className="size-20-text">Regarding learning goals, all participants could elaborate on positive ways of interacting through the internet. However, they had difficulties responding appropriately to negative behaviour and content encountered (most still answered the act of being silent rather than reporting or discussing with their parents).</Col>
                    </Row>
                </Container>
            </Col>
        </Row>

        <hr/>
        <Row id="reflection" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">reflection</h1>

                <p className="size-20-text semibold-text mt-3">Takeaways</p>
                <Container style={{maxWidth:"1050px"}}>
                    <Row>
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">01</Col>
                        <Col className="size-20-text">I should have considered personalised learning, such as children's learning styles, so that games can provide a more effective learning process for various types of children's learning styles.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">02</Col>
                        <Col className="size-20-text">I should have conducted validation for educational content in the game from educators, not just from psychologists.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">03</Col>
                        <Col className="size-20-text">I should have tried to implement games using game engines other than Godot or waited for future developments of Godot, so that there are no more problems/limitations for mobile gamers.</Col>
                    </Row>
                </Container>

                <p className="size-20-text semibold-text mt-5">Next Steps</p>
                <Container style={{maxWidth:"1050px"}}>
                    <Row>
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">01</Col>
                        <Col className="size-20-text">Add more variety of choices to the Avatar Creator app.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">02</Col>
                        <Col className="size-20-text">Implement the Playbox app to contain playable mini-games, such as platformers or shooting games.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">03</Col>
                        <Col className="size-20-text">Evaluate the game's usability using quantitative methods and involving larger samples to uncover usability issues that need to be addressed for future development.</Col>
                    </Row>
                </Container>
            </Col>
        </Row>

        <hr/>
        <Row style={{marginTop:"50px"}}>
            <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg orange-button" type="button" onClick={backToTopFunction}>
                <span className="semibold-text size-20-text">back to top</span>
            </button>
        </Row>
    </Container>
    )
  };
  
  export default TemplateWorks;
import React from 'react';
import '../assets/about.css';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {Image, Tooltip} from 'antd';

const About = () => {
    return (
        <Container style={{marginTop: "120px", marginBottom: "120px"}}>
            <Row>
                <Col id="about-story">
                    <p>Hi, there! My name is Thami 👋🏻</p>
                    <p>My interest in <b>Game Design</b> started when I was just a child, sketching my own “game” and
                        performing “user testing” using Barbie dolls. Then, the first time I really got into video games
                        was in middle
                        school, playing the Dash games series (I believe in Dinner Dash 2 supremacy!!). After that, I
                        somehow
                        mastered every strategy slash simulation game💻</p>
                    <p>The most influential game in my life is The Sims 3. I was not only playing but also started my
                        own
                        Tumblr blog, joined many The Sims gamer (“Simmer”) communities, and interacted with them. I
                        explored
                        my creative side by learning <b>Adobe Photoshop and 3D modelling tools</b> like Blender
                        to <b><Link to="/ts4fashion">design
                            clothing</Link></b> for the game and created a<b><a href="https://issuu.com/morathami"
                                                                                rel="noreferrer noopener"
                                                                                target="_blank"> digital magazine. </a></b>
                        I even made a movie (“machinima”) out of the game! Well, I got too embarrassed later in high
                        school
                        and hid the video from my YouTube channel😂</p>
                    <p>Wanting to deepen my skills, I enrolled as a <b>computer science major</b> at university.
                        Thankfully, I
                        was accepted into one of Indonesia’s best public universities (if not the best!) for technology.
                        Unfortunately, game development as an academic subject is not popular in Indonesia, including at
                        my
                        university. There is only one course related to that, and the research labs are more focused on
                        software engineering and data science. This led me to pursue a <b>Master of Art in Digital
                            Media: Production</b> at the
                        world-leading centre of digital media education in the vibrant city of London. It marked a
                        turning
                        point in my journey, opening doors to international opportunities.</p>
                    <p>Needless to say, I’m always excited to collaborate or connect with like-minded individuals from
                        anywhere in the world,
                        so feel free to reach out!</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* TODO add link resume to google drive */}
                    <button size="large" shape="round"
                            className="ant-btn ant-btn-round ant-btn-default ant-btn-lg my-5 orange-button"
                            type="button">
                        <span className="semibold-text size-20-text">Download resume as PDF</span>
                    </button>
                </Col>
            </Row>
            <Row style={{marginTop: "50px"}}>
                <Col>
                    <Container className="px-0">
                        <Row>
                            <Col className="about-lst">
                                <h1>education</h1>
                                <h2>MA in Digital Media: Production</h2>
                                <p>University College London (UCL)</p>
                                <p>2023 - 2024</p>

                                <h2 style={{marginTop: "30px"}}>Bachelor of Computer Science (BCompSc)</h2>
                                <p>University of Indonesia</p>
                                <p>2018 - 2022</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "90px"}}>
                            <Col className="about-lst">
                                <h1>work experience</h1>
                                <h2>Teaching Assistant Coordinator</h2>
                                <p>University of Indonesia</p>
                                <p>Aug 2022 - Feb 2023</p>

                                <h2 style={{marginTop: "30px"}}>Frontend Engineer Intern</h2>
                                <p>Core Initiative Studio, ID</p>
                                <p>Jul 2021 - Nov 2021</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col className="about-lst">
                                <h1>skills</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="about-lst">
                                <h2>Programming</h2>
                                <p>Unity (C#)</p>
                                <p>Godot (GDScript)</p>
                                <p>JavaScript (React & Vue.js)</p>
                                <p>Python, Java</p>
                            </Col>
                            <Col className="about-lst">
                                <h2>Design</h2>
                                <p>Game Design</p>
                                <p>Web Design</p>
                                <p>UI/UX Design</p>
                                <p>Wireframing</p>
                                <p>Prototyping</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row style={{marginTop: "90px"}}>
                            <Col className="about-lst">
                                <h1>tools</h1>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="about-lst">
                                <Tooltip placement="bottom" title="Unity"><Image preview={false}
                                                                                 className="border-radius-20" width={80}
                                                                                 height={80}
                                                                                 src="https://live.staticflickr.com/65535/54175549771_07e0feed0e_o.png"/></Tooltip>
                            </Col>
                            <Col className="about-lst">
                                <Tooltip placement="bottom" title="Godot"><Image preview={false}
                                                                                 className="border-radius-20" width={80}
                                                                                 height={80}
                                                                                 src="https://live.staticflickr.com/65535/54175847634_1972a65f56_o.png"/></Tooltip>
                            </Col>
                            <Col className="about-lst">
                                <Tooltip placement="bottom" title="Photoshop"><Image preview={false}
                                                                                     className="border-radius-20"
                                                                                     width={80} height={80}
                                                                                     src="https://live.staticflickr.com/65535/54174665937_1cf7c918c6_o.png"/></Tooltip>
                            </Col>
                            <Col className="about-lst">
                                <Tooltip placement="bottom" title="Figma"><Image preview={false}
                                                                                 className="border-radius-20" width={80}
                                                                                 height={80}
                                                                                 src="https://live.staticflickr.com/65535/54175983065_454be069ab_o.png"/></Tooltip>
                            </Col>
                            <Col className="about-lst">
                                <Tooltip placement="bottom" title="GitHub"><Image preview={false}
                                                                                  className="border-radius-20"
                                                                                  width={80} height={80}
                                                                                  src="https://live.staticflickr.com/65535/54175991925_52f7df054c_o.png"/></Tooltip>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
};

export default About;
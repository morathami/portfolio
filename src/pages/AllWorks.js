import React from 'react';
import '../assets/works.css';
import {Container, Row, Col} from 'react-bootstrap';
import Works from "../components/Works";
import WorksSquare from "../components/WorksSquare";
import EdumonsterImage from "../assets/Images/image-edumonster.png";
import PakoboxImage from "../assets/Images/image-pakobox.png";
import TS4Image from "../assets/Images/image-ts4fashion.png";

function AllWorks() {
    // TODO add ImprintCorp
    return (
        <Container style={{maxWidth: "1000px", marginBottom: "180px"}} className="text-center justify-content-center mt-5">
            <Row>
                <Col className="px-5">
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Major Projects</h1>
                </Col>
            </Row>

            <Row style={{marginTop: "50px"}}><Col className="px-0"><Works leftImage={false} workConfig={{
                title: 'Party Planner',
                year: '2024',
                desc: '2D top-down collaborative storytelling game for two players. Key Features: Allow players to shape the storyline through their actions and choices rather than following a fixed narrative, while encouraging collaboration to complete the challenges together.',
                engine: 'Unity',
                research: true,
                workLink: '/portfolio/partyplanner',
                videoLink: 'https://www.youtube.com/embed/BnPsXnNiv-8?si=ytJCIzw91xQ_nD_D'
            }}/></Col></Row>

            <Row style={{marginTop: "120px"}}><Col className="px-0"><Works leftImage={true} workConfig={{
                title: 'Whiskers',
                year: '2024',
                desc: '3D first-person cat simulation exploration game that thoughtfully explores and reflects real-life cats’ care and behaviour. Key Features: Discover and consume edible foods while avoiding toxic ones, find hidden items, and unlock achievements.',
                engine: 'Unity',
                research: false,
                workLink: '/portfolio/whiskers',
                videoLink: 'https://www.youtube.com/embed/mYdnO-KaCT8?si=NURIFh0kQZhUvsaS'
            }}/></Col></Row>

            <Row style={{marginTop: "120px"}}><Col className="px-0"><Works leftImage={false} workConfig={{
                title: 'Cyber Buddy',
                year: '2022',
                desc: 'Educational game to prevent cyberbullying among primary school students. Key Features: Social Media Simulation Apps where players choose the most appropriate response and reflect on how they would feel receiving certain messages, Avatar Customisation',
                engine: 'Godot',
                research: true,
                workLink: '/portfolio/cyberbuddy',
                videoLink: 'https://www.youtube.com/embed/nLoALCyvle8?si=pZBi8gwYW_2X72uu'
            }}/></Col></Row>

            <Row className="margin-top-200">
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Game Design & Programming Projects</h1>
                </Col>
            </Row>

            <Row style={{marginTop: "50px"}}>
                <Col className="px-0"><WorksSquare workConfig={{
                title: 'ImprintCorp',
                year: '2023',
                desc: 'Players simulate the role of an online shop owner specialising in customisable notebooks',
                engine: 'Godot',
                workLink: '/portfolio/imprintcorp',
                    hasVideo: true,
                sourceLink: 'https://www.youtube.com/embed/5tO8TG5GmYg?si=A5m3y-UShMiPYDq_'
                }}/></Col>
                <Col className="px-0"><WorksSquare workConfig={{
                    title: 'Overtower',
                    year: '2020',
                    desc: '(Group project) Roguelike platformer where players need to make their way to the top',
                    engine: 'Godot',
                    workLink: '/portfolio/overtower',
                    hasVideo: true,
                    sourceLink: 'https://www.youtube.com/embed/ILNhq7Kk7HI?si=i1WvO-Bi2qq6n2eX'
                }}/></Col>
                <Col className="px-0"><WorksSquare workConfig={{
                    title: 'Lighthearted',
                    year: '2020',
                    desc: 'Happiness-themed puzzle-platformer game (Matching pictures and nonogram puzzle)',
                    engine: 'Godot',
                    workLink: '/portfolio/lighthearted',
                    hasVideo: true,
                    sourceLink: 'https://www.youtube.com/embed/WpwwlnihE4Q?si=w8dMQ3JPva7gxhop'
                }}/></Col>
            </Row>

            <Row className="margin-top-200">
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Game Design Projects</h1>
                </Col>
            </Row>
            <Row style={{marginTop: "50px"}}>
                <Col className="px-0"><WorksSquare workConfig={{
                    title: 'Edumonster',
                    year: '2022',
                    desc: 'Monster-themed teaching simulation game',
                    engine: 'Design Concept',
                    workLink: '/portfolio/edumonster',
                    hasVideo: false,
                    sourceLink: EdumonsterImage
                }}/></Col>
                <Col className="px-0"><WorksSquare workConfig={{
                    title: 'Pakobox VR',
                    year: '2022',
                    desc: 'Wholesome packaging VR game',
                    engine: 'Design Concept',
                    workLink: '/portfolio/pakobox',
                    hasVideo: false,
                    sourceLink: PakoboxImage
                }}/></Col>
            </Row>

            <Row className="margin-top-200">
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient works-text-fav-gradient">Other Projects</h1>
                </Col>
            </Row>
            <Row style={{marginTop: "50px"}}>
                <Col className="px-0"><WorksSquare workConfig={{
                    title: 'The Sims 4 3D Fashion',
                    year: '2018',
                    desc: 'Made with Blender for The Sims 4 in-game clothing (3D Modelling & Game Fashion Design)',
                    engine: '3D Modelling',
                    workLink: '/portfolio/ts4fashion',
                    hasVideo: false,
                    sourceLink: TS4Image
                }}/></Col>
            </Row>
        </Container>
    );
}

export default AllWorks;

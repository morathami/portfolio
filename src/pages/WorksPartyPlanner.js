import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';
import ImageNarrative from "../assets/Images/partyplanner-narrative.png";
import ImageGameFlow from "../assets/Images/partyplanner-flow.png";
import ImageAllNPC from "../assets/Images/partyplanner-npc.png";
import ImageAvatar1 from "../assets/Images/partyplanner-avatar-1.png";
import ImageAvatar2 from "../assets/Images/partyplanner-avatar-2.png";
import ImageAvatar3 from "../assets/Images/partyplanner-avatar-3.png";
import ImageDesignReward1 from "../assets/Images/partyplanner-designreward-1.png";
import ImageDesignReward2 from "../assets/Images/partyplanner-designreward-2.png";
import ImageDesignReward3 from "../assets/Images/partyplanner-designreward-3.png";
import ImageEnding1 from "../assets/Images/partyplanner-ending-1.png";
import ImageEnding2 from "../assets/Images/partyplanner-ending-2.png";
import ImageEnding3 from "../assets/Images/partyplanner-ending-3.png";
import ImageNPC1 from "../assets/Images/partyplanner-npc-1.png";
import ImageNPC2 from "../assets/Images/partyplanner-npc-2.png";
import ImageNPC3 from "../assets/Images/partyplanner-npc-3.png";
import ImageNPC4 from "../assets/Images/partyplanner-npc-4.png";
import ImageTask11 from "../assets/Images/partyplanner-task1-1.png";
import ImageTask12 from "../assets/Images/partyplanner-task1-2.png";
import ImageTask13 from "../assets/Images/partyplanner-task1-3.png";
import ImageTask21 from "../assets/Images/partyplanner-task2-1.png";
import ImageTask22 from "../assets/Images/partyplanner-task2-2.png";
import ImageTask23 from "../assets/Images/partyplanner-task2-3.png";
import ImageDev1 from "../assets/Images/partyplanner-dev-1.png";
import ImageDev2 from "../assets/Images/partyplanner-dev-2.png";
import ImageDev3 from "../assets/Images/partyplanner-dev-3.png";
import ImageDev4 from "../assets/Images/partyplanner-dev-4.png";
import ImageDev5 from "../assets/Images/partyplanner-dev-5.png";
import ImageDev6 from "../assets/Images/partyplanner-dev-6.png";
import ImageDev7 from "../assets/Images/partyplanner-dev-7.png";
import ImageDev8 from "../assets/Images/partyplanner-dev-8.png";
import ImageDev9 from "../assets/Images/partyplanner-dev-9.png";


const TemplateWorks = () => {
    const {Link} = Anchor;

    function backToTopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Container style={{marginTop: "120px", marginBottom: "120px"}}>
            <Row id="works-outline">
                <Col className="bg-lightgrey py-4 px-5">
                    <h1 className="semibold-text darkgrey-text-color">Outline</h1>
                    <Anchor affix={false}>
                        <Link className="size-17-text" href="#overview" title="Overview"/>
                        <Link className="size-17-text" href="#elements" title="Core Elements"/>
                        <Link className="size-17-text" href="#narrative" title="Game Narrative"/>
                        <Link className="size-17-text" href="#mechanic" title="Game Mechanic"/>
                        <Link className="size-17-text" href="#ending" title="Game Ending"/>
                    </Anchor>
                </Col>
            </Row>

            <Row style={{marginTop: "30px", marginBottom: "30px", width: "888.89px"}}
                 className="text-center justify-content-center mx-auto">
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/BnPsXnNiv-8?si=ytJCIzw91xQ_nD_D"
                        title="Party Planner" frameBorder="0"
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
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">OBJECTIVE</h5>
                    <p className="size-17-text">Examine the framework to develop collaborative storytelling games by
                        integrating theoretical methods (literature review, case study, and critical analysis) with
                        practical methods (designing game elements, coding, and reflective practice)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2024 (+- 7 months)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">Researcher, Game Designer, Programmer</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Unity, Microsoft Visual Studio, Figma, Adobe Photoshop</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">RESOURCES</h5>
                    <p className="size-17-text">Flaticon (Premium), Outsourced Artist</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">GENRE</h5>
                    <p className="size-17-text">2-Player Collaborative, Interactive Storytelling, Puzzle</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">PC (Windows)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=BnPsXnNiv-8"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=BnPsXnNiv-8</a>
                    </p>
                </Col>
            </Row>

            <hr/>
            <Row id="gameplay" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Gameplay</h1>
                    <p className="size-17-text">Party Planner is a <span className="semibold-text">2D top-down collaborative storytelling game
                        for two players using split screen</span>. The narrative centres around the town’s mayor
                        seeking help to organise a birthday party for his daughter, who is a best friend of the players.
                        To make the party successful, players must explore the town, talk with the town residents,
                        prepare meals, decorate the venue, invite guests, and more. As a collaborative storytelling
                        game, the game provides a broad objective, which allows players to <span
                            className="semibold-text">shape the storyline
                            through their actions and choices</span> rather than following a fixed narrative
                        and <span className="semibold-text">requires collaboration</span> to fulfil the goal.</p>
                </Col>
            </Row>

            <hr/>
            <Row id="elements" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient skills-text-fav-gradient">Core Elements of
                        Collaborative Storytelling Games</h1>
                    <p className="size-17-text">Effective collaborative storytelling games require more than just
                        featuring storytelling in a collaborative setting; instead, they must seamlessly integrate
                        elements from both storytelling and collaboration. This research proposes collaborative
                        storytelling games involve these elements:</p>
                    <Container>
                        <Row className="my-4 justify-content-center">
                            <Col className="mx-5">
                                <Container className="bg-orange text-white py-3 px-5 border-radius-30 text-center">
                                    <Row><Col><p className="semibold-text size-17-text mb-0">Interactive
                                        Storytelling</p></Col></Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Players can set their own goals</p></Col></Row>
                                </Container>
                            </Col>
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Players identify with their
                                        characters</p></Col></Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Players actively participate in the
                                        narrative (give players a sense of control over the story)</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">The game encourages creativity by
                                        offering choices without right or wrong answers</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                        </Row>

                        <Row className="my-4 justify-content-center">
                            <Col className="mx-5">
                                <Container className="bg-orange text-white py-3 px-5 border-radius-30 text-center">
                                    <Row><Col><p className="semibold-text size-17-text mb-0">Collaborative Games</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Players work towards a shared goal and
                                        have mutual awareness of each other's roles</p></Col></Row>
                                </Container>
                            </Col>
                            <Col style={{maxWidth: "500px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">Interdependent (players need each other
                                        to succeed)</p></Col></Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="my-4 justify-content-center">
                            <Col style={{maxWidth: "1080px"}} className="mx-5">
                                <Container className="bg-pastel-orange py-5 px-5 border-radius-30">
                                    <Row><Col><p className="size-17-text mb-0">While promoting teamwork, the game should
                                        allow individuals to make decisions and act independently to provide engagement
                                        and accountability</p>
                                    </Col></Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                </Col>
            </Row>

            <hr/>
            <Row id="narrative" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient left-text-fav-gradient">Game
                        Narrative</h1>
                    <p className="size-17-text mt-4">As a collaborative storytelling game, Party Planner utilises an
                        open
                        narrative structure that allows players to choose their paths and assemble the story however
                        they want. However, a game designer should <span className="semibold-text">balance player agency with maintaining a
                            cohesive experience</span>. Therefore, the narrative establishes the game's main objective
                        of organizing a birthday party, which serves as the shared goal and guides players on what
                        actions they can take.</p>
                    <p className="size-17-text"> In a birthday party scenario, players typically expect tasks like
                        arranging a cake, decorating the venue, setting up music, giving gifts, and catering food. While
                        players enjoy seeing their expectations fulfilled, they also love being surprised, as surprises
                        can make the story more interesting. Therefore, to add an element of surprise, Party
                        Planner <span
                            className="semibold-text">includes options for players to sabotage the party</span> or play
                        pranks
                        instead of just planning everything correctly. It follows that <span className="semibold-text">the shared goal between
                            players can be either good or mischievous as long as all players work together.</span></p>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center" style={{marginBottom: "50px"}}>
                <Col className="m-auto"><Image height={400} src={ImageNarrative}/></Col>
                <Col className="m-auto text-center">
                    <p className="semibold-text size-17-text mb-3">GAME FLOW</p>
                    <Image width={600} src={ImageGameFlow}/>
                </Col>
            </Row>

            <hr/>
            <Row id="mechanic" style={{marginTop: "50px", marginBottom: "10px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient left-text-fav-gradient">Game Mechanic</h1>
                </Col>
            </Row>
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
                            <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Interacting
                                with NPCs</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="size-15-text mb-0">Players can interact with five NPCs, each linked to a
                                specific plot point. NPCs are essential for driving interactivity as they offer
                                tasks for players to complete, can be invited to the party, and provide the
                                information needed to succeed.</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="mt-5"><Col className="m-auto text-center"><Image height="350px"
                                                                             src={ImageAllNPC}/></Col></Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col className="mb-5"><Image width={500} src={ImageNPC1}/></Col>
                    <Col className="mb-5"><Image width={500} src={ImageNPC2}/></Col>
                    <Col><Image width={500} src={ImageNPC3}/></Col>
                    <Col><Image width={500} src={ImageNPC4}/></Col>
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
                            <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Collaborative
                                Tasks</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="size-15-text mb-0">
                                <p>There are two types of tasks that players can complete.</p>
                                <p><span className="semibold-text">The first type requires both players to engage in
                                the same activity and coordinate their actions to
                                win.</span> In the customary task, players interpret
                                    prompts to find 4-5 items and must discuss about
                                    which items appear on each screen. The sabotage
                                    path involves deductive reasoning based on visual
                                    cues from NPCs, who react differently to various
                                    answers. Since NPC reactions depend on answers from both players, they must
                                    collaborate
                                    to identify the correct option.</p>
                                <p><span className="semibold-text">The second type assigns different minigames to
                                each player, requiring them to reach the goal
                                    based on their individual expertise.</span> In the
                                    customary path, one player identifies details from
                                    images to relay to the other, emphasising
                                    communication. In the sabotage task, one player
                                    engages in a card-matching game while the other
                                    selects images based on descriptions. Correct
                                    answers unlock new cards, highlighting positive interdependence, where players must
                                    rely
                                    on each other to succeed.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row><Col><h5 className="semibold-text size-17-text mb-0 mt-5 text-center">COLLABORATIVE TASK TYPE 1</h5>
            </Col></Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageTask11}/></Col>
                    <Col><Image width={400} src={ImageTask12}/></Col>
                    <Col><Image width={400} src={ImageTask13}/></Col>
                </Image.PreviewGroup>
            </Row>
            <Row><Col><h5 className="semibold-text size-17-text mb-0 mt-5 text-center">COLLABORATIVE TASK TYPE 2</h5>
            </Col></Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageTask21}/></Col>
                    <Col><Image width={400} src={ImageTask22}/></Col>
                    <Col><Image width={400} src={ImageTask23}/></Col>
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
                            <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Design
                                Reward System</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="size-15-text mb-0">
                                <p>After completing a task, players can <span className="semibold-text">customise party props </span>
                                    like banners and balloons. These items and colours appear in the game's ending
                                    story,
                                    reinforcing the idea of choices without right or wrong answers and showing their
                                    impact on the narrative. Moreover, players can add and customise items whether they
                                    succeed, fail, or sabotage tasks. For example, failing to convince a musician allows
                                    players to add stereos, while success unlocks an additional option to design the
                                    musician's guitar.</p>
                                <p>Rewards are anonymised to avoid pushing players toward a particular path for more
                                    rewards, ensuring <span
                                        className="semibold-text">all choices are valuable.</span> This
                                    approach emphasises that all paths are valuable and rewarded, whether players choose
                                    to plan the party correctly or sabotage it. The key is to create a system that
                                    encourages teamwork and that players feel their efforts are appreciated regardless
                                    of their path while providing additional rewards for those who put in extra effort.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageDesignReward2}/></Col>
                    <Col><Image width={400} src={ImageDesignReward1}/></Col>
                    <Col><Image width={400} src={ImageDesignReward3}/></Col>
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
                            <Col className="semibold-text size-17-text px-0" style={{paddingTop: "0.2rem"}}>Character
                                Editor</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="size-15-text mb-0">
                                <p>Players can customise their character’s name and appearance before and during the
                                    game. This feature enables players' identification with their characters.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center text-center" style={{marginBottom: "50px"}}>
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageAvatar1}/></Col>
                    <Col><Image width={400} height="100%" src={ImageAvatar2}/></Col>
                    <Col><Image width={400} src={ImageAvatar3}/></Col>
                </Image.PreviewGroup>
            </Row>

            <hr/>
            <Row id="ending" style={{marginTop: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient left-text-fav-gradient">Game Ending</h1>
                    <p className="size-17-text mt-4">
                        <span className="semibold-text">The ending narrates the story players have built </span>
                        through their actions or inactions throughout the game. Instead of having a single “win” or
                        “lose” outcome,
                        <span className="semibold-text"> it emphasises that every decision and action the players make impacts the story</span>
                        , whether they fail or successfully complete the tasks, sabotage parts of the party, and choose
                        whom to invite.</p>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-center text-center" style={{marginBottom: "50px"}}>
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageEnding1}/></Col>
                    <Col><Image width={400} src={ImageEnding2}/></Col>
                    <Col><Image width={400} src={ImageEnding3}/></Col>
                </Image.PreviewGroup>
            </Row>

            <hr/>
            <Row id="documentation" style={{marginTop: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient about-text-fav-gradient">Development
                        Documentation</h1>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-center text-center" style={{marginBottom: "50px"}}>
                <Image.PreviewGroup>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev1}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev2}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev3}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev4}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev5}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev6}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev7}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev8}
                                                 style={{border: "1px solid black"}}/></Col>
                    <Col className="mb-4"><Image width={400} height="100%" src={ImageDev9}
                                                 style={{border: "1px solid black"}}/></Col>
                </Image.PreviewGroup>
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
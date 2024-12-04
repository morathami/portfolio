import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';
import ImageAchievement1 from "../assets/Images/whiskers-achievement-1.png";
import ImageAchievement2 from "../assets/Images/whiskers-achievement-2.png";
import ImageEat1 from "../assets/Images/whiskers-eat-1.png";
import ImageEat2 from "../assets/Images/whiskers-eat-2.png";
import ImageEat3 from "../assets/Images/whiskers-eat-3.png";
import ImageGame1 from "../assets/Images/whiskers-game-1.png";
import ImageGame2 from "../assets/Images/whiskers-game-2.png";
import ImageGame3 from "../assets/Images/whiskers-game-3.png";
import ImageGame4 from "../assets/Images/whiskers-game-4.png";
import ImageGame5 from "../assets/Images/whiskers-game-5.png";
import ImageGame6 from "../assets/Images/whiskers-game-6.png";

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
                        <Link className="size-17-text" href="#gameplay" title="Gameplay"/>
                        <Link className="size-17-text" href="#achievements" title="Achievements"/>
                        <Link className="size-17-text" href="#food" title="Edible and Toxic Foods"/>
                    </Anchor>
                </Col>
            </Row>

            <Row style={{marginTop: "30px", marginBottom: "30px", width: "888.89px"}}
                 className="text-center justify-content-center mx-auto">
                <iframe width="888.89" height="500" src="https://www.youtube.com/embed/mYdnO-KaCT8?si=NURIFh0kQZhUvsaS"
                        title="Whiskers" frameBorder="0"
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

            <Row id="overview" style={{marginTop: "30px", marginBottom: "30px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Overview</h1>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">OBJECTIVE</h5>
                    <p className="size-17-text">Develop a 3D first-person cat simulation exploration game that
                        thoughtfully explores and reflects real-life cats’ care and behaviour.</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TIMELINE</h5>
                    <p className="size-17-text">2024 (+- 2 months)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">ROLE</h5>
                    <p className="size-17-text">Game Designer, Programmer</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">TOOLS</h5>
                    <p className="size-17-text">Unity, Microsoft Visual Studio, Figma, Adobe Photoshop</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">RESOURCES</h5>
                    <p className="size-17-text">Flaticon, Freepik, CGTrader, TurboSquid</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">PLATFORM</h5>
                    <p className="size-17-text">PC (Windows)</p>
                    <h5 className="semibold-text size-17-text mb-0 mt-4">DEMO VIDEO</h5>
                    <p className="size-17-text"><a href="https://www.youtube.com/watch?v=mYdnO-KaCT8"
                                                   target="_blank"
                                                   rel="noreferrer noopener">https://www.youtube.com/watch?v=mYdnO-KaCT8</a>
                    </p>
                </Col>
            </Row>

            <hr/>
            <Row id="gameplay" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Gameplay</h1>
                    <p className="size-17-text">The game's narrative involves the player settling into their new life as
                        a recently adopted cat. Embracing <span className="semibold-text">cats’ curious nature</span>,
                        players explore the unfamiliar house to
                        uncover secrets and hidden treasures. Additionally, the game allows players to engage in various
                        actions such as jumping, eating, sitting, sleeping, and peeing in litter boxes.</p>
                    <p className="size-17-text">It also aligned with the approach to <span className="semibold-text">cats’ care</span>,
                        ranging from providing
                        nutritious food and water to facilitating opportunities for exploration,
                        physical exercises, and intellectual stimulations. For example, hiding
                        food in high places not only fills hunger but also encourages physical
                        exercise and environmental exploration. Tables and kitchen counters
                        are among the places I find cats often climb, which is why they are
                        included in the game.</p>
                    <p className="size-17-text">The <span className="semibold-text">world-building</span> also plays a
                        significant role. Rather than designing
                        a pet-specific house, I started with a typical living space, and then adding items like litter
                        boxes and cat trees to make it cat-friendly. I had also conducted research on the importance of
                        object placement, for instance, that positioning cat beds in bedrooms can promotes undisturbed
                        rest.</p>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col className="mb-5"><Image width={400} src={ImageGame1}/></Col>
                    <Col className="mb-5"><Image width={400} src={ImageGame2}/></Col>
                    <Col className="mb-5"><Image width={400} src={ImageGame3}/></Col>
                    <Col className="mb-5"><Image width={400} src={ImageGame4}/></Col>
                    <Col className="mb-5"><Image width={400} src={ImageGame5}/></Col>
                    <Col className="mb-5"><Image width={400} src={ImageGame6}/></Col>
                </Image.PreviewGroup>
            </Row>

            <hr/>
            <Row id="achievements" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient right-text-fav-gradient">Achievements</h1>
                    <p className="size-17-text">The game’s objectives are represented by six distinct achievements. It
                        reflects how cats naturally seek high positions to search for food and rest and discover various
                        items and foods. Additionally, items to find in the Collection panel reflect the range of
                        objects that cats typically enjoy, such as cardboard boxes.</p>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col><Image width={500} src={ImageAchievement1}/></Col>
                    <Col><Image width={500} src={ImageAchievement2}/></Col>
                </Image.PreviewGroup>
            </Row>

            <hr/>
            <Row id="food" style={{marginTop: "50px", marginBottom: "50px"}}>
                <Col>
                    <h1 className="bold-text size-36-text text-fav-gradient left-text-fav-gradient">Edible and Toxic
                        Foods</h1>
                    <p className="size-17-text">The game challenges players to find 12 foods, divided into edible (like
                        fish and carrots) and toxic (such as avocado and garlic). Feline feeding preferences also often
                        depend on the food’s aroma. It is mirrored in the game mechanics that players must smell the
                        food to determine if it is edible or toxic. Eating toxic food lowers the hunger bar, and the
                        game prompts players to seek immediate veterinary attention. This serves as a reminder for cat
                        owners to monitor what their cats consume and recognise common signs of illness that require
                        quick attention.</p>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center text-center">
                <Image.PreviewGroup>
                    <Col><Image width={400} src={ImageEat1}/></Col>
                    <Col><Image width={400} src={ImageEat2}/></Col>
                    <Col><Image width={400} src={ImageEat3}/></Col>
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
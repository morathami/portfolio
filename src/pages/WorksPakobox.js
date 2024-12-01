import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const Pakobox = () => {
    const { Link } = Anchor;

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#inspirations" title="Game Concept / Inspirations" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GAME DESIGN</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>SOLO PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">Game Designer</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2022 (WIP)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GENRE</h5>
                <p className="size-20-text">Virtual Reality, Simulation, Strategy</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">IDEA</h5>
                <p className="size-20-text">Aesthetic packing content has gained popularity on social media in recent years. Many people, including myself, enjoy watching videos of aesthetically pleasing packaging on social media. Seeing an object carefully and beautifully packaged is satisfying, calming, and enjoyable. For this reason, some people are intrigued to do their own packaging projects but need help figuring out where to start. They might encounter burdens, such as needing to learn packaging techniques or having a limited budget for specialized materials and equipment. This game will help people with hands-on packaging training and provide those who want to fulfil their occasional relaxing time with this fun and satisfying experience.</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GAMEPLAY</h5>
                <p className="size-20-text">This game simulates the packaging tasks by combining cutting-edge virtual reality technology with thrilling challenges and visually appealing game arts.</p>
                <p className="size-20-text">The players start as a novice who starts their career in packaging by working for a small business. As the game progresses, players can move to a bigger scale business and finally work in a large fulfilment centre. After moving up to a more significant business, they must work as a team and be divided into their stations. During the game, the player will be given a list of orders they need to perform and will try to complete the assigned task as quickly and accurately as possible. They also play a variety of functions, including packaging, labelling, and shipping. There are also various objects that they have to pack in different shapes, sizes and materials. Sometimes, the player will face a more complex challenge to pack unique, expensive, oddly shaped items that require more care. Therefore, players should also choose suitable packaging materials such as boxes, food wraps, bubble wraps, packed peanuts, and adhesive tape.</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">CURRENT LIMITATION</h5>
                <p className="size-20-text">This idea has been sitting in my notebook for a while. But because I need the required tools, including Oculus VR, currently, its concept is the only noteworthy development of the game.</p>
            </Col>
        </Row>

        <hr/>
        <Row id="inspirations" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">game concept / inspirations</h1>
                <Image.PreviewGroup>
                    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1250px", marginLeft:"auto", marginRight:"auto"}} className="py-4 mt-3 mb-5 border-radius-20 text-center">
                        <Image width={1200} src="https://live.staticflickr.com/65535/52631649042_504eb8d1fe_o.png" />
                    </div>
                    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1250px", marginLeft:"auto", marginRight:"auto"}} className="py-4 mt-3 mb-5 border-radius-20 text-center">
                        <Image width={1200} src="https://live.staticflickr.com/65535/52654084773_89a5d19a2b_o.png" />
                    </div>
                    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1250px", marginLeft:"auto", marginRight:"auto"}} className="py-4 mt-3 mb-5 border-radius-20 text-center">
                        <Image width={1200} src="https://live.staticflickr.com/65535/52632162911_16d0c0b58e_o.png" />
                    </div>
                </Image.PreviewGroup>
            </Col>
        </Row>
    </Container>
    )
  };
  
  export default Pakobox;
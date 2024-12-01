import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor} from 'antd';

const TemplateWorks = () => {
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
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>SOLO PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">PROBLEM</h5>
                <p className="size-20-text">Abc</p>
            </Col>
        </Row>

        <hr/>
    </Container>
    )
  };
  
  export default TemplateWorks;
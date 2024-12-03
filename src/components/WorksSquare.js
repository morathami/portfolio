import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button, Image} from 'antd';
import {ExportOutlined} from "@ant-design/icons";

function WorksSquare({workConfig}) {
    return (
        <Container className="text-center" style={{maxWidth:"450px"}}>
            <Row>{workConfig.hasVideo && <Col>
                <iframe width="300" height="168.75" src={workConfig.sourceLink}
                        title={workConfig.title} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Col>}
                {!workConfig.hasVideo && <Col><Image style={{borderRadius: "20px"}} width={300} preview={false}
                             src={workConfig.sourceLink}/></Col>}
            </Row>
            <Row className="mt-4">
                <Col>
                    <h1 className="bold-text size-30-text">{workConfig.title}</h1>
                    <Row className="justify-content-center">
                        <Col xs={2} className="my-auto"><h3 className="semibold-text size-15-text my-0">{workConfig.year}</h3></Col>
                        <Col xs={3}><Button color="primary" shape="round" variant="outlined" className="works-tag">{workConfig.engine}</Button></Col>
                    </Row>
                    <p className="size-15-text mt-3 mb-0 body-text-line-height mx-auto" style={{maxWidth:"80%"}}>{workConfig.desc}</p>

                    <Container className="px-0">
                        <Row>
                            <Col className="m-auto">
                                <Link to={workConfig.workLink} target="_blank" rel="noreferrer noopener"><Button
                                    color="primary" icon={<ExportOutlined/>} variant="outlined"
                                    className="pink-main-button mt-4">Read the full process
                                    documentation</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
};

export default WorksSquare;
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button} from 'antd';
import {ExportOutlined} from '@ant-design/icons';

function Works({leftImage, workConfig}) {
    return (
        <Container className="px-0 m-auto">
            <Row>
                <Col className={`px-0 my-auto ${leftImage ? "" : "display-false"}`}>
                    <iframe width="560" height="315" src={workConfig.videoLink}
                            title={workConfig.title} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Col>
                <Col className={`my-auto ${leftImage ? "padding-left-40" : "px-0"}`} style={{textAlign: "left"}}>
                    <h3 className="semibold-text size-17-text">{workConfig.year}</h3>
                    <h1 className="bold-text size-50-text">{workConfig.title}</h1>
                    <Container className="mt-3">
                        <Row>
                            <Col style={{paddingLeft: 0}}><Button shape="round" color="primary" variant="outlined"
                                                                  className="works-tag">Game Design &
                                Programming</Button></Col>
                            <Col><Button color="primary" shape="round" variant="outlined"
                                         className="works-tag">{workConfig.engine}</Button></Col>
                            {workConfig.research ? <Col><Button color="primary" shape="round" variant="outlined"
                                                                className="works-tag">Research</Button></Col> : <Col/>}
                        </Row>
                    </Container>
                    <p className="size-15-text mt-3 mb-0 body-text-line-height">{workConfig.desc}</p>

                    <Container className="px-0">
                        <Row>
                            <Col className="m-auto">
                                <Link to={workConfig.workLink}><Button color="primary" icon={<ExportOutlined/>}
                                                                       variant="outlined"
                                                                       className="pink-main-button mt-4">Read the full
                                    process documentation</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className={`my-auto ${leftImage ? "display-false" : ""}`}>
                    <iframe width="560" height="315" src={workConfig.videoLink}
                            title={workConfig.title} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Col>
            </Row>
        </Container>
    )
};

export default Works;
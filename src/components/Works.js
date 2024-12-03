import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button, Image} from 'antd';
import {YoutubeFilled} from "@ant-design/icons";

function Works({leftImage, workConfig}) {
    return (
        <Container className="px-0 m-auto">
            <Row>
                <Col lg={6} className={`px-0 ${leftImage ? "" : "display-false"}`}>
                    <Image width={500} height={400} preview={false} src={workConfig.imageSrc}/>
                </Col>
                <Col className={`my-auto ${leftImage ? "padding-left-40" : "px-0"}`} style={{textAlign: "left"}} lg={6}>
                    <h3 className="semibold-text size-17-text">{workConfig.year}</h3>
                    <h1 className="bold-text size-50-text">{workConfig.title}</h1>
                    <Container className="mt-3">
                        <Row style={{maxWidth: "90%"}} className="text-center">
                            <Col style={{paddingLeft: 0}}><Button shape="round" color="primary" variant="outlined"
                                                                  className="works-tag">Game Design &
                                Development</Button></Col>
                            <Col><Button color="primary" shape="round" variant="outlined"
                                         className="works-tag">{workConfig.engine}</Button></Col>
                            {workConfig.research ? <Col><Button color="primary" shape="round" variant="outlined"
                                                                className="works-tag">Research</Button></Col> : <Col/>}
                        </Row>
                    </Container>
                    <p className="size-15-text mt-3 mb-0 body-text-line-height">{workConfig.desc}</p>
                    <Container className="mx-0 px-0">
                        <Row>
                            <Col lg={4}><Link to={workConfig.workLink} target="_blank" rel="noreferrer noopener"><Button
                                color="primary" variant="outlined" className="pink-secondary-button mt-4">Read the full
                                process</Button></Link></Col>
                            <Col lg={4} className={`${leftImage ? "margin-left-20" : ""}`}><a
                                href={workConfig.videoLink} target="_blank" rel="noreferrer noopener"><Button
                                color="primary" variant="outlined" icon={<YoutubeFilled/>}
                                className="pink-main-button mt-4">Watch game video</Button></a></Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={4} className={`${leftImage ? "display-false" : ""}`}>
                    <Image width={500} height={400} preview={false} src={workConfig.imageSrc}/>
                </Col>
            </Row>
        </Container>
    )
};

export default Works;
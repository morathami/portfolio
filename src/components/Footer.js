import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from "antd";
import {ArrowUpOutlined} from '@ant-design/icons';
import "../assets/main.css";
import "../assets/footer.css";

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    let mybutton = document.getElementById("BackToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

const Footer = () => {
    window.onscroll = function() {scrollFunction()};
    return (
        <div className="bg-pastel-orange" style={{height:"300px"}}>
            <Button id="BackToTopBtn" type="primary" icon={<ArrowUpOutlined/>} onClick={topFunction}>Back to Top</Button>
            <Container className="container-footer-text">
                <Row>
                    <Col>
                        <p className="semibold-text orange-color size-25-text mb-0">Thami Daulay</p>
                        <p className="mb-0"><a className="footer-link" href="mailto:thamidaulay@gmail.com" target="_blank" rel="noreferrer noopener">thamidaulay@gmail.com</a></p>
                        <p className="mb-0">portfolio coded with love by thami daulay &#129505;</p>
                    </Col>
                    <Col xs={2}>
                        <Container style={{paddingTop:"30px"}}>
                            <Row>
                                <Col style={{textAlign: "right"}}>
                                    <a className="footer-link" href="mailto:thamidaulay@gmail.com" target="_blank" rel="noreferrer noopener">Email</a>
                                </Col>
                                <Col style={{textAlign: "right"}}>
                                    <a className="footer-link" href="https://www.linkedin.com/in/thami-endamora/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{textAlign: "right"}}>
                                    <a className="footer-link" href="https://gitlab.com/thami.endamora" target="_blank" rel="noreferrer noopener">GitLab</a>
                                </Col>
                                <Col style={{textAlign: "right"}}>
                                    <a className="footer-link" href="https://medium.com/@thamiendamora" target="_blank" rel="noreferrer noopener">Medium</a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer;
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from "antd";
import {
    ArrowUpOutlined,
    GithubFilled,
    HeartFilled,
    LinkedinFilled,
    MailFilled,
    MediumSquareFilled
} from '@ant-design/icons';
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
            <Container style={{paddingTop:"100px"}}>
                <Row>
                    <Col>
                        <p className="semibold-text orange-color size-30-text mb-0">Thami Daulay</p>
                        {/*<p className="mb-0"><a className="footer-link" href="mailto:thamidaulay@gmail.com"*/}
                        {/*                       target="_blank" rel="noreferrer noopener" title="thamidaulay@gmail.com">thamidaulay@gmail.com</a></p>*/}
                        <p className="mb-0">portfolio coded with love by thami daulay <HeartFilled /> 2022-2024</p>
                        <p>icons created by <a className="footer-link" href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noreferrer noopener">Freepik</a> - Flaticon</p>
                    </Col>
                    <Col xs={4}>
                        <Container>
                        {/*<Row>*/}
                        {/*    <Col>*/}
                        {/*        <LinkedinFilled /><a className="footer-link" href="https://www.linkedin.com/in/thami-endamora/"*/}
                        {/*           target="_blank" rel="noreferrer noopener" title="Linkedin">linkedin.com/in/thami-endamora/</a>*/}
                        {/*    </Col>*/}
                        {/*    <Col style={{textAlign: "right"}}>*/}
                        {/*        <a className="footer-link" href="https://www.linkedin.com/in/thami-endamora/" target="_blank" rel="noreferrer noopener" title="Linkedin">LinkedIn</a>*/}
                        {/*        </Col>*/}
                        {/*        <Col style={{textAlign: "right"}}>*/}
                        {/*            <a className="footer-link" href="https://medium.com/@thamiendamora" target="_blank" rel="noreferrer noopener" title="Medium">Medium</a>*/}
                        {/*        </Col>*/}
                        {/*    <Col style={{textAlign: "right"}}>*/}
                        {/*        <a className="footer-link" href="https://github.com/morathami" target="_blank" rel="noreferrer noopener" title="GitHub">GitHub</a>*/}
                        {/*    </Col>*/}
                        {/*    </Row>*/}
                        {/*    <Row>*/}
                        {/*        */}
                        {/*        <Col style={{textAlign: "right"}}>*/}
                        {/*            <a className="footer-link" href="https://gitlab.com/thami.endamora" target="_blank" rel="noreferrer noopener" title="GitLab">GitLab</a>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                            <Row><Col><p>Contact</p></Col></Row>
                            <Row><Col><MailFilled /><a className="footer-link" style={{marginLeft:"5px"}} href="mailto:thamidaulay@gmail.com" target="_blank" rel="noreferrer noopener" title="Email">thamidaulay@gmail.com</a></Col></Row>
                            <Row><Col><LinkedinFilled /><a className="footer-link" style={{marginLeft:"5px"}} href="https://www.linkedin.com/in/thami-endamora/" target="_blank" rel="noreferrer noopener" title="Linkedin">linkedin.com/in/thami-endamora</a></Col></Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer;
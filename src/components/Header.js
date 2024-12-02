import React from "react";
import "../assets/navbar.css";
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import {Image} from 'antd';
import { headerTextLst, subheaderTextLst, titleLst, imageLinkLst } from '../assets/params.js';

function bottomFunction() {
    window.scrollTo(0, document.body.scrollHeight);
}

function Header() {
    const [headerText, setHeaderText] = React.useState("");
    const [subheaderText, setSubheaderText] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [centerActive, activateCenter] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const locname = location.pathname;
        let headerCheck = headerTextLst[locname];
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
          });
        if (headerCheck === undefined) {
            setHeaderText("Coming Soon");
            setSubheaderText("Sorry, I'm still working on this page!");
            document.title = "Page Not Found | Thami Daulay";
        } else {
            setHeaderText(headerTextLst[locname]);
            setSubheaderText(subheaderTextLst[locname]);
            setImageLink(imageLinkLst[locname]);
            document.title = titleLst[locname] + "Thami Daulay";
            if (!headerCheck.startsWith("Hi") && !headerCheck.startsWith("Who")) {
                activateCenter(false);
            } else {
                activateCenter(true);
            }
        }
    }, [location])

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="bg-fav-gradient shadow-sm" style={{minHeight:"100px"}}>
                <Container>
                    <Navbar.Brand className="size-30-text bold-text">
                        <Link to="/portfolio/" className="nav-title-link">Thami Daulay</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="flex-row-reverse">
                        <Nav>
                            <Link to="/portfolio/" className="marginright-5 nav-link">Home</Link>
                            <Link to="/portfolio/about" className="marginright-5 nav-link">About</Link>
                            <Link to="/portfolio/works" className="marginright-5 nav-link">Works</Link>
                            <button id="nav-button" className="marginright-5 nav-link" onClick={bottomFunction}>Contact</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={`full-welcome bg-fav-gradient text-white justify-content-center ${centerActive ? "full-header-height" : ""}`}>
                <Container className={`text-center justify-content-center ${centerActive ? "centered-container" : ""}`}>
                    <Row>
                        <Col className={`${centerActive ? "text-center" : ""}`}>
                            <h1 className={`bold-text ${centerActive ? "size-60-text" : "size-50-text maxHeaderTitle"}`}>
                                {headerText}
                            </h1>
                            <h2 className={`semibold-text size-25-text ${centerActive ? "italic-text" : ""}`}>{subheaderText}</h2>
                        </Col>
                        <Col className={`${centerActive ? "imageHidden" : ""}`}>
                            <Image id="header-image" width={300} preview={false} src={imageLink} />
                        </Col>
                    </Row>
                </Container>
            </div>
    </div>
    )
};

export default Header;
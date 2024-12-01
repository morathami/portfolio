import React from 'react';
import '../assets/main.css';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

function Layout() {
    return (
        <div>
            <div id="main-layout">
                <Header />
                <Outlet />
                <Footer />
            </div>
            <div id="mobile-layout">
                <div className="bg-pastel-orange" style={{width:"100vw", height:"100vh"}}>
                    <Container>
                        <Row>
                            <Col className="text-center py-5 px-5">
                                <h6 className="semibold-text">Sorry, this website is not responsive (yet). </h6>
                                <h6>Please use a desktop computer/laptop to visit.</h6>
                                <p style={{fontSize:"10px"}}>Worry not, a responsive website is in progress! :D</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Layout;
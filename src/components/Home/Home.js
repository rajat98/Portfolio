import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> RAJAT PAWAR</strong>
                            </h1>

                            <div style={{padding: 50, textAlign: "left"}}>
                                <Type/>
                            </div>
                        </Col>

                        <Col md={5} style={{paddingBottom: 20}}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{maxHeight: "450px"}}
                            />
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <h1>FIND ME ON</h1>
                            <p>
                                Feel free to <span className="purple">connect </span>with me
                            </p>
                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href="https://github.com/rajat98"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiFillGithub/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/rajatpawar/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <FaLinkedinIn/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/rpaw_"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour home-social-icons"
                                    >
                                        <AiFillInstagram/>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/*<Home2 />*/}
        </section>
    );
}

export default Home;

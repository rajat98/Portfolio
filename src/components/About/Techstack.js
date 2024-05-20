import React from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import {DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact,} from "react-icons/di";
import {
    SiD3Dotjs,
    SiDocker,
    SiFlask,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiRuby,
    SiRubyonrails,
    SiSpringboot,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiJava className="tech-icon"/>
                    <span className="tech-icon-text">Java</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiPython className="tech-icon"/>
                    <span className="tech-icon-text">Python</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiJavascript1 className="tech-icon"/>
                    <span className="tech-icon-text">Javascript</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <CgCPlusPlus className="tech-icon"/>
                    <span className="tech-icon-text">C++</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiRuby className="tech-icon"/>
                    <span className="tech-icon-text">Ruby</span>
                </div>
            </Col>
            {/*<Col xs={4} md={2} className="tech-icons">*/}
            {/*    <TbBrandGolang/>*/}
            {/*</Col>*/}
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiNodejs className="tech-icon"/>
                    <span className="tech-icon-text">NodeJS</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiSpringboot className="tech-icon"/>
                    <span className="tech-icon-text">Spring Boot</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiFlask className="tech-icon"/>
                    <span className="tech-icon-text">Flask</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiD3Dotjs className="tech-icon"/>
                    <span className="tech-icon-text">D3JS</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiRubyonrails className="tech-icon"/>
                    <span className="tech-icon-text">Ruby on Rails</span>
                </div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiMongodb className="tech-icon"/>
                    <span className="tech-icon-text">MongoDB</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiPostgresql className="tech-icon"/>
                    <span className="tech-icon-text">PostgreSQL</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiMysql className="tech-icon"/>
                    <span className="tech-icon-text">MySQL</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiRedis className="tech-icon"/>
                    <span className="tech-icon-text">Redis</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <DiGit className="tech-icon"/>
                    <span className="tech-icon-text">Git</span>
                </div>
            </Col>
        </Row>
    );
}

export default Techstack;

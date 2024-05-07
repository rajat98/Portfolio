import React from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import {DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact,} from "react-icons/di";
import {SiD3Dotjs, SiFlask, SiMysql, SiPostgresql, SiRedis, SiRuby, SiRubyonrails, SiSpringboot,} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                < DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRuby/>
            </Col>
            {/*<Col xs={4} md={2} className="tech-icons">*/}
            {/*    <TbBrandGolang/>*/}
            {/*</Col>*/}
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlask/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiD3Dotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRubyonrails/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
        </Row>
    );
}

export default Techstack;

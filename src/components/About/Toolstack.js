import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiAmazonaws,
    SiApachekafka, SiApachespark, SiDbt,
    SiDocker, SiElasticsearch, SiGrafana,
    SiIntellijidea, SiKibana,
    SiKubernetes,
    SiMacos,
    SiPostman,
    SiSlack,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachekafka/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachespark/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiDbt/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiElasticsearch/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKibana/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGrafana/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws/>
            </Col>

        </Row>
    );
}

export default Toolstack;

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
                <div className="tech-icon-container">
                    <SiDocker className="tech-icon"/>
                    <span className="tech-icon-text">Docker</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiKubernetes className="tech-icon"/>
                    <span className="tech-icon-text">Kubernetes</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiApachekafka className="tech-icon"/>
                    <span className="tech-icon-text">Kafka</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiApachespark className="tech-icon"/>
                    <span className="tech-icon-text">Spark</span>
                </div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiDbt className="tech-icon"/>
                    <span className="tech-icon-text">DBT</span>
                </div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiElasticsearch className="tech-icon"/>
                    <span className="tech-icon-text">Elastic Search</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiKibana className="tech-icon"/>
                    <span className="tech-icon-text">Kibana</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiGrafana className="tech-icon"/>
                    <span className="tech-icon-text">Grafana</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiIntellijidea className="tech-icon"/>
                    <span className="tech-icon-text">Intellij Idea</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiPostman className="tech-icon"/>
                    <span className="tech-icon-text">Postman</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiSlack className="tech-icon"/>
                    <span className="tech-icon-text">Slack</span>
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <div className="tech-icon-container">
                    <SiAmazonaws className="tech-icon"/>
                    <span className="tech-icon-text">AWS</span>
                </div>
            </Col>

        </Row>
    );
}

export default Toolstack;

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./VisualisationCards";
import Particle from "../Particle";
import bubble from "../../Assets/Visualisations/bubble.png";
import pokemon from "../../Assets/Visualisations/pokemon.gif";
import treemap from "../../Assets/Visualisations/treemap.gif";
import lollipop from "../../Assets/Visualisations/lollipop.gif";
import geospatial from "../../Assets/Visualisations/geospatial.gif";
import scatter from "../../Assets/Visualisations/scatter.gif";

function Visualisations() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    Visualisations - <strong className="purple">D3 JS </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few visualisations I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={lollipop}
                            isBlog={false}
                            title="Lolipop Chart"
                            description="Interactive lolipop chart D3 JS"
                            ghLink="https://github.com/rajat98/lolipopChart"
                            demoLink="https://rajat98.github.io/lolipopChart/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={scatter}
                            isBlog={false}
                            title="Scatter Plot & Box Plot"
                            description="D3JS scatter plot"
                            ghLink="https://github.com/rajat98/ScatterPlot-BoxPlot"
                            demoLink="https://rajat98.github.io/ScatterPlot-BoxPlot/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={treemap}
                            isBlog={false}
                            title="Tree Map & Sankey Plot"
                            description="D3JS tree map and sankey plot"
                            ghLink="https://github.com/rajat98/TreeMap-SankeyPlot"
                            demoLink="https://rajat98.github.io/TreeMap-SankeyPlot/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bubble}
                            isBlog={false}
                            title="Bubble Plot"
                            description="D3JS bubble plot"
                            ghLink="https://github.com/rajat98/BubblePlot"
                            demoLink="https://rajat98.github.io/BubblePlot/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={geospatial}
                            isBlog={false}
                            title="Geospatial Plot and PieChart"
                            description="D3JS Geospatial-PieChart"
                            ghLink="https://github.com/rajat98/Geospatial-PieChart"
                            demoLink="https://rajat98.github.io/Geospatial-PieChart"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pokemon}
                            isBlog={false}
                            title="Radar Plot & Icicle Plot"
                            description="Pokemon Vis"
                            ghLink="https://github.com/rajat98/Pokemon-Vis"
                            demoLink="https://rajat98.github.io/Pokemon-Vis"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Visualisations;

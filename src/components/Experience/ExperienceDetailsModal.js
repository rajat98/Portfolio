import React from "react";
import { Modal, Container, Row, Col, Badge } from "react-bootstrap";

const ExperienceDetailsModal = ({ show, onHide, data }) => {
  let title = "",
      company = "",
      years = "",
      location = "",
      description = "",
      highlights = [],
      logo_url = "",
      mainTech = [],
      technologies = [];

  if (data) {
    ({
      title,
      company,
      years,
      location,
      description,
      highlights,
      logo_url,
      mainTech,
      technologies,
    } = data);
  }

  return (
      <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-inside"
      >
        <Modal.Header closeButton style={{ borderBottom: "none", padding: "35px 30px 5px 30px" }}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={2}>
                <img
                    src={logo_url}
                    alt={company}
                    className="company-logo rounded-circle"
                    height="60"
                    width="60"
                />
              </Col>
              <Col xs={7} sm={7}>
                <h3 className="text-left">{title}</h3>
                <h4 className="text-left">{company}</h4>
              </Col>
              <Col xs={5} sm={3}>
                <p className="text-right">{years}</p>
                <p className="text-right">{location}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "30px" }}>
          <Container fluid>
            <Row>
              <Col>
                <p className="modal-description">{description}</p>
              </Col>
            </Row>
            {highlights && highlights.length > 0 && (
                <Row>
                  <Col>
                    <h5>Highlights</h5>
                    <ul className="list-unstyled">
                      {highlights.map((highlight, index) => (
                          <li key={index} className="d-flex align-items-center">
                            <Badge pill className="experience-badge me-2 mb-2" style={{backgroundColor:"#C770F0FF"}} bg={"#C770F0FF"}>
                              {highlight.date}
                            </Badge>
                            <span className="modal-description">{highlight.description}</span>
                          </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
            )}
            <Row>
              <Col>
                <h5>Skills</h5>
                <div className="tech-list">
                  {mainTech &&
                      mainTech.map((tech, index) => (
                          <Badge pill key={index} className="experience-badge mr-2 mb-2" style={{backgroundColor:"#C770F0FF", margin: "1px"}} bg={"#C770F0FF"}>
                            {tech}
                          </Badge>
                      ))}
                  {technologies &&
                      technologies.map((tech, index) => (
                          <Badge pill key={index} className="experience-badge mr-2 mb-2" style={{backgroundColor:"#C770F0FF", margin: "1px"}} bg={"#C770F0FF"}>
                            {tech}
                          </Badge>
                      ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
  );
};

export default ExperienceDetailsModal;

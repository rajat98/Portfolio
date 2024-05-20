import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import face_recognition from "../../Assets/Projects/face_recognition.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={face_recognition}
                            isBlog={false}
                            title="Elastic face recognition application"
                            description="Implemented AWS cloud solution with single async EC2 server for web tier workload handling, SQS-based autoscaling algorithm for dynamic app tier scaling via AMI(Amazon machine image), and S3 for efficient input/output persistence, optimizing resource usage and scalability."
                            ghLink="https://github.com/rajat98/Elastic-Face-Recognition"
                            // demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Multi-Stage-Video-Analysis"
                            description="Implemented video analysis with Lambda for stages video splitting, motion detection, face extraction, and recognition. Leveraged Docker images and Lambda layers for deployment, alongside CloudWatch for monitoring, and ECR(Elastic container repository) for image management."
                            ghLink="https://github.com/rajat98/Multi-Stage-Video-Analysis"
                            // demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Distributed Banking System"
                            description="Implemented gRPC-based distributed banking system with Lamport logical clock and read your writes consistency model in Python. Ensured consistent communication and data consistency for operations like deposits, withdrawals, and balance inquiries on shared accounts"
                            ghLink="https://github.com/rajat98/Distributed-System-Projects"
                            // demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="KNN image retrieval"
                            description="Designed a K-similar image retrieval system using HOG, Color Moments, and Resnet50 features on Caltech101 dataset. Employed SVD, LDA, NMF, LR, and CP decompositions & multimedia indexing techniques like LSH for optimized nearest neighbor searches."
                            ghLink="https://github.com/rajat98/KNN-image-retrieval"
                            // demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>

              {/*      <Col md={4} className="project-card">*/}
              {/*          <ProjectCard*/}
              {/*              imgPath={suicide}*/}
              {/*              isBlog={false}*/}
              {/*              title="Ai For Social Good"*/}
              {/*              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
              {/*              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
              {/*              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
              {/*          />*/}
              {/*      </Col>*/}

              {/*      <Col md={4} className="project-card">*/}
              {/*          <ProjectCard*/}
              {/*              imgPath={emotion}*/}
              {/*              isBlog={false}*/}
              {/*              title="Face Recognition and Emotion Detection"*/}
              {/*              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
              {/*Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
              {/*              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
              {/*              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here*/}
              {/*          />*/}
              {/*      </Col>*/}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

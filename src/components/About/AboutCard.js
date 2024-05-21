import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hey there! I'm <span className="purple">Rajat Pawar</span>, a master code craftsman with a 4.00
                        GPA at Arizona State University.
                        I'm not just surfing the academic waves—I'm conquering them. Whether it's unraveling the
                        mysteries of distributed systems or mastering the intricacies of cloud computing, I'm the go-to
                        geek with a penchant for perfection.
                        <br/> <br/>
                        In the dynamic realm of software engineering, I've honed my craft in crafting dynamic
                        dashboards, migrating systems, and optimizing performance. Venturing into <span
                        className="purple">cloud computing</span>, I've
                        architected solutions on <span className="purple">AWS</span>, ensuring scalability and
                        reliability. Moreover, my expertise spans
                        <span className="purple"> distributed systems</span>, where I've orchestrated intricate
                        communication and data consistency using
                        technologies like <span className="purple">Kafka</span>, gRPC etc. Whether designing distributed
                        banking systems with <span className="purple">gRPC</span> or constructing
                        <span className="purple"> ELT</span> data pipelines with <span
                        className="purple">Kafka Connect</span>, I thrive on pushing the limits of what's possible in
                        software engineering and data engineering, leveraging languages like <span
                        className="purple">Java</span>, <span className="purple">Python</span>, <span
                        className="purple">Ruby</span>, and
                        <span className="purple"> JavaScript</span> to bring
                        ideas to life.
                        <br/>
                        <br/>
                        In my leisure time I enjoy doing following activities:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Working Out
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Playing PC Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                    </ul>

                    {/*<p style={{color: "rgb(155 126 172)"}}>*/}
                    {/*    "Strive to build things that make a difference!"{" "}*/}
                    {/*</p>*/}
                    {/*<footer className="blockquote-footer">Rajat</footer>*/}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

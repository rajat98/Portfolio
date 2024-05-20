import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Rajat Pawar </span>
                        from <span className="purple"> India.</span>
                        <br/>
                        Currently pursuing a Master's in Computer Science at ASU after completing a Bachelor's in
                        Information Technology from COEP.
                        <br/>
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
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

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Rajat</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

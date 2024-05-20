import React from "react";
import {Container} from "react-bootstrap";
import Education from "../Education/Education";

function loadResumeFromPath(path) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", path, false); // `false` makes the request synchronous
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null);

    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    } else {
        throw new Error('There was a problem fetching the resume data: ' + xhr.statusText);
    }
}

// Usage
const absoluteResumePath = "res_primaryLanguage.json";


function AcademicBackground() {
    let resumeData;
    try {
        resumeData = loadResumeFromPath(absoluteResumePath);
        console.log("Resume data loaded successfully:", resumeData);
        // Handle the loaded data
    } catch (error) {
        console.error("Error fetching resume data:", error.message);
        // Handle the error
    }
    return (
        <Container fluid className="professional-experience-section">
            <Education
                educationDegrees={resumeData.education}
                resumeBasicInfo={resumeData.basic_info}
            /> </Container>
    );
}

export default AcademicBackground;

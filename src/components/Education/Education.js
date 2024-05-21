import React, {useState} from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import EducationDetailsModal from "./EducationDetailsModal";

const Education = ({educationDegrees, resumeBasicInfo}) => {
    const [deps, setDeps] = useState({});
    const [workDetailsModalShow, setWorkDetailsModalShow] = useState(false);
    const handleWorkDetailsModalShow = (data) => {
        setDeps(data);
        setWorkDetailsModalShow(true);
    };

    const workDetailsModalClose = () => setWorkDetailsModalShow(false);

    if (educationDegrees && resumeBasicInfo) {
        var sectionName = resumeBasicInfo.section_name.education;
        var works = educationDegrees.map(function (work, i) {
            const technologies = work.technologies;
            const mainTechnologies = work.mainTech;

            var mainTech = mainTechnologies.map((technology, i) => {
                return (
                    <Badge pill className="main-badge mr-2 mb-2" key={i} style={{backgroundColor:"#C770F0FF", margin: "1px"}} bg={"#C770F0FF"}>
                        {technology}
                    </Badge>
                );
            });
            var tech = technologies.map((technology, i) => {
                return (
                    <Badge pill className="experience-badge mr-2 mb-2" key={i} style={{backgroundColor:"#C770F0FF", margin: "1px"}} bg={"#C770F0FF"}>
                        {technology}
                    </Badge>
                );
            });

            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={work.years}
                    iconStyle={{
                        background: "#C770F0FF",
                        color: "#fff",
                        textAlign: "center",
                    }}
                    icon={<a href={work.org_url} title="Click to visit org↗️" target="_blank"><img src={work.logo_url}
                                                                                                   alt="Company Logo"
                                                                                                   style={{
                                                                                                       width: "100%",
                                                                                                       height: "100%"
                                                                                                   }}/></a>}
                    key={i}
                    onTimelineElementClick={() => handleWorkDetailsModalShow(work)}
                >
                    <div style={{textAlign: "left", marginBottom: "4px"}}>
                        {mainTech}
                    </div>

                    <h3
                        className="vertical-timeline-element-title"
                        style={{textAlign: "left", color: "black"}}
                    >
                        {work.title}
                    </h3>
                    <h4
                        className="vertical-timeline-element-subtitle"
                        style={{textAlign: "left", color: "black" }}
                    >
                        {work.company}
                    </h4>
                    <div style={{textAlign: "left", marginTop: "15px"}}>{tech}</div>
                </VerticalTimelineElement>
            );
        });
    }

    return (
        <section id="education" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black", textAlign: "center" }}>
              <span className="text-white" >
                {sectionName}
              </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-9 mx-auto">
                <VerticalTimeline>
                    {works}
                    {/*<VerticalTimelineElement*/}
                    {/*    iconStyle={{*/}
                    {/*        background: "#C770F0FF",*/}
                    {/*        color: "#fff",*/}
                    {/*        textAlign: "center",*/}
                    {/*    }}*/}
                    {/*    icon={*/}
                    {/*        <i className="fas fa-hourglass-start mx-auto experience-icon"></i>*/}
                    {/*    }*/}
                    {/*/>*/}
                </VerticalTimeline>
                <EducationDetailsModal
                    show={workDetailsModalShow}
                    onHide={workDetailsModalClose}
                    data={deps}
                />
            </div>
        </section>
    );
}

export default Education;

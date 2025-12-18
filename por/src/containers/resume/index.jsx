import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent";
import {
    VerticalTimeline,
    VerticalTimelineElement} from "react-vertical-timeline-component";
import'react-vertical-timeline-component/style.min.css'  ;
import { data } from "./util";



const Resume = () =>{
    return (
        <div>
            <section id="resume" className="resume">
                <PageHeaderContent
                headerText ="My Resume"
                icon={<BsInfoCircleFill size={40} />}
                />
                <div className="timeLine">
                    <div className="timeLine_experience">
                        <h3 className="timeLine_experience_header-text">Experiencias</h3>
                        <VerticalTimeline
                        layout = {'1-column'}
                        lineColor = "var(--yellow-theme-main-color)"
                        >
                            {
                                data.experience.map((item, i) => (
                                    <VerticalTimelineElement
                                    key={i}
                                    className = "timeLine_experience_vertical-timeline-element"
                                    >
                                        <div className="vertical-timeline-element-title-wrapper">
                                            <h3 className="vertical-timeline-element-title">
                                                {item.title}
                                            </h3>

                                            <h4 className="vertical-timeline-element-subtitle">
                                                {item.subTitle}
                                            </h4>

                                            <p>{item.description}</p>

                                        </div>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                    </div>
                    <div className="timeLine_education">
                        <h3 className="timeLine_education_header-text">Certificações</h3>
                    </div>
                </div>

            </section>
        </div>
    );
};
export default Resume;
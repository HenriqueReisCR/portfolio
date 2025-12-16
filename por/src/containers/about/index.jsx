import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent";

const About = () =>{
    return (
        <div>
            <section id="about" className="about">
                <PageHeaderContent
                headerText ="About Me"
                icon={<BsInfoCircleFill size={40} />}
                />
            </section>
        </div>
    );
};
export default About;
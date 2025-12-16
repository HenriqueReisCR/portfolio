import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio = () =>{
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <PageHeaderContent
                headerText ="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
                />
            </section>
        </div>
    );
};
export default Portfolio;
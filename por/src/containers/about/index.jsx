import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';

const personalDetails = [
    {
    label: "Name",
    value: "Carlos Henrique",
    },
    {
    label: "Age",
    value: "21",
    },
    {
    label: "Address",
    value: "Brasília,Brazil",
    },
    {
    label: "Email",
    value: "carloshenriquecreis@gmail.com",
    },
    {
    label: "Contact No",
    value: "+55 61 98327-6163",
    },
];

const jobSummary =
"Sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e funcionais. Com habilidades em HTML, CSS, JavaScript e frameworks modernos como React, busco constantemente aprimorar minhas competências e acompanhar as tendências do setor. Meu objetivo é contribuir para projetos inovadores que impactem positivamente a vida dos usuários, sempre focando na usabilidade e na estética do design. Estou aberto a novas oportunidades e desafios que me permitam crescer profissionalmente e colaborar com equipes dinâmicas.";

const About = () => {
    return (
    <section id="about" className="about">
        <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
        />
        <div className="about_content">
        <div className="about_content_personalWrapper">
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
            transform: "translateX(-900px)",
            }}
            end={{
                transform: "translateX(0px)",
            }}
        >
            <h3>Desenvolvimento Full Stack</h3>
            <p>{jobSummary}</p>
            </Animate>

            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
            transform: "translateX(500px)",
            }}
            end={{
                transform: "translateX(0px)",
            }}
        >
            <h3 className="persoanlInformationHeader">Informações pessoais</h3>
            <ul>
                {
                    personalDetails.map((item ,i) => (
                        <li key={i}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                        </li>
                    ))
                }
            </ul>
            </Animate>
        </div>

        <div className="about_content_servicesWrapper">
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
            transform: "translateX(600px)",
            }}
            end={{
                transform: "translatex(0px)",
            }}
            >
                <div className="about_content_servicesWrapper_innerContent">
                    <div>
                        <FaDev color="var(--yellow-theme-main-color)" size={60} />
                    </div>
                    <div>
                        <DiApple color="var(--yellow-theme-main-color)" size={60} />
                    </div>
                    <div>
                        <FaDatabase color="var(--yellow-theme-main-color)" size={60} />
                    </div>
                    <div>
                        <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
                    </div>
                </div>
            </Animate>
        </div>

        </div>
    </section>
);
};
export default About;

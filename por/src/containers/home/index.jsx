import React from "react";
import { useNavigate } from "react-router-dom";
import {Animate} from "react-simple-animate"
import './styles.scss';



const Home = () =>{

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Olá, meu é Carlos Henrique
                    <br />
                    Sou um Desenvolvedor Full Stack
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform: "translatey(550px)"
            }}
            end={{
                transform: "translatex(0px)"
            }}>
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire me</button>
                </div>
            </Animate>
        </section>
    );
};
export default Home;
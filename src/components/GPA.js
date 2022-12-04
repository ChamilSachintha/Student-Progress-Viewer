import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// // Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

import {render} from 'react-dom';
// import App from './App';

const percentage = 66;

export const GPA = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <h2>GPA</h2>
                                    </div>}
                                
                            </TrackVisibility>
                            <p>“Success usually comes to those who are too busy looking for it.”</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={18}
                                        text={`${percentage}%`}
                                        styles={buildStyles({
                                            textColor: "red",
                                            pathColor: "turquoise",
                                            trailColor: "gold"
                                        })}
                                    />
                                    <h5>7th Sem GPA</h5>
                                </div>
                                <div className="item-main">
                                    <img src={meter8} alt="Image" />
                                    <h5>Overall GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>1st Sem GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>2nd Sem GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5>3rd Sem GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image" />
                                    <h5>4th Sem GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="Image" />
                                    <h5>5th Sem GPA</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>6th Sem GPA</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}


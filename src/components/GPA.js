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
import colorSharp from "../assets/img/color-sharp3.png";
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

import { render } from 'react-dom';
// import App from './App';

const percentage1 = 87.5;
const percentage2 = 70;
const percentage3 = 75;
const percentage4 = 90;
const percentage5 = 80;
const percentage6 = 85;
const percentage7 = 80;
const percentage8 = 81.1;

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
        <section className="gpa" id="gpa">
            <Container>
                <Row>
                    <Col>
                        <div className="gpa-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <h2>GPA</h2>
                                    </div>}

                            </TrackVisibility>
                            <p>“Success usually comes to those who are too busy looking for it.”</p>
                            <Carousel responsive={responsive} infinite={true} className="gpa-slider">
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage7}
                                        strokeWidth={18}
                                        text={`3.2`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>7th Sem GPA</h5>
                                </div>
                                <div className="item-main progress-container">
                                    <CircularProgressbar
                                        value={percentage8}
                                        strokeWidth={18}
                                        text={`3.2`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#ffffff",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>Overall GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage1}
                                        strokeWidth={18}
                                        text={`3.5`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>1st Sem GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage2}
                                        strokeWidth={18}
                                        text={`2.8`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>2nd Sem GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage3}
                                        strokeWidth={18}
                                        text={`3`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>3rd Sem GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage4}
                                        strokeWidth={18}
                                        text={`3.6`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>4th Sem GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage5}
                                        strokeWidth={18}
                                        text={`3.2`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>5th Sem GPA</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage6}
                                        strokeWidth={18}
                                        text={`3.4`}
                                        styles={buildStyles({
                                            textColor: "#ffff",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
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


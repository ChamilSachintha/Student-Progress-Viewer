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
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

export const Attendance = () => {
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
                                        <h2>ATTENDANCE</h2>
                                    </div>}
                            </TrackVisibility>
                            <p>“Success usually comes to those who are too busy looking for it.”</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={18}
                                        text={`3.7`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#7500e3",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>7th Sem GPA</h5>
                                </div> 
                                <div className="item-main progress-container">
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={18}
                                        text={`3.7`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#7500e3",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>Overall GPA</h5>
                                </div>
                                <div className="item progress-container">
                                <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={18}
                                        text={`3.7`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#7500e3",
                                            trailColor: "#404040"
                                        })}
                                    />
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
                                <div className="item progress-container">
                                <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={18}
                                        text={`3.7`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#7500e3",
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
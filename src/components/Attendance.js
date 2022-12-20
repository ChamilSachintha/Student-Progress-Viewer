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
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage1 = 87.5;
const percentage2 = 70;
const percentage3 = 75;
const percentage4 = 90;
const percentage5 = 80;
const percentage6 = 85;
const percentage7 = 80;
const percentage8 = 81.1;

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
        <section className="attendance" id="attendance">
            <Container>
                <Row>
                    <Col>
                        <div className="attendance-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <h2>ATTENDANCE</h2>
                                    </div>}
                            </TrackVisibility>
                            <p>This attendance data is only related to your current semester only.</p>
                            <Carousel responsive={responsive} infinite={true} className="attendance-slider">
                                <div className="item-main progress-container">
                                    <CircularProgressbar
                                        value={percentage8}
                                        strokeWidth={18}
                                        text={`${percentage2}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>MC7020</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage1}
                                        strokeWidth={18}
                                        text={`${percentage3}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7010</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage2}
                                        strokeWidth={18}
                                        text={`${percentage4}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7050</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage3}
                                        strokeWidth={18}
                                        text={`${percentage5}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7060</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage4}
                                        strokeWidth={18}
                                        text={`${percentage6}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7020</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage5}
                                        strokeWidth={18}
                                        text={`${percentage7}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7040</h5>
                                </div>
                                <div className="item progress-container">
                                    <CircularProgressbar
                                        value={percentage6}
                                        strokeWidth={18}
                                        text={`${percentage8}%`}
                                        styles={buildStyles({
                                            textColor: "#B8B8B8",
                                            pathColor: "#4289fc",
                                            trailColor: "#404040"
                                        })}
                                    />
                                    <h5>EC7090</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image" src={colorSharp} alt="Image" />
        </section>
    )
}
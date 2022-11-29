import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards/ProjectCard1";
import { ProjectCard2 } from "./ProjectCards/ProjectCard2";
import { ProjectCard3 } from "./ProjectCards/ProjectCard3";
import { ProjectCard4 } from "./ProjectCards/ProjectCard4";
import { ProjectCard5 } from "./ProjectCards/ProjectCard5";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import meter7 from "../assets/img/meter7.png";
import sem1 from "../assets/img/sem1.png";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export const Results = () => {

    const Results = [
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },

        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        },
        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        },
        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        },

        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },
        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },
        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },

        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
        },
        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
        },
        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
        }

    ]
    return (
        <section className="result" id="result">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>RESLUTS</h2>
                                </div>}
                        </TrackVisibility>
                        {/* <p>“Every project is an opportunity to learn, figure out problems and challenges, and invent and reinvent.”</p> */}
                        <Tab.Container id="result-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1st Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2nd Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">3rd Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">4th Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">5th Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">6th Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh">7th Sem</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eighth">8th Sem</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Card className="card" sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image= {sem1}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eighth">
                                <p>This section will be updated soon</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}
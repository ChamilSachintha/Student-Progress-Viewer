import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards/ProjectCard1";
import { ProjectCard2 } from "./ProjectCards/ProjectCard2";
import { ProjectCard3 } from "./ProjectCards/ProjectCard3";
import { ProjectCard4 } from "./ProjectCards/ProjectCard4";
import { ProjectCard5 } from "./ProjectCards/ProjectCard5";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/banner-bg1.png";

import meter7 from "../assets/img/meter7.png";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export const Results = () => {

    
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
                        <Tab.Container id="results-tabs" defaultActiveKey="first">
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
                                    <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eighth">
                                <main >
                                        <div class="st_wrap_table" data-table_id="0">
                                            <div class="st_table">
                                            <div class="st_row">
                                                <div class="st_column _rank">COURSE</div>
                                                <div class="st_column _name">CREDIT</div>
                                                <div class="st_column _surname">GRADE</div>
                                            </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>

                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                                <div class="st_row">
                                                    <div class="st_column _rank">EC1020</div>
                                                    <div class="st_column _name">3</div>
                                                    <div class="st_column _surname">A</div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
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
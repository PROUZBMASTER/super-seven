import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../CSS-Quvonchbek/index.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import carouselImage from "../Images-Quvonchbek/carouselImage.png";

const Header = () => {
    return (
        <>
            <header>
                <Navbar />
                <main className='carouselMain'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={carouselImage} alt="First slide" />
                                        <Carousel.Caption>
                                            <h3>WINTER SALE ДО -70%</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={carouselImage} alt="Second slide" />
                                        <Carousel.Caption>
                                            <h3>WINTER SALE ДО -70%</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={carouselImage} alt="Third slide" />
                                        <Carousel.Caption>
                                            <h3>WINTER SALE ДО -70%</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </header>
        </>
    );
}

export default Header;

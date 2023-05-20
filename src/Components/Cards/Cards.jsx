import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Cards.css'
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import c4 from "./img/c4.png"


function CardPage() {
    return (
        <>
            <section className='card-div'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={2}>
                            <h1 className='nov'>Новинки</h1>
                        </Col>
                        <Col lg={12}>
                            <Carousel>
                                <Carousel.Item className='d-flex align-items-center justify-content-center'>
                                    <Row>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c1} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c2} alt="" />
                                                    <button className='btn1'>-50%</button>
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <div className="d-flex">
                                                    <h6 className='cost and'>34392 ₽</h6>
                                                    <h6 className='cos2'>17392 ₽</h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c3} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c4} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                    </Row>


                                </Carousel.Item>
                                <Carousel.Item className='d-flex align-items-center justify-content-center'>
                                    <Row>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c1} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c2} alt="" />
                                                    <button className='btn1'>-50%</button>
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <div className="d-flex">
                                                    <h6 className='cost and'>34392 ₽</h6>
                                                    <h6 className='cos2'>17392 ₽</h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c3} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="car">
                                                <div className="lll">
                                                    <img className='c1' src={c4} alt="" />
                                                </div>
                                                <h6 className='lib'>LIB TECH</h6>
                                                <p className='tex'>Мужской Сноуборд</p>
                                                <h6 className='cost'>34392 ₽</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}
export default CardPage;

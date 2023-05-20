import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../CSS-Quvonchbek/index.css';
import logo from "../Images-Quvonchbek/logo.png";

const Navbar = () => {
    return (
        <>
            <nav className='navbar1 d-flex align-items-center justify-content-center'>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={5}>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li className='list-itemQ d-flex align-items-center'>
                                    <i className="fa-solid fa-location-dot list-itemQ"></i>
                                    <p className='prQ'>Ваш регион доставки: Москва</p>
                                    <i className="fa-solid fa-chevron-down list-itemQ"></i>
                                </li>
                                <li className='list-itemQ'>Магазины</li>
                                <li className='list-itemQ'>Помощь</li>
                                <li className='list-itemQ'>Блоги</li>
                            </ul>
                        </Col>
                        <Col lg={5}>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li className='list-itemQ d-flex align-item-center justify-content-center'>
                                    <i className="fa-solid fa-truck"></i>
                                    <p>Бесплатная доставка *</p>
                                </li>
                                <li className='list-itemQ d-flex align-item-center justify-content-center'>
                                    <i className="fa-regular fa-credit-card"></i>
                                    <p>Оплата при получении</p>
                                </li>
                                <li className='list-itemQ d-flex align-item-center justify-content-center'>
                                    <i className="fa-solid fa-briefcase"></i>
                                    <p>Возврат в течение 14 дней</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </nav>
            <nav className='navbar2'>
                <Container>
                    <Row>
                        <Col lg={4} className='d-flex align-items-center'>
                            <ul className='d-flex align-items-center justify-content-center'>
                                <li className='nav2-listQ ms-0'>Мужчинам</li>
                                <li className='nav2-listQ'>Женщинам</li>
                                <li className='nav2-listQ'>Детям</li>
                            </ul>
                        </Col>
                        <Col lg={4} className='d-flex align-items-center justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='logo-image' src={logo} alt="" />
                            </div>
                        </Col>
                        <Col lg={4} className='d-flex align-items-center justify-content-end'>
                            <div className="icons d-flex align-items-center justify-content-end">
                                <div className="icon">
                                    <i className="fa-solid fa-user"></i>
                                    <p>ВОЙТИ</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <p>Избранное</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <p>Корзина</p>
                                </div>
                                <div className="icon">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <p>ПОИСК</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
            <nav className="navbar3">
                <Container>
                    <Row>
                        <Col lg={10}>
                            <ul className='nav3-menu d-flex align-items-center justify-content-between'>
                                <li>Новинки</li>
                                <li>Сноуборд</li>
                                <li>Лыжи</li>
                                <li>Скейт</li>
                                <li>Лонгборд</li>
                                <li>Вейкборд</li>
                                <li>Серф</li>
                                <li>Sup</li>
                                <li>Одежда</li>
                                <li>Обувь</li>
                                <li>Аксессуары</li>
                                <li>Бренды</li>
                                <li>Распродажа</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
}

export default Navbar;

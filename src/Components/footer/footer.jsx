import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
const  img9 = require("./img/image 27.png")
const  img1 = require("./img/Group 1032.png")
const  img2 = require("./img/Group 1033.png")
const  img3 = require("./img/Group 1035.png")

function Footer() {
    return (
        <>
            <footer className='footer'>
       <Container>
            <Row className='justify-content-between'>
                <Col lg={3} >
                    <div className="key">
                    <img src={img9} alt="" />
                    <h1 className='boad'>BOADRIDERS</h1>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="main-key">
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-solid fa-paper-plane-top"></i>
                    </div>
                    <input type="text" placeholder='Подпишись на рассылку и получи  -10%  скидку' />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={4}>
                    <p className='dostup'>Доступ к ранним релизам в приложении </p>
                    <img src={img2} alt="" className='img' /> <br />
                    <img src={img1} alt="" className='img1' /> 
                    <img src={img3} alt="" className='image1' /> 
                </Col>
                <Col lg={3}>
                    <p className='kontakt'>Контакты</p>
                   <div className="main">
                   <i class=" fa-solid  fa-phone fa-1.5x"></i>
                        <p className='phone'>8 (800) 511-74-68 </p>
                   </div>
                    <p className='besplatno'>Бесплатная горячая линия <br /> Ежедневно с 9 до 21</p>
                    <div className="main">
                    <i class="fa-solid fa-comment fa-1.5x"></i>
                        <p className='phone'>Контактный Email</p>
                   </div>
                    <p className='besplatno'>info@brd.ru</p>
                </Col>
                <Col lg={2}>
                   <div className="lion">
                   <p className='pomosh'>Помощь</p>
                    <p className='dostav'>Доставка</p>
                    <p className='dostav'>Оплата</p>
                    <p className='dostav'>Возврат</p>
                    <p className='dostav'>Отзывы (2290)</p>
                    <p className='dostav'>Акции и скидки</p>
                   </div>
                </Col>
                {/* <Col lg={1}>
                    <p className='pomosh'>Компания</p>
                    <p className='dostav'>Контакты</p>
                    <p className='dostav'>О boardriders</p>
                    <p className='dostav'>Вакансии</p>
                    <p className='dostav'>Публичная оферта</p>
                </Col> */}
                <Col lg={2}>
                    <div className="loin">
                    <p className='pomosh'>Boardriders Inc.</p>
                    <p className='dostav'>Франчайзинг</p>
                    <p className='dostav'>Quiksilver</p>
                    <p className='dostav'>Roxy</p>
                    <p className='dostav'>DC Shoes</p>
                    <p className='dostav'>Boardriders Club</p>
                    </div>
                </Col>
            
            </Row>
            <hr />
            <Row className='justify-content-between'>
                <Col lg={3}>
                <div className="box">
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-facebook-f fa-2x"></i>
                <i class="fa-brands fa-twitch fa-2x"></i>
                <i class="fa-brands fa-youtube fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
                </div>
                </Col>
                <Col lg={3}>
                    <p className='brand'>© 2020 Brd.ru. Все права защищены</p>
                </Col>
            </Row>
        </Container>
       </footer>
        </>
    )
}

export default Footer

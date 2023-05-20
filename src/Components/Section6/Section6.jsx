import { Card, Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import './style.css'
 function Section6() {


    




    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col lg={6}>
                        <Card className='carddd'>
                            <Card className='logo'></Card>
                            <h1 className='program'>Программа лояльности</h1>
                            <p className='zara'>Зарабатывайте баллы и получайте преимущества</p>
                            <button className='btnvs'>Вступить в клуб</button>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className='carddd d'>
                            <Card className='logo1'></Card>
                            <h1 className='program'>Скидка -10%</h1>
                            <p className='zara'>За подписку на наши новости</p>
                            <form>
                            <input className='inp' type="email" placeholder='Email'  />
                            <button className='sub'><i class="fa-solid fa-paper-plane"></i></button>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section6;
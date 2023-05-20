import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./index.css"
function Section4() {
    return (
        <>
        <Container>
            <Row>
                <Col lg={12}>
                  <div className="back">
                  </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="sectionText">
                        <h2 className='text1'>Название Акции </h2>
                        <p className="text2"> Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Section4

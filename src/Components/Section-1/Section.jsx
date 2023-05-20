import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './section.css'
import img1 from './img/Group 3.svg'
import image1 from "./img/Rectangle 58.png";
import image2 from "./img/Rectangle 65.png";
const Section = () => {
  return (
    <section>
      <Container>
        <Row className='d-none d-sm-block justify-content-center mt-5'>
          <Col xl={12}>
            <div className='photo'>
              <img className='zero' src={img1} alt="" />
            </div>
          </Col>
          </Row>
          <Row className='mt-5'>
            <Col xl={6}>
              <div className="img-2">
                <img height="339px" width="100%" className='image-1' src={image1} alt="" />
                <button className='right-button'>НАЗВАНИЕ АКЦИИ №1</button>
              </div>
            </Col>
            <Col xl={6}>
              <div className="img-2">
                <img id='run' height="339px" width="100%" className='image-2' src={image2} alt="" />
                <button className='right-button'>НАЗВАНИЕ АКЦИИ №2</button>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section;
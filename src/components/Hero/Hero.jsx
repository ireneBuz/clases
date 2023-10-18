import { Col, Row, } from 'react-bootstrap'
import './Hero.css'

const Hero = () => {


    return (
        <>
            <Row className='hero-init'>
                <Col >
                    <p className='hero-first-title'>La nueva forma de aprender música</p>
                    <div className='hero-second-title'>
                        <p>Adaptado a ti,</p>
                        <p>a tus nociones y tus <span className='hero-second-title-color-change'>gustos</span></p>
                    </div>
                    <div className='hero-third-title'>
                        <p>Online o presencial, <span className='hero-third-title-color-change'>elige la opción que más se adapte a ti.</span></p>
                    </div>
                </Col>
            </Row>

        </>
    )
}
export default Hero
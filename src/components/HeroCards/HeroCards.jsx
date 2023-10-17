import { Col, Row, } from 'react-bootstrap'
import './HeroCards.css'
import { Link } from 'react-router-dom'

const HeroCards = () => {


    return (
        <>
            <Row className='justify-content-center'>
                <Col xs='10' className='hero-card mb-4'>
                    <Row>
                        <Col xs='10'>
                            <h2 className='hero-cards-first-title'>Piano</h2>
                            <p className='hero-cards-first-info'>¿Quieres mejorar tu técnica de clásico?</p>
                            <p className='hero-cards-first-info'>¿Quieres aprender a tocar tus temas favoritos?</p>
                            <p className='hero-cards-first-info'>¿No has tocado nunca y te apetece empezar?</p>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col className='text-center'>
                            <Link className='hero-cards-button' to='/'>Saber más</Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs='10' className='hero-card'>
                    <Row>
                        <Col xs='10' className='mb-3'>
                            <h2 className='hero-cards-first-title'>Teoría musical</h2>
                            <p className='hero-cards-first-info mt-3'>¿Necesitas clases de refuerzo? (Conservatorio, colegio…)</p>
                            <p className='hero-cards-first-info '>¿Tocas algún instrumento y tienes curiosidad por saber como están compuestos los temas?</p>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col className='text-center'>
                            <Link className='hero-cards-button' to='/'>Saber más</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}
export default HeroCards
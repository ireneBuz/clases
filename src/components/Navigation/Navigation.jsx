import { Col, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <Row className='navi justify-content-between align-items-center'>
                <Col xs='2' lg='3' >
                    <div className='nav-my-name'>
                        <a href="#intro-blank-section">
                            <img src="imagenes/logo.png" alt="logo" className='logo' /> </a>
                    </div>
                </Col>
                <Col xs='8' lg='6' >
                    <Row className='nav-sections justify-content-around me-3'>
                        <Col xs='3' lg='4' className='text-center p-0'>
                            <a href="#about-me-section">SOBRE MÍ</a>
                        </Col>
                        <Col xs='3' lg='4' className='text-center p-0' >
                            <a href="#projects-section">PROYECTOS</a>
                        </Col>
                        <Col xs='3' lg='4' className='text-center p-0' >
                            <a href="#contact-me-section">CONTACTO</a>
                        </Col>
                    </Row>
                </Col>


            </Row >

            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" checked={isMenuOpen}
                onChange={() => setIsMenuOpen(!isMenuOpen)} />
            <label className='navi-label' htmlFor="menu-icon"></label>

            <nav className="nav">
                <ul>
                    <li>  <a href="#about-me-section"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        CONTACTO
                    </a>
                    </li>
                    <li>
                        <a href="#projects-section"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            SOBRE MÍ
                        </a>
                    </li>

                    <li>
                        <a href="#contact-me-section"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            HORARIOS
                        </a>
                    </li>
                    <li>
                        <a href="#contact-me-section"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            CURSOS (Comming soon)
                        </a>
                    </li>

                </ul>
            </nav>
            <div className="overlay"></div>
        </>
    )
}
export default Navigation
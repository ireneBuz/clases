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
                    <div className='nav-my-name text-center'>
                        <a href="#intro-blank-section"> <h3>IRENE BUCETA</h3></a>
                    </div>
                </Col>
            </Row >
        </>
    )
}
export default Navigation
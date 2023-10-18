import { Col, Row, } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {


    return (
        <>
            <Row className='navi align-items-center'>
                <Col xs='6' lg='3' >
                    <div className='nav-my-name'>
                        <img src="./../../img/LOGO.png" alt="" />
                    </div>
                </Col>
            </Row >
        </>
    )
}
export default Navigation
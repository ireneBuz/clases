import { Container } from 'react-bootstrap'
import Hero from '../../components/Hero/Hero'
import './HomePage.css'
import HeroCards from '../../components/HeroCards/HeroCards'

const HomePage = () => {
    return (
        <>
            <div className='hero-background'>
                <Container>
                    <div id='hero'>
                        <Hero />
                    </div>
                    <div id='hero-cards'>
                        <HeroCards />
                    </div>
                </Container>

            </div>
        </>
    )
}
export default HomePage
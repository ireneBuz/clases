<script setup>
import homeCards1 from '/homeCards1.png'
import homeCardsButton from '/homeCardsButton.svg'
import homeCards2 from '/homeCards2.png'

</script>


<template>
    <header>
        <div class="home-cards">
            <div class="home-cards-single">
                <img :src="homeCards1" alt="">
                <div class="home-cards-single-h4">
                    <h4>¿Quieres aprender teoria musical?</h4>
                </div>
                <p>La teoria proporciona el marco necesario para comprender la musica.</p>
                <div class="info">
                    <RouterLink to="/contacto" @click="closeMenu" :class="{ 'active-link': $route.path === '/contacto' }">
                        Ver opciones </RouterLink>
                    <img :src="homeCardsButton" alt="">
                </div>
            </div>
            <div class="home-cards-single">
                <img :src="homeCards2" alt="">
                <div class="home-cards-single-h4">
                    <h4>¿Quieres aprender a tocar el piano?</h4>
                </div>

                <p>El piano, con su expresividad y versatilidad, es una puerta de entrada al universo de la musica.</p>

                <div class="info">
                    <RouterLink to="/contacto" @click="closeMenu" :class="{ 'active-link': $route.path === '/contacto' }">
                        Ver opciones </RouterLink>
                    <img :src="homeCardsButton" alt="">
                </div>
            </div>
        </div>

    </header>
</template>






<style scoped>
.home-cards {
    font-family: 'Founders-Grotesk';
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    color: #000;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 150px;
}

.home-cards .home-cards-single {
    width: 25%;
    height: 460px;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
    gap: 31px;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 13px 28px 0px rgba(0, 0, 0, 0.10), 0px 50px 50px 0px rgba(0, 0, 0, 0.09), 0px 113px 68px 0px rgba(0, 0, 0, 0.05), 0px 201px 80px 0px rgba(0, 0, 0, 0.01), 0px 314px 88px 0px rgba(0, 0, 0, 0.00);
}

.home-cards .home-cards-single img {
    width: 100%;
}

.home-cards .home-cards-single h4 {
    font-size: 25px;
    font-weight: 500;
    line-height: 23.702px;
    height: 40px;
}

.home-cards .home-cards-single p {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.5px;
    height: 40px;
}


.home-cards .home-cards-single a {
    text-decoration: none;
    color: #FFFFFF;
}

.home-cards .home-cards-single .info {
    display: flex;
    margin-top: 35px;
    padding-bottom: 6px;
    padding-top: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 30px;
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    font-size: 13px;
    width: fit-content;
}

.home-cards .home-cards-single .info img {
    width: 15px;
}

@media (max-width: 745px) {
    .home-cards .home-cards-single {
        width: 31%;
        height: 325px;
        padding-top: 35px;
        padding-bottom: 60px;
        padding-right: 20px;
        padding-left: 20px;
        border-radius: 18px;
        border-radius: 17.069px;
        box-shadow: 0px 9.24563px 19.91367px 0px rgba(0, 0, 0, 0.10), 0px 35.56012px 35.56012px 0px rgba(0, 0, 0, 0.09), 0px 80.36586px 48.36176px 0px rgba(0, 0, 0, 0.05), 0px 142.95166px 56.89619px 0px rgba(0, 0, 0, 0.01), 0px 223.31754px 62.5858px 0px rgba(0, 0, 0, 0.00);
    }

    .home-cards .home-cards-single h4 {
        font-size: 17px;

        height: 40px;
    }

    .home-cards .home-cards-single p {
        font-size: 11px;

        height: 30px;
    }

}

@media (max-width: 420px) {

    .home-cards {
        display: flex;
        flex-direction: column;
        gap: 0px;
        margin-top: 40px;
        margin-bottom: 0px;
    }

    .home-cards .home-cards-single {
        width: 60%;
        height: 325px;
        padding-top: 35px;
        padding-bottom: 0px;
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: 15px;
        border-radius: 18px;
        border-radius: 17.069px;
        box-shadow: 0px 9.24563px 19.91367px 0px rgba(0, 0, 0, 0.10), 0px 35.56012px 35.56012px 0px rgba(0, 0, 0, 0.09), 0px 80.36586px 48.36176px 0px rgba(0, 0, 0, 0.05), 0px 142.95166px 56.89619px 0px rgba(0, 0, 0, 0.01), 0px 223.31754px 62.5858px 0px rgba(0, 0, 0, 0.00);
    }

    .home-cards .home-cards-single h4 {
        font-size: 17px;
        height: 0;
        line-height: 16.857px
    }

    .home-cards .home-cards-single .home-cards-single-h4 {
        margin-bottom: 5px;
    }

    .home-cards .home-cards-single p {
        margin-top: 50px;
        font-size: 11px;
        height: 20px;
    }
}
</style>

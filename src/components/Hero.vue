<script setup>
import heroImg from '/heroimg.png'


</script>


<template>
    <header>
        <div class="hero">
            <div class="hero-text">
                <h1>La nueva forma de tomar clases de musica</h1>
                <p>Aprende a tocar el piano y todo sobre teoria musical con clases adaptadas a ti, a tus nociones y tus
                    gustos.<span> Online o presencial,</span> elige la opcion que mas se adapte a ti.</p>
                <div class="info">
                    <RouterLink to="/contacto" @click="closeMenu" :class="{ 'active-link': $route.path === '/contacto' }">
                        Mas info</RouterLink>
                </div>
            </div>


            <div class="hero-img">
                <img :src="heroImg" alt="">
            </div>
        </div>


    </header>
</template>






<style scoped>
.hero {
    font-family: 'Founders-Grotesk';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.hero .hero-text {
    flex-direction: column;
}

.hero .hero-img img {
    margin-left: 40px;
    width: 90%;

}

.hero .hero-text h1 {
    font-size: 49px;
    font-weight: 600;
    line-height: 120%;
}

.hero .hero-text p {
    font-size: 25px;
    font-weight: 500;
    line-height: 120%;
}

.hero .hero-text span {
    color: #B795FF;
}

.hero .hero-text .info a {
    text-decoration: none;
    color: #FFFFFF;
}

.hero .hero-text .info {
    margin-top: 35px;
    margin-bottom: 50px;
    margin-left: 10px;
    padding: 10px 19px;
    border-radius: 30px;
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    font-size: 20px;
    width: fit-content;
}


.hero .hero-text,
.hero .hero-img {
    width: 43%;
}


@media (max-width: 745px) {
    .hero {
        align-items: center;
        flex-direction: column-reverse;
        text-align: center;
    }

    .hero .hero-text,
    .hero .hero-img {
        width: 90%;
    }

    .hero .hero-text {
        text-align: start;
    }

    .hero .info a {
        margin-left: 0px;
        padding: 10px 20px;
        font-size: 18px;
    }

    .hero .hero-img {
        text-align: center;
        margin-left: 0;
    }


    .hero .hero-img {
        width: 60%;

    }

    .hero .hero-text h1 {
        font-size: 48px;
        margin-top: 0;
    }

    .hero .hero-text p {
        font-size: 24px;

    }
}

@media (max-width: 440px) {
    .hero .hero-text h1 {
        font-size: 32px;

    }

    .hero .hero-text,
    .hero .hero-img {
        width: 85%;
    }

    .hero .hero-img {}

    .hero .hero-text .info {
        text-align: center;
        width: 90%;
        padding-top: 5px;
        margin-top: 35px;
        margin-left: 0;
    }
}
</style>

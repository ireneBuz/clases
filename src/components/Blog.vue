<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<template>
    <header>
        <div class="home-blog" :class="{ 'dark-mode': isDarkMode }">
            <div class="title">
                <h2>BLOG MUSICAL</h2>
            </div>
            <div class="sub-title">
                <p>"La música es una revelación más alta que cualquier filosofía." - Beethoven</p>
            </div>

            <div class="cards">
                <Swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
                    clickable: true,
                }" :autoplay="{
    delay: 5000,
}" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 10,

    },
    '1150': {
        slidesPerView: 3,
        spaceBetween: 30,

    },

}" :modules="modules" class="mySwiper">
                    <SwiperSlide>
                        <div class="card">
                            <div class="image">
                                <img src="/blog1.webp" alt="">
                            </div>
                            <div class="middle-text">
                                <a href="#">Por dónde empezar</a>
                                <p>La elección de la música adecuada es esencial para cualquier pianista, independientemente
                                    de su
                                    nivel de habilidad. Tocar una pieza que se adapte a tu nivel no solo te ayudará a
                                    mejorar tu
                                    destreza, sino que también te permitirá disfrutar más del proceso de aprendizaje. Aquí
                                    te damos
                                    algunos consejos para encontrar la pieza perfecta:</p>
                            </div>
                            <div class="bottom-text">
                                <a href="#">LEER MÁS</a>
                                <h4>15 - Diciembre - 2023</h4>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="card">
                            <div class="image">
                                <img src="/blog2.webp" alt="">
                            </div>
                            <div class="middle-text">
                                <a href="#">Mejora tu técnica de piano</a>
                                <p>La técnica es un aspecto fundamental en el aprendizaje del piano. Una sólida técnica no
                                    solo te
                                    permitirá tocar con precisión y expresión, sino que también te abrirá las puertas a un
                                    repertorio más amplio y desafiante. Aquí te ofrecemos algunos consejos para mejorar tu
                                    técnica:
                                </p>
                            </div>
                            <div class="bottom-text">
                                <a href="#">LEER MÁS</a>
                                <h4>23 - Noviembre - 2023</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="image">
                                <img src="/blog3.webp" alt="">
                            </div>
                            <div class="middle-text">
                                <a href="#">Beneficios cognitivos de la teoría musical</a>
                                <p>La música es mucho más que una forma de expresión artística; también tiene beneficios
                                    significativos para el desarrollo cognitivo. Estudiar teoría musical no solo te permite
                                    comprender mejor la música, sino que también puede mejorar tus habilidades mentales y
                                    emocionales. Aquí te presentamos algunos de los beneficios cognitivos de adentrarte en
                                    el mundo de la teoría musical:</p>
                            </div>
                            <div class="bottom-text">
                                <a href="#">LEER MÁS</a>
                                <h4>10 - Noviembre - 2023</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="image">
                                <img src="/blog4.webp" alt="">
                            </div>
                            <div class="middle-text">
                                <a href="#">Diferentes estilos en el piano</a>
                                <p>El piano es un instrumento versátil que te permite sumergirte en una amplia gama de
                                    estilos musicales. La exploración de diferentes estilos no solo enriquecerá tu
                                    repertorio, sino que también te brindará una comprensión más profunda de la música en su
                                    conjunto. Aquí te presentamos algunos de los estilos musicales que puedes explorar en el
                                    piano:
                                </p>
                            </div>
                            <div class="bottom-text">
                                <a href="#">LEER MÁS</a>
                                <h4>18 - Octubre - 2023</h4>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    </header>
</template>




<style>
.swiper-pagination-bullet {
    background: #5a5a5a;
    color: white;
    height: 15px;
    width: 15px;
}

.dark-mode .swiper-pagination-bullet {
    background: #ffffff;
    color: white;
}

@media (max-width: 850px) {
    .swiper-pagination-bullet {
        height: 10px;
        width: 10px
    }
}
</style>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}



.home-blog {
    display: flex;
    padding-bottom: 50px;
    background-color: #FFE7FF;
    flex-direction: column;
    align-items: center;
}

.test {
    text-align: center;
}

.test img {
    width: 100px;
}

.title {
    padding-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
}



.title h2 {
    color: rgb(23, 23, 23);
    font-family: 'Newake';
    font-weight: 600;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 20px;
}

.sub-title {
    text-align: center;
}

.sub-title p {
    color: rgb(69, 69, 69);
    font-family: 'Founders-Grotesk-light';
    font-size: 26px;
    margin-top: 0;
    padding-top: 0;
}

.cards {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 300px;
    background-color: #ffffff;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.image {
    height: 150px;
    overflow: hidden;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

}

.middle-text {
    height: 207px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;

}

.bottom-text {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    height: 43px;
    overflow: hidden;
    align-items: baseline;
    justify-content: space-between;

}

.card img {
    width: 100%;
    transform: translateY(-25%);
}

.middle-text a {
    color: rgb(13, 13, 13);
    font-family: 'Founders-Grotesk-medium';
    font-size: 30px;
    line-height: 31px;
    text-decoration: none;
    transition: color 0.4s ease-in-out;
}

.middle-text a:hover {
    color: #ff71ff;
}


.card p {
    color: rgb(93, 93, 93);
    font-family: 'Founders-Grotesk-light';
    font-size: 18px;
    margin-top: 10px;
    padding-top: 0;
    line-height: 25px;

}

.card h4 {
    color: rgb(100, 100, 100);
    font-family: 'Founders-Grotesk-light';
    font-size: 14px;
    margin-top: 0;
    padding-top: 15px;
}

.bottom-text a {
    color: rgb(28, 28, 28);
    font-family: 'Founders-Grotesk-medium';
    font-size: 20px;
    margin-top: 0;
    text-decoration: none;
    transition: color 0.4s ease-in-out;

}

.bottom-text a:hover {
    color: #ff71ff;
}

.dark-mode .home-blog {
    background-color: #4f014f;
}

.dark-mode .card {
    background-color: rgb(28, 28, 28);
}

.dark-mode .title h2 {
    color: #e6e6e6
}

.dark-mode .sub-title p {
    color: #bebebe;
}

.dark-mode .middle-text a {
    color: #e6e6e6
}

.dark-mode .middle-text a:hover {
    color: #ea9ef4
}

.dark-mode .middle-text p,

.dark-mode .bottom-text h4 {
    color: #b8b8b8
}

.dark-mode .bottom-text a {
    color: #e6e6e6;
}

.dark-mode .bottom-text a:hover {
    color: #ea9ef4;
}

@media (max-width: 970px) {
    .cards {
        width: 90vw;
    }

    .sub-title {
        margin-left: 10px;
        margin-right: 10px;
    }
}



@media (max-width: 428px) {

    .cards {
        width: 100vw;
    }

    .title {
        text-align: center;
        padding-top: 50px;
        margin-left: 5px;
        margin-right: 5px;

    }

    .sub-title {
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
    }

    .sub-title p {
        font-size: 22px;
    }
}
</style>

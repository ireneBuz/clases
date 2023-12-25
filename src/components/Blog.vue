<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogSlide from './BlogSlide.vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
        BlogSlide,
    },
    data() {
        return {
            slides: [
                {
                    imageSrc: '/blog1.webp',
                    title: 'Por dónde empezar',
                    excerpt: 'La elección de la música adecuada es esencial para cualquier pianista, independientemente de su nivel de habilidad.Tocar una pieza que se adapte a tu nivel no solo te ayudará a mejorar tu destreza, sino que también te permitirá disfrutar más del proceso de aprendizaje.Aquí te damos algunos consejos para encontrar la pieza perfecta',
                    readMoreLink: '#',
                    date: '15 - Diciembre - 2023'
                },
                {
                    imageSrc: '/blog2.webp',
                    title: 'Mejora tu técnica de piano',
                    excerpt: 'La técnica es un aspecto fundamental en el aprendizaje del piano. Una sólida técnica no solo te permitirá tocar con precisión y expresión, sino que también te abrirá las puertas a un repertorio más amplio y desafiante.Aquí te ofrecemos algunos consejos para mejorar tu técnica:',
                    readMoreLink: '#',
                    date: '23 - Noviembre - 2023'
                },
                {
                    imageSrc: '/blog3.webp',
                    title: 'Beneficios cognitivos de la teoría musical',
                    excerpt: 'La música es mucho más que una forma de expresión artística; también tiene beneficios significativos para el desarrollo cognitivo.Estudiar teoría musical no solo te permite comprender mejor la música, sino que también puede mejorar tus habilidades mentales y emocionales.Aquí te presentamos algunos de los beneficios cognitivos de adentrarte en el mundo de la teoría musical: ',
                    readMoreLink: '#',
                    date: '10 - Noviembre - 2023'
                },
                {
                    imageSrc: '/blog4.webp',
                    title: 'Diferentes estilos en el piano',
                    excerpt: 'El piano es un instrumento versátil que te permite sumergirte en una amplia gama de estilos musicales.La exploración de diferentes estilos no solo enriquecerá tu repertorio, sino que también te brindará una comprensión más profunda de la música en su conjunto.Aquí te presentamos algunos de los estilos musicales que puedes explorar en el piano: ',
                    readMoreLink: '#',
                    date: '15 - Diciembre - 2023'
                },
            ]
        };
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
                    <SwiperSlide v-for="(slide, index) in slides" :key="index">
                        <BlogSlide :image-src="slide.imageSrc" :title="slide.title" :excerpt="slide.excerpt"
                            :read-more-link="slide.readMoreLink" :date="slide.date">
                        </BlogSlide>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </header>
</template>



<style scoped>
.home-blog {
    display: flex;
    padding-bottom: 50px;
    background-color: #FFE7FF;
    flex-direction: column;
    align-items: center;
}

.dark-mode .home-blog {
    background-color: #4f014f;
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

.dark-mode .title h2 {
    color: #e6e6e6
}

.sub-title {
    text-align: center;
}

.dark-mode .sub-title p {
    color: #bebebe;
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

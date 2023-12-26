<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogCards from './BlogCards.vue';
import { slides } from './../utils/slides.js'
import { RouterLink } from 'vue-router';

export default {
    components: {
        Swiper,
        SwiperSlide,
        BlogCards,
    },
    data() {
        return {
            slides: slides
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
                <RouterLink to="/blog-musical" aria-label="BLOG MUSICAL">
                    <h2>BLOG MUSICAL</h2>
                </RouterLink>

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
                        <BlogCards :image-src="slide.imageSrc" :title="slide.title" :excerpt="slide.excerpt"
                            :read-more-link="slide.readMoreLink" :date="slide.date">
                        </BlogCards>
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

.title a {
    text-decoration: none;
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

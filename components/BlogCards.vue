<script setup>
import { RouterLink } from 'vue-router';

const { imageSrc, title, excerpt, readMoreLink, date } = defineProps({
    imageSrc: String,
    title: String,
    excerpt: String,
    readMoreLink: String,
    date: String
})
</script>

<template>
    <div class="card">
        <div class="image">
            <RouterLink :to="readMoreLink">
                <img :src="imageSrc" alt="">
            </RouterLink>
        </div>
        <div class="middle-text">
            <RouterLink :to="readMoreLink" aria-label="TITLE">
                {{ title }}
            </RouterLink>
            <p>{{ excerpt }}</p>
        </div>
        <div class="bottom-text">
            <RouterLink :to="readMoreLink" aria-label="READ MORE">
                LEER MÁS
            </RouterLink>
            <h4>{{ date }}</h4>
        </div>
    </div>
</template>

<style>
.swiper-pagination-bullet {
    background: #5a5a5a !important;
    color: white !important;
    height: 15px !important;
    width: 15px !important;
}

.dark-mode .swiper-pagination-bullet {
    background: #ffffff !important;
    color: white !important;
}

.swiper {
    width: 100% !important;
    height: 100% !important;
    padding-bottom: 40px !important;
}

.swiper-slide {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}

@media (max-width: 850px) {
    .swiper-pagination-bullet {
        height: 10px !important;
        width: 10px !important
    }
}
</style>




<style scoped>
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
    align-items: center;
    display: flex;
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
    transition: all 0.3s ease;

}

.card img:hover {
    scale: 1.2;
    transition: all 0.3s ease;
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

.dark-mode .card {
    background-color: rgb(28, 28, 28);
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
</style>

<template>
    <div class="card">
        <div class="image">
            <img :src="imageSrc" alt="">
        </div>
        <div class="middle-text">
            <a :href="readMoreLink">{{ title }}</a>
            <p>{{ excerpt }}</p>
        </div>
        <div class="bottom-text">
            <a :href="readMoreLink">LEER MÁS</a>
            <h4>{{ date }}</h4>
        </div>
    </div>
</template>

<script>

export default {

    name: 'BlogSlide',
    props: {
        imageSrc: String,
        title: String,
        excerpt: String,
        readMoreLink: String,
        date: String
    }
}
</script>

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

@media (max-width: 850px) {
    .swiper-pagination-bullet {
        height: 10px;
        width: 10px
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

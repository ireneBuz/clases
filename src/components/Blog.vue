<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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
                <div class="card">
                    <div class="image">
                        <img src="/blog1.webp" alt="">
                    </div>
                    <div class="middle-text">
                        <a href="#">Por dónde empezar</a>
                        <p>La elección de la música adecuada es esencial para cualquier pianista, independientemente de su
                            nivel de habilidad. Tocar una pieza que se adapte a tu nivel no solo te ayudará a mejorar tu
                            destreza, sino que también te permitirá disfrutar más del proceso de aprendizaje. Aquí te damos
                            algunos consejos para encontrar la pieza perfecta:</p>
                    </div>
                    <div class="bottom-text">
                        <a href="#">LEER MÁS</a>
                        <h4>10 - Octubre - 2023</h4>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>






<style scoped>
.home-blog {
    height: 700px;
    background-color: #FFE7FF;
}

.title {
    padding-top: 100px;
    margin-left: 100px;
}

.title h2 {
    color: rgb(23, 23, 23);
    font-family: 'Newake';
    font-weight: 600;
    font-size: 49px;
    margin-top: 0;
    margin-bottom: 20px;
}

.sub-title {
    margin-left: 100px;
}

.sub-title p {
    color: rgb(69, 69, 69);
    font-family: 'Founders-Grotesk-light';
    font-size: 26px;
    margin-top: 0;
    padding-top: 0;
}

.cards {
    display: flex;
    justify-content: center;
}

.card {
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



@media (max-width: 970px) {
    .title {
        padding-top: 80px;
        margin-left: 50px;
    }

    .sub-title {
        margin-left: 50px;
        margin-right: 50px;
    }
}

@media (max-width: 480px) {
    .home-blog {
        height: 750px;
    }
}

@media (max-width: 428px) {
    .home-blog {
        height: 670px;
    }

    .title {
        text-align: center;
        padding-top: 50px;
        margin-left: 0px;
    }

    .sub-title {
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    .sub-title p {
        font-size: 22px;
    }
}
</style>

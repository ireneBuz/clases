<script setup>
import homeInfo1 from '/homeInfo1.svg'
import homeInfo2 from '/homeInfo2.svg'
import homeInfo3 from '/homeInfo3.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    gsap.from(".item1", {
        opacity: 0,
    });
    gsap.to(".item1", {
        scrollTrigger: { trigger: ".item1", start: () => "top bottom-=160" },
        duration: 1,
        ease: "expo.out",
        y: 0,
        opacity: 1,
    });
    gsap.from(".item2", {
        opacity: 0,
    });
    gsap.to(".item2", {
        scrollTrigger: { trigger: ".item2", start: () => "top bottom-=180" },
        y: 0,
        duration: 1,
        ease: "expo.out",
        opacity: 1,
    });

    gsap.from(".item3", {
        opacity: 0,
    });
    gsap.to(".item3", {
        scrollTrigger: { trigger: ".item3", start: () => "top bottom-=180" },
        y: 0,
        duration: 1,
        ease: "expo.out",
        opacity: 1,
    });

    gsap.from(".item4", {
        opacity: 0
    })
    gsap.to(".item4", {
        scrollTrigger: { trigger: ".item3", start: () => "top bottom-=300" },
        duration: 1,
        opacity: 1,
    })
})


</script>


<template>
    <header>
        <div class="home-info">
            <div class="home-info-title">
                <h2>¡Aprender música ahora es muy fácil!
                    Solo tienes que...</h2>
            </div>
            <div class="home-info-points">
                <div class="home-info-points-item item1">
                    <div class="home-info-points-item-img">
                        <img :src="homeInfo1" alt="">
                    </div>
                    <div class="home-info-points-item-h3">
                        <h3>1. Elige la modalidad que prefieras</h3>
                    </div>
                    <div class="home-info-points-item-p">
                        <p>Online o presencial, elige la forma que más se adapte a ti.</p>
                    </div>
                </div>
                <div class="home-info-points-item item2">
                    <div class="home-info-points-item-img">
                        <img :src="homeInfo2" alt="">
                    </div>
                    <div class="home-info-points-item-h3">
                        <h3>2. Contacta y fija los días y horas </h3>
                    </div>
                    <div class="home-info-points-item-p">
                        <p>Elige que días a la semana (de lunes a viernes)
                            y cuántas horas quieres tener clase. </p>
                    </div>

                </div>
                <div class="home-info-points-item item3">
                    <div class="home-info-points-item-img">
                        <img :src="homeInfo3" alt="">
                    </div>
                    <div class="home-info-points-item-h3">
                        <h3>3. Aprende y ¡disfruta!</h3>
                    </div>
                    <div class="home-info-points-item-p">
                        <p>Practica y envuélvete en el mundo
                            de la música.</p>
                    </div>
                </div>
            </div>
            <div class="home-info-paragraph item4">
                <p>Sumergirse en el mundo de las clases de piano y la teoría musical es una experiencia enriquecedora que va
                    más
                    alla de aprender a tocar un instrumento.</p>
            </div>

        </div>

    </header>
</template>






<style scoped>
.home-info {
    font-family: 'Founders-Grotesk-medium';
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    color: #000;

}

.home-info .home-info-title {
    width: 55%;
    text-align: center;

}

.home-info .home-info-points .home-info-points-item {
    opacity: 0;
    transform: translateY(200px);
}

.home-info .home-info-points {
    text-align: center;
    display: flex;
    height: 341px;
    width: 100%;
    background: #FFE7FF;
    justify-content: center;
    gap: 50px;
}

.home-info .home-info-title h2 {
    font-size: 49px;
    font-weight: 500;
    line-height: 55px;
}

.home-info .home-info-points .home-info-points-item {
    width: 20%;
    height: 100%;
}

.home-info .home-info-points .home-info-points-item .home-info-points-item-img {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    height: 40px;
}

.home-info .home-info-points .home-info-points-item .home-info-points-item-h3 {
    font-family: 'Founders-Grotesk-regular';
    height: 60px;
    font-size: 25px;
    font-weight: 500;
    line-height: 25.5px;
}

.home-info .home-info-points .home-info-points-item .home-info-points-item-p {
    font-family: 'Founders-Grotesk-regular';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}



.home-info .home-info-paragraph {
    font-family: 'Founders-Grotesk-medium';
    opacity: 0;
    text-align: center;
    margin-top: 40px;
    width: 75%;
    font-size: 31px;
    font-weight: 500;
    line-height: 55px
}


@media (max-width: 870px) {
    .home-info .home-info-title {
        width: 80%;
        margin-bottom: 25px;
    }

    .home-info .home-info-points {
        gap: 0;
        justify-content: center;
    }

    .home-info .home-info-title h2 {
        font-size: 36px;
    }

    .home-info .home-info-points .home-info-points-item {
        width: 31%;
    }

    .home-info .home-info-points .home-info-points-item .home-info-points-item-h3 {
        font-size: 20px;
        height: 80px;
    }

    .home-info .home-info-points .home-info-points-item .home-info-points-item-p {
        font-size: 14px;
    }

    .home-info .home-info-paragraph {
        margin-top: 50px;
        width: 75%;
        font-size: 31px;
        line-height: 35px;
        text-align: start;
    }
}

@media (max-width: 440px) {


    .home-info .home-info-title {
        width: 100%;
        margin-bottom: 0;
    }

    .home-info .home-info-title h2 {
        font-size: 22px;
        line-height: 35px;

    }

    .home-info .home-info-points {
        display: block;
        height: fit-content;
        padding-bottom: 60px;

    }

    .home-info .home-info-points .home-info-points-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .home-info .home-info-points .home-info-points-item .home-info-points-item-h3 {
        font-size: 18px;
        width: 60%;
        height: 70px;
    }

    .home-info .home-info-points .home-info-points-item .home-info-points-item-p {
        font-size: 14px;
        width: 80%;

    }

    .home-info .home-info-paragraph {
        text-align: start;
        margin-top: 18px;
        width: 75%;
        font-size: 18px;
        line-height: 23px
    }
}
</style>

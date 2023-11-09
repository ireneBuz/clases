<script setup>
import heroImg from '/heroimg.png'
import closeModalIcon from '/closeModal.svg'
import ContactForm from './ContactForm.vue'
import { ref } from 'vue';

let showModal = ref(false);
const openModal = () => {
    showModal.value = true;
}

const closeModal = () => {
    showModal.value = false;
}

</script>


<template>
    <header>
        <div class="hero">
            <div class="hero-text">
                <h1>La nueva forma de tomar clases de música</h1>
                <p>Aprende a tocar el piano y todo sobre teoría musical con clases adaptadas a ti, a tus nociones y tus
                    gustos.<span> Online o presencial,</span> elige la opción que más se adapte a ti.</p>
                <div class="info">
                    <a @click="openModal">
                        Más info</a>
                </div>
            </div>

            <div v-if="showModal" @close="closeModal">
                <div class='modal'>
                    <div class='modal-content'>
                        <span class='close' @click="closeModal">
                            <img :src="closeModalIcon" alt="">
                        </span>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div class="hero-img">
                <img :src="heroImg" alt="">
            </div>
        </div>


    </header>
</template>






<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
    background-color: #ffffff;
    margin: 3% auto;
    padding: 20px;
    width: 47.25rem;
    height: 43.0625rem;
    border-radius: 40px;
}


.close {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    transform: translateY(15px) translateX(-15px);
}

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
    font-family: 'Founders-Grotesk-medium';
    font-weight: 500;
    line-height: 120%;
}

.hero .hero-text span {
    color: #B795FF;
}

.hero .hero-text .info a {
    text-decoration: none;
    color: #FFFFFF;
    padding: 13px 19px 8px 19px;
    border-radius: 30px;
    font-family: 'Founders-Grotesk-medium';

    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    font-size: 20px;
    cursor: pointer;

}

.hero .hero-text .info a:hover {
    background: var(--main-colors-gradient, linear-gradient(30deg, #1f53c3 13.4%, #cd59ff 75.6%));
}



.hero .hero-text .info {
    margin-top: 55px;
    margin-bottom: 50px;
    margin-left: 10px;

}



.hero .hero-text,
.hero .hero-img {
    width: 43%;
}

@media (max-width:900px) {
    .modal-content {
        width: 37.25rem;
    }
}


@media (max-width: 870px) {
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

@media (max-width:645px) {
    .modal-content {
        width: 25.25rem;
    }
}

@media (max-width: 440px) {
    .modal-content {
        width: 21.5rem;
    }

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

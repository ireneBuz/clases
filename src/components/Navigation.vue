<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import menuIcon from '/menuicon.svg'
import menuIconClose from '/menuiconclose.svg'
import ContactForm from './ContactForm.vue'
import closeModalIcon from '/closeModal.svg'
const isMenuOpen = ref(false);
let showModal = ref(false);


const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const menuIconSource = computed(() => {
    return isMenuOpen.value ? menuIconClose : menuIcon
});
const closeMenu = () => {
    isMenuOpen.value = false;
}

const openModal = () => {
    showModal.value = true;
}

const closeModal = () => {
    showModal.value = false;
}

const handleButtonClick = () => {
    openModal()
    closeMenu()
}
</script>


<template>
    <header>
        <nav class="nav-container">
            <div class="nav-container-mini">
                <div class="title">
                    <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">
                        <p>IRENE BUCETA</p>
                    </RouterLink>

                </div>
                <div class="menu-icon" :class="{ 'with-shadow': isMenuOpen }" @click="toggleMenu">
                    <img :src="menuIconSource" alt="Hamburger Menu">
                </div>
            </div>

            <div class="nav-links">
                <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
                <RouterLink to="/clases-horarios" :class="{ 'active-link': $route.path === '/clases-horarios' }">Horarios
                </RouterLink>
                <RouterLink to="/cursos" :class="{ 'active-link': $route.path === '/cursos' }">
                    Cursos
                </RouterLink>
            </div>

            <div class="contacto">
                <a @click="openModal">
                    Contacto</a>
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
        </nav>

        <div class="mobile-menu" v-if="isMenuOpen">
            <RouterLink to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
            <RouterLink to="/clases-horarios" @click="closeMenu"
                :class="{ 'active-link': $route.path === '/clases-horarios' }">Horarios
            </RouterLink>
            <RouterLink to="/cursos" @click="closeMenu" :class="{ 'active-link': $route.path === '/cursos' }">Cursos
            </RouterLink>
            <a @click="handleButtonClick" :class="{ 'active-link': $route.path === '/contact' }">
                Contacto</a>
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


.active-link {
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100vw;
    height: 124px;
}

.nav-container-mini {
    text-align: start;
    margin-left: 5%;
    width: 30%;
}

.title p {
    font-family: Newake;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.5px;
    padding: 10px;
    background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
    width: fit-content;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    justify-content: space-evenly;
    width: 40%;

}

.nav-links a {
    padding: 15px 20px 10px 20px;
    font-family: 'Founders-Grotesk-medium';

}

.nav-links a:hover:not(.active-link) {
    border-radius: 10px;
    background: rgba(183, 149, 255, 0.60);
    padding: 15px 20px 10px 20px;
}

nav a,
.mobile-menu a {
    color: #1E1E1E;
    font-family: 'Founders-Grotesk';
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;

}



nav .contacto {
    text-align: end;
    margin-right: 5%;
    width: 20%;
}

nav .contacto a {
    color: #FFFFFF;
    width: 78px;
    padding: 13px 19px 8px 19px;
    font-family: 'Founders-Grotesk-medium';
    border-radius: 30px;
    background: var(--main-colors-gradient, linear-gradient(30deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    cursor: pointer;
}



nav .contacto a:hover {
    background: var(--main-colors-gradient, linear-gradient(30deg, #1f53c3 13.4%, #cd59ff 75.6%));
}

.menu-icon {
    display: none;
    cursor: pointer;
    width: 47px;
}

@media (max-width:900px) {
    .modal-content {
        width: 37.25rem;
    }
}

@media (max-width: 870px) {

    .nav-container-mini {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        width: 100vw;
    }


    .menu-icon {
        display: block;
        margin-right: 30px;
    }

    .menu-icon.with-shadow {

        width: 50px;
        height: 50px;
        border-radius: 6px;
        box-shadow: 0px 10px 10px 1px rgba(0, 0, 0, 0.2);
    }

    .nav-links,
    .contacto {
        display: none;
    }

    .mobile-menu {
        position: absolute;
        z-index: 1;
        transform: translateY(-40px);
        margin-left: auto;
        right: 0;
        display: flex;
        width: 40%;
        padding: 50px 30px;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        border-radius: 24px;
        background: #FFF;
        box-shadow: 0px 9px 20px 0px rgba(0, 0, 0, 0.10), 0px 36px 36px 0px rgba(0, 0, 0, 0.09), 0px 81px 48px 0px rgba(0, 0, 0, 0.05), 0px 143px 57px 0px rgba(0, 0, 0, 0.01), 0px 224px 63px 0px rgba(0, 0, 0, 0.00);
    }

    .mobile-menu a {
        display: flex;
        width: 90%;
        padding: 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .mobile-menu a:hover:not(.active-link) {
        border-radius: 10px;
        background: rgba(183, 149, 255, 0.60);
    }
}

@media (max-width:645px) {
    .modal-content {
        width: 25.25rem;
    }
}

@media (max-width: 440px) {

    .title p {
        font-size: 28px;
    }

    .modal-content {
        width: 21.5rem;
    }

    .menu-icon {
        margin-right: 20px;
    }

    .nav-container {
        height: 90px;
    }

    .mobile-menu {
        transform: translateY(-25px);

    }
}
</style>

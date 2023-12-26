<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import menuIcon from '/menuicon.svg'
import menuIconClose from '/menuiconclose.svg'
import ContactForm from './ContactForm.vue'
import closeModalIcon from '/closeModal.svg'
import { gsap } from 'gsap'


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
const enter = (el) => {
    gsap.fromTo(el, {
        opacity: 0,
        scale: 1.4,
    }, { duration: 0.2, opacity: 1, scale: 1 });
};

const leave = (el, done) => {
    !showModal.value ?
        gsap.to(el, {
            duration: 0.2,
            scale: 1.4,
            opacity: 0,
            onComplete: () => {
                done();
            },
        })
        :
        gsap.to(el, {
            duration: 0.2,
            opacity: 0,
            onComplete: () => {
                done();
            },
        })

};

const enterForm = (el) => {
    gsap.fromTo(el, {
        opacity: 0,
    }, { duration: 0.3, opacity: 1 });
};

const leaveForm = (el, done) => {
    gsap.to(el, {
        duration: 0.3,
        opacity: 0,
        onComplete: done,
    });
};

const { toggleDarkMode } = defineProps(['toggleDarkMode']);

</script>


<template>
    <section id="navigation" :class="{ 'dark-mode': isDarkMode }">
        <nav class="nav-container">
            <div class="nav-container-mini">
                <div class="title">
                    <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }" aria-label="IRENE BUCETA">
                        <p>IRENE BUCETA</p>
                    </RouterLink>
                </div>

                <label class="mode-light" aria-label="Toggle Dark Mode">
                    <input class="toggle-checkbox" type="checkbox" @change="toggleDarkMode" />
                    <div class="toggle-slot">
                        <div class="sun-icon-wrapper">
                            <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                        </div>
                        <div class="toggle-button"></div>
                        <div class="moon-icon-wrapper">
                            <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                        </div>
                    </div>
                </label>

                <div class="menu-icon" :class="{ 'with-shadow': isMenuOpen }" @click="toggleMenu" aria-label="Toggle Menu">
                    <img :src="menuIconSource" alt="Hamburger Menu">
                </div>
            </div>

            <div class="nav-links">
                <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }" aria-label="Inicio">Inicio</RouterLink>
                <RouterLink to="/clases-horarios" :class="{ 'active-link': $route.path === '/clases-horarios' }"
                    aria-label="Horarios">
                    Horarios
                </RouterLink>
                <p>Clases</p>

                <div class='dropdown'>
                    <div class="dropdown-links">
                        <RouterLink to="/clases-piano" :class="{ 'active-link': $route.path === '/clases-piano' }"
                            aria-label="Piano">
                            Piano
                        </RouterLink>
                    </div>
                    <div class="dropdown-links">
                        <RouterLink to="/clases-teoria-musical"
                            :class="{ 'active-link': $route.path === '/clases-teoria-musical' }"
                            aria-label="Teoría musical">
                            Teoría musical
                        </RouterLink>
                    </div>
                </div>




                <!-- <RouterLink to="/cursos" :class="{ 'active-link': $route.path === '/cursos' }" aria-label="Cursos">
                    Cursos
                </RouterLink> -->
                <RouterLink to="/blog-musical" :class="{ 'active-link': $route.path === '/blog-musical' }"
                    aria-label="Blog-musical">
                    Blog
                </RouterLink>
            </div>

            <div class="contacto">
                <a @click="openModal" role="button" aria-label="Contacto">Contacto</a>
            </div>

            <transition @enter="enterForm" @leave="leaveForm">
                <div v-if="showModal">
                    <div class="modal">
                        <div class="modal-content">
                            <span class="close" @click="closeModal" role="button" aria-label="Close Modal">
                                <img :src="closeModalIcon" alt="Close Modal">
                            </span>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </transition>
        </nav>

        <transition @enter="enter" @leave="leave">
            <div class="mobile-menu" v-if="isMenuOpen" aria-hidden="true">
                <RouterLink class="fade-inicio" to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }"
                    aria-label="Inicio">
                    Inicio
                </RouterLink>
                <RouterLink to="/clases-horarios" @click="closeMenu"
                    :class="{ 'active-link': $route.path === '/clases-horarios' }" aria-label="Horarios">
                    Horarios
                </RouterLink>
                <RouterLink to="/clases-piano" @click="closeMenu"
                    :class="{ 'active-link': $route.path === '/clases-piano' }" aria-label="Clases de piano">
                    Clases de piano
                </RouterLink>
                <RouterLink to="/clases-teoria-musical" @click="closeMenu"
                    :class="{ 'active-link': $route.path === '/clases-teoria-musical' }"
                    aria-label="Clases de teoría musical">
                    Clases de teoría musical
                </RouterLink>
                <!-- <RouterLink to="/cursos" @click="closeMenu" :class="{ 'active-link': $route.path === '/courses' }"
                    aria-label="Cursos">
                    Cursos
                </RouterLink> -->
                <RouterLink to="/blog-musical" @click="closeMenu"
                    :class="{ 'active-link': $route.path === '/blog-musical' }" aria-label="Blog-musical">
                    Blog
                </RouterLink>
                <a @click="handleButtonClick" :class="{ 'active-link': $route.path === '/contacto' }" aria-label="Contacto">
                    Contacto
                </a>
            </div>
        </transition>
    </section>
</template>


<style scoped>
.mode-light {
    margin-left: 20px;
}

.toggle-checkbox {
    position: absolute;
    opacity: 0;
}

.toggle-slot {
    cursor: pointer;
    position: relative;
    height: 18px;
    width: 40px;
    border: 3px solid #e4e7ec;
    border-radius: 18px;
    background-color: white;
    box-shadow: 0px 0px 25px #e4e7ec;
    transition: background-color 250ms;
}

.dark-mode .toggle-slot {
    background-color: #374151;
}




.toggle-button {
    transform: translate(23px, 2px);
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 0.75em #9a52ff;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(0.26, 2, 2, .71);
}

.dark-mode .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(4px, 2px);
}

.sun-icon {
    position: absolute;
    height: 14px;
    width: 14px;
    color: #9a52ff;
}

.sun-icon-wrapper {
    position: absolute;
    height: 14px;
    width: 14px;
    opacity: 1;
    transform: translate(4px, 2px) rotate(15deg);
}


.dark-mode .toggle-slot .sun-icon-wrapper {
    opacity: 0;
}

.moon-icon {
    position: absolute;
    height: 14px;
    width: 14px;
    color: white;
}

.moon-icon-wrapper {
    opacity: 0;
}

.dark-mode .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(20px, -2px) rotate(-15deg);
}

.dark-mode,
.dark-mode a,
.dark-mode p {
    color: #e6e6e6;
}


section {
    margin: auto;
    max-width: 1470px;
}


.modal {
    display: block;
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);

}

.modal-content {
    background-color: #eeeeee;
    margin: 3% auto;
    padding: 20px;
    width: 47.25rem;
    height: 43.0625rem;
    border-radius: 40px;
}

.dark-mode .modal-content {
    background-color: #434343;
    color: #e6e6e6;
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
    height: 124px;
}

.nav-container-mini {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

.nav-links a,
.nav-links p {
    padding: 10px;
    font-family: 'Founders-Grotesk-medium';
    transition: background 3s ease-out, color 3s ease-out;
}

.nav-links p {
    margin: 0;
}

.nav-links a:hover:not(.active-link) {
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    transition: background 3s ease-out, color 3s ease-out;
}


nav a,
.mobile-menu a,
nav p {
    font-family: 'Founders-Grotesk-medium';
    color: #1E1E1E;
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
    background: var(--main-colors-gradient-hover, linear-gradient(30deg, #1f53c3 13.4%, #cd59ff 75.6%));
    color: #FFFFFF;
}

.title p:hover {
    background: linear-gradient(60deg, #6892ec 13.4%, #e7afff 86.6%);
    width: fit-content;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}


.menu-icon {
    display: none;
    cursor: pointer;
    width: 47px;
}

.dropdown {
    cursor: pointer;
    transition: all 0.4s;
    overflow: hidden;
    position: absolute;
    width: 170px;
    height: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: translate(70px, 40px);
    background-color: rgb(142, 142, 142);
}

.dropdown .dropdown-links {
    margin-top: 10px;
}

.nav-links p:hover~.dropdown,
.dropdown:hover {
    padding-top: 10px;
    height: 80px;
    box-shadow: 0px 3px 1px 1px rgba(0, 0, 0, 0.1);
    opacity: 1;
    background-color: rgb(255, 255, 255);

}

.dark-mode .dropdown:hover,
.dark-mode .nav-links p:hover~.dropdown {
    box-shadow: 0px 3px 3px 1px rgba(202, 202, 202, 0.1);
    background-color: #151515;

}

@media (max-width:900px) {
    .modal-content {
        width: 37.25rem;
    }
}

@media (max-width: 950px) {
    .dark-mode .toggle-slot .moon-icon-wrapper {
        transform: translate(1px, 3px) rotate(-15deg);
    }

    .sun-icon-wrapper {
        transform: translate(-3px, 0px) rotate(15deg);
    }

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
        z-index: 11;

    }



    .nav-links,
    .contacto {
        display: none;
    }

    .mobile-menu {
        position: absolute;
        top: 0;
        z-index: 10;
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: #FFF;
    }

    .mobile-menu a {
        display: flex;
        width: 80%;
        padding: 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .mobile-menu a:hover:not(.active-link) {
        border-radius: 10px;
        background: rgba(183, 149, 255, 0.60);
    }

    .dark-mode .mobile-menu {
        background: #1E1E1E;
    }

    .dark-mode .mobile-menu a {
        color: rgb(229, 229, 229);

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
}
</style>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import menuIcon from '/menuicon.svg'
import menuIconClose from '/menuiconclose.svg'

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const menuIconSource = computed(() => {
    return isMenuOpen.value ? menuIconClose : menuIcon
});
const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>


<template>
    <header>
        <nav class="nav-container">
            <div class="nav-container-mini">
                <div class="title">
                    <p>IRENE BUCETA</p>
                </div>
                <div class="menu-icon" :class="{ 'with-shadow': isMenuOpen }" @click="toggleMenu">
                    <img :src="menuIconSource" alt="Hamburger Menu">
                </div>
            </div>

            <div class="nav-links">
                <RouterLink to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
                <RouterLink to="/clases-horarios" @click="closeMenu"
                    :class="{ 'active-link': $route.path === '/clases-horarios' }">Horarios
                </RouterLink>
                <RouterLink to="/cursos" @click="closeMenu" :class="{ 'active-link': $route.path === '/cursos' }">
                    Cursos
                </RouterLink>
            </div>

            <div class="contacto">
                <RouterLink to="/contacto" @click="closeMenu" :class="{ 'active-link': $route.path === '/contacto' }">
                    Contacto</RouterLink>
            </div>
        </nav>

        <div class="mobile-menu" v-if="isMenuOpen">
            <RouterLink to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
            <RouterLink to="/clases-horarios" @click="closeMenu"
                :class="{ 'active-link': $route.path === '/clases-horarios' }">Horarios
            </RouterLink>
            <RouterLink to="/cursos" @click="closeMenu" :class="{ 'active-link': $route.path === '/cursos' }">Cursos
            </RouterLink>
            <RouterLink to="/contacto" @click="closeMenu" :class="{ 'active-link': $route.path === '/contact' }">Contacto
            </RouterLink>
        </div>




    </header>
</template>






<style scoped>
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


nav a,
.mobile-menu a {
    color: #1E1E1E;
    font-family: 'Founders-Grotesk';
    font-size: 20px;
    text-decoration: none;
}

nav .contacto {
    text-align: end;
    margin-right: 5%;
    width: 20%;
}

nav .contacto a {
    color: #FFFFFF;
    width: 78px;
    padding: 10px 15px;
    border-radius: 30px;
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
}

.menu-icon {
    display: none;
    cursor: pointer;
    width: 47px;
}

@media (max-width: 745px) {

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

    .mobile-menu a:hover {
        border-radius: 10px;
        background: rgba(183, 149, 255, 0.60);
    }
}

@media (max-width: 440px) {
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

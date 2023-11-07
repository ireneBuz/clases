<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <header>
        <nav class="nav-container">
            <div class="title">
                <p>IRENE BUCETA</p>
            </div>
            <div class="nav-links">
                <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
                <RouterLink to="/clases-horarios" :class="{ 'active-link': $route.path === '/clases-horarios' }">Horarios
                </RouterLink>
                <RouterLink to="/cursos" :class="{ 'active-link': $route.path === '/cursos' }">Cursos (Proximamente)
                </RouterLink>
            </div>
            <div class="contacto">
                <RouterLink to="/contacto" :class="{ 'active-link': $route.path === '/contact' }">Contacto</RouterLink>
            </div>
        </nav>
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
}

.title {
    width: 20%;
}

.title p {
    font-family: Newake;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.5px;
    padding: 10px;
    background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 60%;

}

.nav-links a {
    margin-left: 32px;
    margin-right: 32px;
}

nav a {
    color: #1E1E1E;
    font-family: 'Founders-Grotesk';
    font-size: 20px;
    text-decoration: none;

}

nav .contacto {
    width: 20%;
}

nav .contacto a {
    color: #FFFFFF;
    width: 78px;
    padding: 10px 15px;
    border-radius: 30px;
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
}
</style>

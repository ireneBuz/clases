<script setup>
import Navigation from './components/Navigation.vue';
import HomePageView from './views/HomePageView.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <header>
    <Navigation />
    <router-view />
    <Footer />
  </header>
</template>

<style scoped></style>

<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <header>
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Footer />
  </header>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(50px);

}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  transform: translateX(50px);

  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>

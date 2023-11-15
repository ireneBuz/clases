<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';

const isDarkModeEnabled = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
const isDarkMode = ref(isDarkModeEnabled());

const updateThemeColor = () => {
  const themeColorMeta = document.getElementById('theme-color-meta');
  themeColorMeta.content = isDarkMode.value ? '#151515' : '#ffffff';
};
onMounted(() => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', () => {
    isDarkMode.value = darkModeMediaQuery.matches;
    updateThemeColor();
  });
});


const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="transition-container">
    <header>
      <Navigation :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" :isDarkMode="isDarkMode"></component>
        </transition>
      </router-view>
      <Footer :isDarkMode="isDarkMode" />
    </header>
  </div>
</template>


<style scoped>
.transition-container {
  transition: background-color 0.4s ease, color 0.4s ease;
}

.dark-mode {
  background-color: #151515;
  color: #e6e6e6;
}




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

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const updateThemeColor = () => {
  const themeColorMeta = document.getElementById('theme-color-meta')
  themeColorMeta.content = isDarkMode.value ? '#151515' : '#ffffff'
}
onMounted(() => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDarkMode.value = darkModeMediaQuery.matches;
  updateThemeColor()

  darkModeMediaQuery.addEventListener('change', () => {
    isDarkMode.value = darkModeMediaQuery.matches
    updateThemeColor()
  })

})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateThemeColor()
}
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="transition-container">
    <header>
      <Navigation :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
      <div id="container">
        <NuxtPage />
      </div>
      <Footer :isDarkMode="isDarkMode" />
    </header>
  </div>
</template>

<style scoped>
#container {
  margin: auto;
  max-width: 1470px;
  min-height: 96vh;
}
</style>
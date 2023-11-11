<script setup>
import comingSoonImg from '/comingSoonImg.svg'

</script>

<template>
  <section>
    <div class="courses">
      <div class="courses-img">
        <img :src="comingSoonImg" alt="">
      </div>
    </div>
  </section>
</template>


<style scoped>
section {
  margin: auto;
  max-width: 1440px;
}

.courses {
  margin-top: 100px;
  margin-bottom: 40vh;
}

.courses-img img {
  width: 100%;
}



@media (max-width: 440px) {
  .courses {
    margin-top: 30vh;
    margin-bottom: 45vh;
  }
}
</style>
<script setup>
import comingSoonImg from '/comingSoonImg.svg'

</script>

<template>
  <header>
    <div class="courses">
      <div class="courses-img">
        <img :src="comingSoonImg" alt="">
      </div>
    </div>
  </header>
</template>


<style scoped>
.courses {
  margin-top: 100px;
  margin-bottom: 40vh;
}

.courses-img img {
  width: 100%;
}


@media (max-width: 745px) {}

@media (max-width: 440px) {
  .courses {
    margin-top: 30vh;
    margin-bottom: 45vh;
  }
}
</style>
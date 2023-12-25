<script setup>
import comingSoonImg from '/comingSoonImg.webp'

</script>

<template>
  <section>
    <div class="courses">
      <img :src="comingSoonImg" alt="">
    </div>
  </section>
</template>


<style scoped>
section {
  margin: auto;
  max-width: 1470px;
  min-height: 96vh;
}


.courses {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.courses img {
  width: 40%;
}


@media (max-width: 740px) {
  .courses {
    margin-top: 200px;
  }
}

@media (max-width: 470px) {
  .courses {
    margin-top: 260px;
  }
}
</style>
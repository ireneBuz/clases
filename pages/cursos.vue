<script setup>
import { coursesMetaData } from './../utils/metaData.js'
useHead(coursesMetaData)

</script>

<template>
  <section>
    <div class="courses">
      <img src="/images/comingSoonImg.webp" alt="">
    </div>
  </section>
</template>


<style scoped>
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
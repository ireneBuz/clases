<script setup>
import blogsService from './../api/blogsService'

const { isDarkMode } = defineProps(['isDarkMode'])
const route = useRoute()
const slides = ref([]);

blogsService.getAllBlogsArticles(route.params.readMoreLink)
  .then(({ data }) => {
    const cognitiveBenefitsMetaData = {
      title: data.metaDataTitleSpa,
      meta: [
        { name: 'description', content: data.metaDataDescriptionSpa },
        { name: 'keywords', content: data.metaDataKeywordsSpa }
      ]
    }
    useHead(cognitiveBenefitsMetaData)
    return slides.value = data;
  })
  .catch(err => console.log('ERROR AL TRAER EL BLOG'))
</script>

<template>
  <section :id=route.readMoreLink :class="[{'dark-mode': isDarkMode}, 'blog-info']">
    <div class="blog-header">
      <div class="image-header">
        <img :src=slides.imageSrc alt="">
      </div>
      <div class="title-header">
        <h2>{{ slides.titleBlogSpa }}</h2>
        <p>{{ slides.excerptArticleSpa }}</p>
        <div class="info">
          <RouterLink role="button" aria-label="Más info" to="/clases-piano">
              Más info</RouterLink>
        </div>
      </div>
    </div>
    <div class="blog-text">
      <div class="blog-paragraph" v-html="slides.articleSpa">
      </div>
    </div>
    <div class="info-end">
          <RouterLink role="button" aria-label="Más info" to="/clases-piano">
              Quiero saber más</RouterLink>
        </div>
  </section>
</template>

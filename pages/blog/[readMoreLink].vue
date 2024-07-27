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
  <section :id=route.readMoreLink :class="{ 'dark-mode': isDarkMode }">
    <div class="blog-header">
      <div class="image-header">
        <img :src=slides.imageSrc alt="">
      </div>
      <div class="title-header">
        <h2>{{ slides.titleBlogSpa }}</h2>
        <p>{{ slides.excerptArticleSpa }}</p>
      </div>
    </div>
    <div class="blog-text">
      <div class="blog-paragraph" v-html="slides.articleSpa">
      </div>
    </div>
  </section>
</template>

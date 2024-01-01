<script setup>
import { gsap } from 'gsap'
import { useRoute } from 'vue-router';
import { openModal, closeModal, showModal } from '~/utils/modal'
import { musicalTheoryMetaData } from './../utils/metaData.js'

const { isDarkMode } = defineProps(['isDarkMode']);

const route = useRoute()

let locationId = route.params.location?.charAt(0).toUpperCase() + route.params.location?.slice(1)
if (!locationId) {
  locationId = 'Madrid'
}
useHead(musicalTheoryMetaData(locationId))


const enter = (el) => {
  gsap.fromTo(el, {
    opacity: 0,
  }, { duration: 0.2, opacity: 1 });
}

const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.2,
    opacity: 0,
    onComplete: done,
  });
}
</script>

<template>
  <section id="teoria-musical" :class="{ 'dark-mode': isDarkMode }">
    <transition @enter="enter" @leave="leave">
      <div v-if="showModal" @close="closeModal">
        <ContactForm :closeModal="closeModal" />
      </div>
    </transition>
    <div class="musical-classes">
      <div class="musical-classes-info">
        <h2>
          ¡Descubre el fascinante mundo de la teoría musical {{ locationId !== 'Madrid' ? `desde ${locationId}` : '' }}!
        </h2>

        <p>¿Siempre has soñado con comprender la música en un nivel más profundo? ¿Te gustaría leer partituras, componer
          tus propias canciones o entender cómo los grandes maestros de la música crearon sus obras maestras? Entonces
          estás en el lugar adecuado.
        </p>
        <p>Ofrezco clases de teoría musical diseñadas para principiantes y aquellos que desean llevar su conocimiento
          musical al siguiente nivel. Mi objetivo es hacer que la teoría musical sea accesible y emocionante para todos,
          sin importar tu nivel de experiencia</p>

        <p v-if="locationId !== 'Madrid'">Comienza tus clases desde {{ locationId }}.</p>

        <h3 v-if="locationId === 'Madrid'">Presencial - 25€/h</h3>
        <h3>Online - 20€/h</h3>
        <div class="musical-classes-info-button">

          <div class="musical-classes-info-button-presential">
            <a role="button" aria-label="Quiero saber más" @click="openModal">
              Quiero saber más</a>
          </div>
        </div>
      </div>

      <div class="musical-classes-img">
        <img src="/images/musicalTheoryImg.webp" alt="">
      </div>
    </div>
  </section>
</template>


<style scoped>
.musical-classes {
  display: flex;
  margin-top: 100px;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 200px;
}

.musical-classes-info {
  color: #000;
  width: 50%;
}

.musical-classes-img {
  margin-left: 5px;
}

.musical-classes-img img {
  width: 100%;
}

.musical-classes-info h2 {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.48px;
}

.musical-classes-info h3 {
  font-family: 'Founders-Grotesk-medium';
  color: #715AFF;
  font-size: 22px;
}

.musical-classes-info p {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.musical-classes-info .musical-classes-info-button {
  display: flex;
  gap: 12px;
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
  font-family: 'Founders-Grotesk-medium';
  padding: 10px 12.344px 6px 12.344px;
  border-radius: 18.517px;
  border: 1.003px solid #F85786;
  background: linear-gradient(60deg, #F85786 13.4%, #F85786 86.6%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  color: #FFF;
  font-size: 18.042px;
  cursor: pointer;
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
  padding: 11px 13.344px 7px 13.344px;
  border: none;
  border-radius: 18.517px;
  color: #FFF;
  -webkit-text-fill-color: white;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
}

.dark-mode h2,
.dark-mode p {
  color: #e6e6e6;
}



@media (max-width: 870px) {
  .musical-classes {
    flex-direction: column-reverse;
    margin-top: 0px;
    margin-bottom: 60px;
    align-items: center;
  }

  .musical-classes-img {
    width: 60%;
    margin-left: 0;
  }

  .musical-classes-img img {
    width: 100%;
    margin-bottom: 50px;
  }

  .musical-classes-info {
    font-family: 'Founders-Grotesk-medium';
    color: #000;
    width: 100%;
  }

}



@media (max-width: 440px) {

  .musical-classes {
    margin-top: 20px;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 40px;
    align-items: center;
  }

  .musical-classes-info h2 {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.32px;
  }

  .musical-classes-info p {
    font-size: 18px;
    letter-spacing: -0.18px;
  }

  .musical-classes-img {
    width: 80%;
  }

  .musical-classes-img img {
    margin-bottom: 40px;
  }

  .musical-classes-info .musical-classes-info-button {
    display: block;
    text-align: center;

  }

  .musical-classes-info-button {
    padding-top: 0px;
  }


  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
    padding-left: 85px;
    padding-right: 85px;
  }

  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
    padding-left: 85px;
    padding-right: 85px;
  }
}

@media (max-width: 400px) {
  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
    padding-left: 70px;
    padding-right: 70px;
  }

  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
    padding-left: 70px;
    padding-right: 70px;
  }
}
</style>
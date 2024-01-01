<script setup>
import { gsap } from 'gsap'
import { useRoute } from 'vue-router';
import { openModal, closeModal, showModal } from '~/utils/modal'
import { pianoMetaData } from './../utils/metaData.js'

const { isDarkMode } = defineProps(['isDarkMode']);

const route = useRoute()

let locationId = route.params.location?.charAt(0).toUpperCase() + route.params.location?.slice(1)
if (!locationId) {
  locationId = 'Madrid'
}
useHead(pianoMetaData(locationId))


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
  <section id="clases-piano" :class="{ 'dark-mode': isDarkMode }">

    <transition @enter="enter" @leave="leave">
      <div v-if="showModal" @close="closeModal">
        <ContactForm :closeModal="closeModal" />
      </div>
    </transition>
    <div class="piano-classes">
      <div class="piano-classes-info">
        <h2>
          ¡Aprende a tocar el piano con pasión y habilidad {{ locationId !== 'Madrid' ? `desde ${locationId}` : '' }}!
        </h2>

        <p>Clases de piano personalizadas, adaptadas a tu nivel y objetivos. Tanto si eres un principiante que sueña con
          tocar tus canciones favoritas como si eres un pianista intermedio que busca perfeccionar su técnica, te guiaré
          en
          cada paso del camino.</p>
        <p>En las clases de piano, los estudiantes descubren la importancia de la técnica, la precisión y la
          interpretación.
          A medida que se avanzan en las lecciones, se exploran piezas clásicas, contemporáneas y composiciones propias,
          desafiando la destreza y la creatividad de quien está al mando del piano.</p>

        <p v-if="locationId !== 'Madrid'">Comienza tus clases desde {{ locationId }}.</p>

        <h3 v-if="locationId === 'Madrid'">Presencial - 25€/h</h3>
        <h3>Online - 20€/h</h3>
        <div class="piano-classes-info-button">

          <div class="piano-classes-info-button-presential">
            <a role="button" aria-label="Quiero saber más" @click="openModal">
              Quiero saber más</a>
          </div>

        </div>
      </div>



      <div class="piano-classes-img">
        <img src="/images/pianoImg.webp" alt="">
      </div>
    </div>
  </section>
</template>


<style scoped>
.piano-classes {
  display: flex;
  margin-top: 100px;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 200px;
}

.piano-classes-info {
  color: #000;
  width: 50%;
}

.piano-classes-img {
  margin-left: 70px;
}

.piano-classes-img img {
  width: 100%;
}

.piano-classes-info h2 {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.48px;
}


.piano-classes-info h3 {
  font-family: 'Founders-Grotesk-medium';
  color: #715AFF;
  font-size: 22px;
}

.piano-classes-info p {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.piano-classes-info .piano-classes-info-button {
  display: flex;
  gap: 12px;
}

.piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a {
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

.piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a:hover {
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
  .piano-classes {
    flex-direction: column-reverse;
    margin-top: 20px;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 200px;
    align-items: center;
  }


  .piano-classes-img {
    width: 40%;
    margin-left: 0;
  }

  .piano-classes-img img {
    width: 100%;
    margin-bottom: 50px;
  }

  .piano-classes-info {
    font-family: 'Founders-Grotesk-medium';
    color: #000;
    width: 100%;
  }
}


@media (max-width: 440px) {
  .piano-classes {
    margin-top: 20px;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 40px;
    align-items: center;
  }

  .piano-classes-info h2 {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.32px;
  }

  .piano-classes-info p {
    font-size: 18px;
    letter-spacing: -0.18px;
  }

  .piano-classes-img {
    width: 80%;
  }

  .piano-classes-img img {
    margin-bottom: 40px;
  }

  .piano-classes-info .piano-classes-info-button {
    text-align: center;
    display: block;
  }

  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a {
    padding-left: 85px;
    padding-right: 85px;
  }

  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a:hover {
    padding-left: 85px;
    padding-right: 85px;
  }


}

@media (max-width: 400px) {
  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a {
    padding-left: 70px;
    padding-right: 70px;
  }

  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a:hover {
    padding-left: 70px;
    padding-right: 70px;
  }
}
</style>
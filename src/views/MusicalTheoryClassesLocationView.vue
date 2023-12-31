<script setup>
import musicalTheoryImg from '/musicalTheoryImg.webp'
import closeModalIcon from '/closeModal.svg'
import ContactForm from './../components/ContactForm.vue'
import { gsap } from 'gsap'
import { ref, defineProps } from 'vue';

const { location } = defineProps(['location']);
let showModal = ref(false);

const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}


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
        <div class='modal'>
          <div class='modal-content'>
            <span class='close' @click="closeModal">
              <img :src="closeModalIcon" alt="">
            </span>
            <ContactForm />
          </div>
        </div>
      </div>
    </transition>
    <div class="musical-classes">
      <div class="musical-classes-info">
        <h2>
          ¡Descubre el fascinante mundo de la teoría musical desde {{ location }}!
        </h2>

        <p>¿Siempre has soñado con comprender la música en un nivel más profundo? ¿Te gustaría leer partituras, componer
          tus propias canciones o entender cómo los grandes maestros de la música crearon sus obras maestras? Entonces
          estás en el lugar adecuado.
        </p>
        <p>Ofrezco clases de teoría musical diseñadas para principiantes y aquellos que desean llevar su conocimiento
          musical al siguiente nivel. Mi objetivo es hacer que la teoría musical sea accesible y emocionante para todos,
          sin importar tu nivel de experiencia</p>
        <p> Apúntate a las clases online desde {{ location }}.</p>

        <h3>¡Desde sólo 20€/h!</h3>
        <div class="musical-classes-info-button">

          <div class="musical-classes-info-button-presential">
            <a @click="openModal">
              Quiero saber más</a>
          </div>
        </div>
      </div>

      <div class="musical-classes-img">
        <img :src="musicalTheoryImg" alt="">
      </div>
    </div>
  </section>
</template>


<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);

}

.modal-content {
  background-color: #eeeeee;
  margin: 3% auto;
  padding: 20px;
  width: 47.25rem;
  height: 43.0625rem;
  border-radius: 40px;
}

.dark-mode .modal-content {
  background-color: #434343;
  color: #e6e6e6;
}


.close {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  transform: translateY(15px) translateX(-15px);
}

section {
  margin: auto;
  max-width: 1470px;
  min-height: 96vh;
}

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

@media (max-width:900px) {
  .modal-content {
    width: 37.25rem;
  }
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

@media (max-width:645px) {
  .modal-content {
    width: 25.25rem;
  }
}

@media (max-width: 440px) {

  .modal-content {
    width: 21.5rem;
  }

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
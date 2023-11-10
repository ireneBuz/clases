<script setup>
import pianoImg from '/pianoImg.svg'

</script>

<template>
  <header>
    <div class="piano-classes">
      <div class="piano-classes-info">
        <h2>
          ¡Aprende a tocar el piano con pasión y habilidad!
        </h2>

        <p>Clases de piano personalizadas, adaptadas a tu nivel y objetivos. Tanto si eres un principiante que sueña con
          tocar tus canciones favoritas como si eres un pianista intermedio que busca perfeccionar su técnica, te guiaré
          en
          cada paso del camino.</p>
        <p>En las clases de piano, los estudiantes descubren la importancia de la técnica, la precisión y la
          interpretación.
          A medida que se avanzan en las lecciones, se exploran piezas clásicas, contemporáneas y composiciones propias,
          desafiando la destreza y la creatividad de quien está al mando del piano.</p>

        <h3>¡Apuntarme!</h3>
        <div class="piano-classes-info-button">

          <div class="piano-classes-info-button-presential">
            <RouterLink to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }">
              Presencial - 25€/h</RouterLink>
          </div>
          <div class="piano-classes-info-button-remote">
            <RouterLink to="/" @click="closeMenu" :class="{ 'active-link': $route.path === '/' }">
              Online - 20€/h</RouterLink>
          </div>
        </div>
      </div>

      <div class="piano-classes-img">
        <img :src="pianoImg" alt="">
      </div>
    </div>
  </header>
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
  font-family: 'Founders-Grotesk';
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
  margin: 0;
  align-self: stretch;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.48px;
}


.piano-classes-info h3 {
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
  padding: 8px 12.344px 6px 12.344px;
  border-radius: 18.517px;
  border: 1.003px solid #A392F6;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.piano-classes-info .piano-classes-info-button .piano-classes-info-button-remote a {
  padding: 9px 12.344px 7px 12.344px;
  border-radius: 18.517px;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
}


.piano-classes-info .piano-classes-info-button .piano-classes-info-button-presential a,
.piano-classes-info .piano-classes-info-button .piano-classes-info-button-remote a {
  text-decoration: none;
  color: #FFF;
  font-size: 14.042px;
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
    font-family: 'Founders-Grotesk';
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
    padding-left: 97px;
    padding-right: 97px;


  }

  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-remote a {
    padding-left: 110px;
    padding-right: 110px;

  }

  .piano-classes-info .piano-classes-info-button .piano-classes-info-button-remote {
    margin-top: 25px;
  }
}
</style>
<script setup>
import musicalTheoryImg from '/musicalTheoryImg.webp'

</script>

<template>
  <section id="teoria-musical">
    <div class="musical-classes">
      <div class="musical-classes-info">
        <h2>
          ¡Descubre el fascinante mundo de la teoría musical!
        </h2>

        <p>¿Siempre has soñado con comprender la música en un nivel más profundo? ¿Te gustaría leer partituras, componer
          tus propias canciones o entender cómo los grandes maestros de la música crearon sus obras maestras? Entonces
          estás en el lugar adecuado.
        </p>
        <p>Ofrezco clases de teoría musical diseñadas para principiantes y aquellos que desean llevar su conocimiento
          musical al siguiente nivel. Mi objetivo es hacer que la teoría musical sea accesible y emocionante para todos,
          sin importar tu nivel de experiencia</p>

        <h3>¡Apuntarme!</h3>
        <div class="musical-classes-info-button">

          <div class="musical-classes-info-button-presential">
            <RouterLink to="/">
              Presencial - 25€/h</RouterLink>
          </div>
          <div class="musical-classes-info-button-remote">
            <RouterLink to="/">
              Online - 20€/h</RouterLink>
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
section {
  margin: auto;
  max-width: 1440px;
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
  font-family: 'Founders-Grotesk';
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
  margin: 0;
  align-self: stretch;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.48px;
}

.musical-classes-info h3 {
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
  padding: 8px 12.344px 6px 12.344px;
  border-radius: 18.517px;
  border: 1.003px solid #A392F6;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-remote a {
  padding: 9px 12.344px 7px 12.344px;
  border-radius: 18.517px;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a,
.musical-classes-info .musical-classes-info-button .musical-classes-info-button-remote a {
  text-decoration: none;
  color: #FFF;
  font-size: 14.042px;
}

.musical-classes-info-button {
  padding-top: 30px;
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
    font-family: 'Founders-Grotesk';
    color: #000;
    width: 100%;
  }

  .musical-classes-info-button {
    padding-top: 30px;
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
    padding-left: 97px;
    padding-right: 97px;


  }

  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-remote a {
    padding-left: 110px;
    padding-right: 110px;

  }


  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-remote {
    margin-top: 25px;
  }
}
</style>
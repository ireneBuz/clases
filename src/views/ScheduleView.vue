<script setup>
import scheduleBackground1 from '/scheduleBackground1.svg'
import scheduleBackground2 from '/scheduleBackground2.svg'

</script>

<template>
  <section id="horarios">
    <div class="schedule-relative">
      <div class="schedule-info">
        <h2>
          Mis clases particulares se adaptan a tus
        </h2>
        <h2>
          necesidades con horarios flexibles.
        </h2>
        <p>De <span>lunes a viernes,</span> puedes elegir entre las mañanas, de <strong>9:00 a 12:00,</strong> para
          empezar
          tu día de estudio con energía, o las tardes, de <strong>17:00 a 21:00,</strong> para repasar y consolidar lo
          aprendido después de tus compromisos diarios. Tu éxito es mi prioridad, y mi horario se ajusta para facilitar tu
          camino hacia el conocimiento y el crecimiento.</p>
      </div>


      <div class="schedule-info-background">
        <div class="schedule-info-background-img1">
          <img :src="scheduleBackground1" alt="">
        </div>
        <div class="schedule-info-background-img2">
          <img :src="scheduleBackground2" alt="">
        </div>

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

.schedule-relative {
  display: flex;
  flex-direction: column;
  min-height: 96vh;
}

.schedule-info {
  font-family: 'Founders-Grotesk-medium';
  color: #000;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: auto;
}

.schedule-info h2 {
  margin: 0;
  align-self: stretch;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
}

.schedule-info p {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.schedule-info p span {
  color: #715AFF;
}

.schedule-info p strong {
  color: #F85786;
}

.schedule-info-background {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;

}

.schedule-info-background .schedule-info-background-img1 {
  transform: translateY(255px);
  margin-top: -30px;
}


@media (max-width: 870px) {

  .schedule-info {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 130px;
  }

  /* .schedule-info h2 {
    font-family: 'Newake';
    font-weight: 500;
  } */

  .schedule-info-background .schedule-info-background-img1 {
    margin-top: 30px;
  }
}

@media (max-width: 440px) {
  .schedule-info {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
  }

  .schedule-info h2 {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.32px;
  }

  .schedule-info p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.18px;
  }

  .schedule-info-background .schedule-info-background-img1,
  .schedule-info-background .schedule-info-background-img2 {
    text-align: end;
  }

  .schedule-info-background .schedule-info-background-img1 img,
  .schedule-info-background .schedule-info-background-img2 img {
    z-index: 1;
    margin-top: 0px;
    width: 70%;
  }

  .schedule-info-background .schedule-info-background-img1 {
    transform: translateY(180px);
    z-index: 1;
    margin-top: -30px;
  }


}
</style>
<script setup>
import { whereToStartMetaData } from './../utils/metaData.js'

const { isDarkMode } = defineProps(['isDarkMode'])

useHead(whereToStartMetaData)
</script>

<template>
  <section id="getting-started-blog" :class="{ 'dark-mode': isDarkMode }">
    <div class="blog-header">
      <div class="image-header">
        <img src="/images/blog6.webp" alt="music-woman">
      </div>
      <div class="title-header">
        <h2>¿Música a cualquier edad?</h2>
        <p>La música es un arte que acoge a todos, sin importar la edad que se tenga al empezar su estudio. Ya sea que
          estés en tus años de formación temprana o buscando nuevas pasiones en tu vida adulta, aprender piano y teoría
          musical puede ser una experiencia transformadora y enriquecedora.

        </p>
      </div>
    </div>
    <div class="blog-text">
      <div class="blog-paragraph">

        <p><b>1. La mente es una esponja en cualquier etapa de la vida:</b> Aunque se ha dicho que los niños tienen una
          habilidad especial para absorber conocimientos, la ciencia ha demostrado que los adultos también tienen una
          notable capacidad de aprendizaje. Estudios recientes en neurociencia muestran que el cerebro adulto es
          plástico, lo que significa que tiene la capacidad de adaptarse y cambiar en respuesta a nuevas experiencias,
          como aprender a tocar un instrumento. De hecho, algunos adultos pueden tener una ventaja al tener una mayor
          disciplina y enfoque que les permite avanzar rápidamente en su aprendizaje musical.</p>

        <p><b>2. Beneficios para la salud mental y emocional:</b> La música tiene un poderoso efecto en nuestras
          emociones y bienestar general. Estudiar piano y teoría musical no solo mejora la coordinación, la
          concentración y la memoria, sino que también puede ser una forma terapéutica de expresar emociones. Tocar un
          instrumento puede reducir el estrés, aumentar la autoestima y proporcionar una sensación de logro y
          satisfacción personal que trasciende cualquier edad.</p>

        <p><b>3. Una habilidad que te acompañará siempre:</b> Aprender música es como abrir una puerta hacia un universo
          infinito de posibilidades. Ya sea que sueñes con componer tus propias canciones, tocar en un escenario frente
          a una audiencia o simplemente disfrutar de momentos íntimos creando música para ti mismo, el piano y la teoría
          musical te brindan las herramientas para explorar y desarrollar tu creatividad sin límites de edad.

        </p>

        <p><b>4. Comprenderás tu música y tus canciones favoritas de una manera nueva:</b> Conocer la teoría musical te
          abrirá las puertas para entender tus canciones favoritas de una manera completamente nueva. Podrás identificar
          los acordes, las progresiones, las estructuras melódicas y los recursos estilísticos utilizados por tus
          artistas preferidos. Esta comprensión más profunda no solo te permitirá disfrutar más de la música que
          escuchas, sino que también te brindará las herramientas para crear tus propias composiciones si así lo deseas,
          utilizando esos mismos recursos.</p>

        <p><b>5. Descubrirás música de diferentes épocas y culturas:</b> Al estudiar piano y teoría musical, tendrás la
          oportunidad de conocer en un vasto repertorio de obras maestras musicales que abarcan diversas épocas y
          culturas. Desde las majestuosas composiciones de Beethoven hasta los apasionados tangos argentinos de
          Piazzolla, los Beatles, tus bandas sonoras favoritas, o el último éxito de los 40. Esto te permitirá no solo
          apreciar la música de una manera más profunda, sino también entenderla desde su contexto histórico y cultural,
          enriqueciendo tu experiencia auditiva.

        </p>


        <p>Nunca es tarde ni demasiado temprano para sumergirse en el maravilloso mundo de la música. Los beneficios son
          innumerables, desde mejorar la salud mental y emocional hasta abrir puertas a nuevas experiencias sociales,
          culturales y de autoexpresión. Así que, ¿por qué esperar? </p>

        <p>¡Puedes empezar hoy mismo!</p>

      </div>
    </div>
  </section>
</template>

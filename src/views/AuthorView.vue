<template>
  <div class="container py-4">
    <div class="row p-5 mb-4 bg-light rounded-3">
      <div class="col-12 col-lg-6 py-5">
        <p class="col-12 col-lg-8 fs-4">Stephen King es un escritor estadounidense de novelas de terror, ficción sobrenatural,
          misterio, ciencia ficción y literatura fantástica. Sus libros han vendido más de 350 millones de ejemplares
          y en su mayoría han sido adaptados al cine y a la televisión.</p>
        <a href="https://es.wikipedia.org/wiki/Stephen_King" class="btn btn-primary btn-lg" target="_blank">Más Información</a>
      </div>
      <div class="col-12 col-lg-6 py-5">
        <img src="@/assets/Autor.jpg" alt="Imagen de Stephen King" class="img-fluid rounded-4">
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Desdeñado por críticos</h2>
          <p>Y académicos literarios por ser considerado un autor «comercial», su obra ha
            generado mayor atención desde la década de 1990, aunque algunos de estos círculos continúan rechazando sus
            libros.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>King ha ganado numerosos premios literarios</h2>
          <p>Incluyendo el Premio Bram Stoker , el Premio
            British Fantasy , los Premios Locus , el Premio Mundial de Fantasía , el Premio Edgar y los
            premios Hugo y O. Henry .</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorView"
}
</script>

<style scoped>

</style>
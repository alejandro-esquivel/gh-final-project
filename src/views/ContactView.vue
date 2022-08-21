<template>
  <div class="container py-4">
    <form id="contactForm">
      <div class="mb-3">
        <label class="form-label" for="name">Nombre</label>
        <input class="form-control" id="name" type="text" placeholder="Name"/>
      </div>
      <div class="mb-3">
        <label class="form-label" for="email">Correo electrónico</label>
        <input class="form-control" id="email" type="email" placeholder="Email Address"/>
      </div>
      <div class="mb-3">
        <label class="form-label" for="message">Mensaje</label>
        <textarea class="form-control" id="message" type="text" placeholder="Mensaje" style="height: 10rem;"></textarea>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>

</style>
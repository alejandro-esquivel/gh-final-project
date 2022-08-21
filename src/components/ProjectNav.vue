<template>
  <nav class="navbar navbar-expand-lg mb-4" style="background-color: #cfe2ff;">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" alt="" width="30" height="24"
             class="d-inline-block align-text-top">
        Proyecto Final GeeksHub
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Contenedor vacío para adherir los enlaces a la derecha -->
      <div class="container"></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/autor" class="nav-link">Autor</router-link>
          </li>
          <li class="nav-item">
            <router-link to="contacto" class="nav-link">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ProjectNav"
}
</script>

<style scoped>


</style>
<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #cfe2ff;">
    <div class="container-fluid">
      <router-link to="home" class="navbar-brand">Proyecto Final GeeksHub</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" active-class="active" aria-current="page">Inicio</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Autor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
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
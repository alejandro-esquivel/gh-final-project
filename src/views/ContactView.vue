<template>
  <div class="container py-4 contact-form">
    <transition name="formLoad" mode="out-in">
      <form id="contactForm" v-if="cargado" @change="checkFormValidity()">
        <div class="mb-3">
          <label class="form-label" for="name">Nombre</label>
          <input class="form-control" id="name" type="text" placeholder="Nombre" v-model="name" @input="nameChange"/>
          <transition name="invalidInput" mode="out-in">
            <div class="invalid-feedback d-block" v-if="nombreInvalido">
              Introduce un nombre.
            </div>
          </transition>

        </div>
        <div class="mb-3">
          <label class="form-label" for="email">Correo electrónico</label>
          <input class="form-control" id="email" type="email" placeholder="Correo" v-model="email"
                 @input="mailChange"/>
          <transition name="invalidInput" mode="out-in">
            <div class="invalid-feedback d-block" v-if="correoInvalido">
              Introduce un correo válido.
            </div>
          </transition>
        </div>
        <div class="mb-3">
          <label class="form-label" for="message">Mensaje</label>
          <textarea v-model="content" class="form-control" id="content" placeholder="Mensaje"
                    style="height: 10rem;" @input="contentChange">
          </textarea>
          <transition name="invalidInput" mode="out-in">
            <div class="invalid-feedback d-block" v-if="mensajeInvalido">
              Introduce un mensaje.
            </div>
          </transition>
        </div>
        <div class="d-grid">
          <base-button>
            <button class="btn btn-primary btn-lg" type="submit" :disabled="disabled">
              Enviar
            </button>
          </base-button>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

import baseButton from "@/components/BaseButton";

export default {
  name: "ContactView",
  components: {
    "base-button": baseButton
  },
  data() {
    return {
      cargado: false,
      nombreInvalido: null,
      correoInvalido: null,
      mensajeInvalido: null
    }
  },
  methods: {
    nameChange(e) {
      // Debouncing de la validación de 500 ms
      clearInterval(espera);
      let espera = setTimeout(() => {
        this.nombreInvalido = e.target.value.length === 0;
      }, 500);
    },
    mailChange(e) {
      clearInterval(espera);
      let espera = setTimeout(() => {
        this.correoInvalido = e.target.value.length === 0;
      }, 500);

    },
    contentChange(e) {
      clearInterval(espera);
      let espera = setTimeout(() => {
        this.mensajeInvalido = e.target.value.length === 0;
      }, 250);
    },
    checkFormValidity() {
      if (this.mensajeInvalido === true && this.nombreInvalido === true && this.correoInvalido === true) {
        this.setDisabledState(true)
      } else {
        this.setDisabledState(false)
      }
    },
    ...mapMutations({
      setDisabledState: "setDisabledState"
    }),
    ...mapGetters({
      getName: "getName",
      getEmail: "getEmail",
      getContent: "getContent",
      getDisabled: "getDisabled"
    })
  },
  computed: {
    name: {
      get() {
        return this.getName()
      },
      set(value) {
        this.$store.commit('updateName', value)
      }
    },
    email: {
      get() {
        return this.getEmail()
      },
      set(value) {
        this.$store.commit('updateEmail', value)
      }
    },
    content: {
      get() {
        return this.getContent()
      },
      set(value) {
        this.$store.commit('updateContent', value)
      }
    },
    disabled: {
      get() {
        return this.getDisabled();
      }
    }
  },
  mounted() {
    this.cargado = true;
  }
}
</script>

<style scoped>
.formLoad-enter-active {
  animation: bounceInLeft .5s;
  animation-fill-mode: forwards;
}

.invalidInput-enter-active {
  animation: shakeX 1s;
  animation-fill-mode: forwards;
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}


</style>
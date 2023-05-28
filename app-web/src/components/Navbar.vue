<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Proyecto</a>
      <div class="container-fluid">
        <ul class="navbar-nav" v-if="autenticado">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/usuarios">Usuarios</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/grafica">Gráfica</RouterLink>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger mx-1" @click="cerrarSesion()">Salir</button>
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/registro">Registro</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useUsuarioStore } from '@/stores/usuarioStore';
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue'
import {RouterLink} from 'vue-router'

export default defineComponent({
  setup() {
  },
  methods:{
    ...mapActions(useUsuarioStore,['cerrarSesion']),
  },
  computed:{
    ...mapState(useUsuarioStore,['autenticado']),
  }
})
</script>


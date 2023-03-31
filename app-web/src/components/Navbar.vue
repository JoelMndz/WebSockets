<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Proyecto</a>
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Usuarios</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/grafica">Gráfica</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {RouterLink} from 'vue-router'

export default defineComponent({
  setup() {
    
  },
})
</script>


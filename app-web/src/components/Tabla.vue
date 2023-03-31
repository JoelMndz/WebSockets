<template>
  <div class="col-10">
    <h4>Lista de usuarios</h4>
    <button class="btn btn-success" @click="mostrar = true">Agregar</button>
    <table class="table col-10">
      <thead>
        <tr>
          <th scope="col">Apellido</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Sexo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in usuarios" :key="index">
          <td>{{item.nombre}}</td>
          <td>{{item.apellido}}</td>
          <td>{{item.edad}}</td>
          <td>{{item.sexo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import {mapState} from 'pinia'
import { useUsuarioStore } from '@/stores/usuarioStore'

export default defineComponent({
  setup() {
    const mostrar = inject('mostrar');
    return{
      mostrar
    }
  },
  computed:{
    ...mapState(useUsuarioStore,['usuarios']),
  }
})
</script>


<style>

</style>
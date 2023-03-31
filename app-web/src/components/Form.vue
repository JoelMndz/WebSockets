<template>
  <div class="card col-10 col-md-5">
    <form @submit.prevent="procesarFormulario()" class="card-body">
      <h4 class="text-center">Agregar Usuario</h4>
      <div class="mb-2">
        <input class="form-control" maxlength="90" type="text" placeholder="Nombres" required v-model="usuario.nombre"> 
      </div>
      <div class="mb-2">
        <input class="form-control" maxlength="90" type="text" placeholder="Apellidos" required v-model="usuario.apellido"> 
      </div>
      <div class="mb-2">
        <input class="form-control" min="1" max="125" type="number" placeholder="Edad" required v-model="usuario.edad"> 
      </div>
      <div class="mb-2">
        <select class="form-select" v-model="usuario.sexo" required>
          <option value="">Selccione el sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div class="mb-2">
        <select class="form-select" v-model="usuario.gestor" required>
          <option value="">Selccione la BD</option>
          <option value="mssql">Sql Server</option>
          <option value="oracle">Oracle</option>
          <option value="mysql">Mysql</option>
        </select>
      </div>
      <button class="btn btn-primary w-100 mt-2">Agregar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import {mapActions} from 'pinia'
import { useUsuarioStore } from '@/stores/usuarioStore';


export default defineComponent({
  setup() {
    const usuario = reactive({
      nombre:'',
      apellido:'',
      sexo:'',
      edad:0,
      gestor:''
    })
    const mostrar = inject('mostrar');
    return{
      usuario,
      mostrar
    }
  },
  methods:{
    ...mapActions(useUsuarioStore,['agregarUsuario']),
    procesarFormulario(){
      
      this.agregarUsuario(this.usuario);
      
      this.usuario.nombre='',
      this.usuario.apellido='',
      this.usuario.sexo='';
      this.usuario.edad = 0;
      this.usuario.gestor = '';
      this.mostrar = false;
    }
  }
})
</script>


<style>

</style>
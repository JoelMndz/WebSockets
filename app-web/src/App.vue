
<template>
  <Navbar/>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { defineComponent } from 'vue'
import {mapActions} from 'pinia'
import { useUsuarioStore } from './stores/usuarioStore'


export default defineComponent({
  components:{Navbar},
  setup(){
    
  },
  methods:{
    ...mapActions(useUsuarioStore,['conexion']),
  },
  created(){
    this.conexion();
  }
})
</script>


<style scoped>

</style>

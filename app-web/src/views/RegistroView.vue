<template>
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div v-if="qr" class="card" style="max-width: 350px;">
          <h6>Registro existoso! Escanea el codigo QR con Google Authenticator</h6>
          <img :src="qr">
          <RouterLink to="/">Ir al login</RouterLink>
        </div>
        <div v-else class="card col-10 col-md-5">
          <form @submit.prevent="procesarFormulario()" class="card-body">
            <h4 class="text-center">Registro</h4>
            <div class="mb-2">
              <input class="form-control" maxlength="90" type="text" placeholder="Nombres" required v-model="staff.nombres"> 
            </div>
            <div class="mb-2">
              <input class="form-control" maxlength="90" type="text" placeholder="Email" required v-model="staff.email"> 
            </div>
            <div class="mb-2">
              <input class="form-control" maxlength="90" type="password" placeholder="Password" required v-model="staff.password"> 
            </div>
            <button class="btn btn-primary w-100 mt-2">Registrarse</button>
          </form>
        </div>        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { useUsuarioStore } from '@/stores/usuarioStore';
import { mapActions, mapState } from 'pinia';
import { defineComponent, reactive} from 'vue'
import { RouterLink } from 'vue-router';
  
  export default defineComponent({
    setup() {
        const staff = reactive({
            nombres: "",
            email: "",
            password: ""
        });
        return {
            staff
        };
    },
    methods: {
        ...mapActions(useUsuarioStore, ["registarStaff","resetearQR"]),
        procesarFormulario() {
            this.registarStaff(this.staff);
        }
    },
    computed: {
        ...mapState(useUsuarioStore, ["qr"]),
    },
    components: { RouterLink },
    created(){
      this.resetearQR();
    }
})
  </script>
  
  
  
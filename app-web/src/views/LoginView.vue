<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="card col-10 col-md-5">
        <form @submit.prevent="procesarFormulario()" class="card-body">
          <h4 class="text-center">Login</h4>
          <div class="mb-2">
            <input class="form-control" maxlength="90" type="text" placeholder="Email" required v-model="staff.email"> 
          </div>
          <div class="mb-2">
            <input class="form-control" maxlength="90" type="password" placeholder="Password" required v-model="staff.password"> 
          </div>
          <div class="mb-2">
            <input class="form-control" maxlength="90" type="text" placeholder="Código de google authenticator" required v-model="staff.codigo"> 
          </div>
          <button class="btn btn-primary w-100 mt-2">Ingresar</button>
        </form>
      </div>        
    </div>
  </div>
</template>

<script lang="ts">
import { useUsuarioStore } from '@/stores/usuarioStore';
import { mapActions, mapState } from 'pinia';
import { defineComponent, reactive} from 'vue'

export default defineComponent({
  setup() {
    const staff = reactive({
        email: "",
        password: "",
        codigo: ""
    });
    return {
        staff
    };
  },
  methods: {
    ...mapActions(useUsuarioStore, ["loginStaff"]),
    procesarFormulario() {
      this.loginStaff(this.staff);
    }
  },
  computed: {
    ...mapState(useUsuarioStore, ["error"]),
  },
})
</script>



<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <Form v-if="mostrar"/>
      <Tabla v-else/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Tabla from '../components/Tabla.vue'
import Form from '../components/Form.vue'

export default defineComponent({
  components: {
    Tabla,
    Form
  },
  setup() {
    const mostrar = ref(false);
    provide('mostrar',mostrar);
    return {mostrar}
  },
})
</script>



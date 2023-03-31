<template>
  <div class="container">
    <div class="row mt-3 justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <h4>Gráfico de sexos</h4>
          </div>
          <div class="card-body">
            <Pie :data="getDatosSexo()"/>            
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <h4>Gráfico de edades</h4>
          </div>
          <div class="card-body">
            <Bar :data="getDatosEdades()"/>        
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState} from 'pinia'
import { useUsuarioStore } from '../stores/usuarioStore'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement } from 'chart.js'
import { Pie,Bar } from 'vue-chartjs'

ChartJS.register(ArcElement,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  components:{
    Pie,
    Bar
  },
  setup() {
    
    return{
      
    }
  },
  methods:{
    getDatosSexo(){
      const data={
        labels: ['Masculino','Femenino'],
        datasets: [
          {
            backgroundColor: ['#3965F5', '#EF4CE9'],
            data: [
              this.usuarios.filter((x:any) => x.sexo === 'masculino').length,
              this.usuarios.filter((x:any) => x.sexo !== 'masculino').length
              ]
          }
        ]
      }
      return data;
    },
    getDatosEdades(){
      let edades:number[] = [];
      let cantidades:number[] = []
      this.usuarios.forEach((x:any) =>{
        if(edades.indexOf(x.edad) == -1){
          edades.push(x.edad);
          cantidades.push(0);
        }
      })
      edades.forEach((edad:number, i:number) =>{
        this.usuarios.forEach((x:any)=>{
          if(x.edad == edad){
            cantidades[i]++;
          }
        });
      })
      return {
        labels: edades,
        datasets: [
          {
            label: 'Edades',
            backgroundColor: '#f87979',
            data: cantidades
          }
        ]}
    }
  },
  computed:{
    ...mapState(useUsuarioStore, ['usuarios']),
  }
})
</script>


<style>

</style>

import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

interface IState{
  usuarios: any,
  $socket: Socket | null;
}

const SERVIDOR = 'http://localhost:3000';

export const useUsuarioStore = defineStore('usuarios',{
  state:():IState=>{
    return{
      usuarios: [],
      $socket: null,
    }
  },
  actions:{
    conexion(){
      const socket: Socket = io(SERVIDOR)
      socket.on('connect', () => {
        console.log('Conectado');
      })

      socket.on('server:obtenerUsuarios', (data)=>{    
        this.usuarios = data.data;   
      });

      this.$socket = socket;
    },
    agregarUsuario(usuario:any){
      this.$socket?.emit('cliente:agregarUsuario', usuario);
    }
  }
});
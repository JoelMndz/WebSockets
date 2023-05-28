import router from '@/router';
import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

interface IState{
  qr: string | null,
  autenticado: boolean,
  usuarios: any,
  $socket: Socket | null,
  error: string | null,
}

const SERVIDOR = 'http://localhost:3000';

export const useUsuarioStore = defineStore('usuarios',{
  state:():IState=>{
    return{
      usuarios: [],
      $socket: null,
      autenticado: false,
      qr: null,
      error: null,
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

      socket.on('server:enviarQR', (data)=>{  
        this.qr = data.qr;         
      });

      socket.on('server:loginStaff', (data)=>{  
        console.log(data);
        
        if(data.error){
          this.error = data.error;
          this.autenticado = false;  
          return; 
        }
        this.error = null;
        this.autenticado = true;    
        router.push('/usuarios')          
      });

      this.$socket = socket;
    },
    agregarUsuario(usuario:any){
      this.$socket?.emit('cliente:agregarUsuario', usuario);
    },
    registarStaff(staff:any){
      this.$socket?.emit('cliente:registrarStaff', staff);
    },
    loginStaff(credenciales:any){
      this.$socket?.emit('cliente:loginStaff', credenciales);
    },
    resetearQR(){
      this.qr = null;
    },
    resetearError(){
      this.error = null;
    },
    cerrarSesion(){
      this.autenticado = false;
      router.push('/');
    }
  }
});
import express from 'express';
import {Server} from 'socket.io';

import {PORT} from './config'
import {obtenerUsuarios} from './servicios/obtenerUsuarios';
import {insertarUsuario} from './servicios/insertarUsuario'

const app = express();

const server = app.listen(PORT,()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);      
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', async(socket)=>{
  const usuarios:any = {data:[]};

  console.log('Nueva conexion!');
  
  usuarios.data = await obtenerUsuarios();
  io.emit('server:obtenerUsuarios', usuarios);

  socket.on('cliente:agregarUsuario', async(data)=>{
    await insertarUsuario(data);  
    usuarios.data = await obtenerUsuarios();
    io.emit('server:obtenerUsuarios', usuarios);

  })

});
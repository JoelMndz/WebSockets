import {conectarOracle} from '../db/oracle'
import {conectarMysql} from '../db/mysql'
import {conectarMSSQL} from '../db/mssql';


export const insertarUsuario = async(usuario:any)=>{
  try {
    const sql = `
    insert into usuarios(nombre, apellido, sexo, edad) 
    values('${usuario.nombre}','${usuario.apellido}','${usuario.sexo}',${usuario.edad})`;
    switch (usuario.gestor) {
      case 'oracle':
        await insertarOracle(sql);
        break;
      case 'mssql':
        await insertarSqlSever(sql);
        break;
      case 'mysql':
        await insertarMysql(sql);
        break;
    }
  } catch (error) {
    console.log(error);    
  }
}

const insertarMysql = async(sql:string)=>{
  const conexion = conectarMysql();
  const result:any = await conexion.query(sql);
  await conexion.end()
  return result[0];
} 

const insertarOracle = async(sql:string)=>{
  const conexion = await conectarOracle();
  const resultado:any =  await conexion?.execute(sql);
  await conexion?.commit(),
  await conexion?.close()
  return resultado;
}

const insertarSqlSever = async(sql:string)=>{
  const conexion = await conectarMSSQL();
  const usuarios = await conexion.request().query(sql);
  await conexion.close();
  return usuarios.recordset;
}
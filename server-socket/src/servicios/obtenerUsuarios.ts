import {conectarOracle} from '../db/oracle'
import {conectarMysql} from '../db/mysql'
import {conectarMSSQL} from '../db/mssql';

export const obtenerUsuarios = async():Promise<any[]>=>{
  let usuarios:any = [];
  try {
    const usuariosOracle = await obtenerUsuariosOracle();
    const usuariosMysql = await obtenerUsuariosMysql();
    await obtenerUsuariosSqlSever();
    const usuariosMSSQL = await obtenerUsuariosSqlSever();
  
    usuarios = [
      ...usuariosOracle,
      ...usuariosMysql,
      ...usuariosMSSQL,
    ]
  } catch (error) {
    console.log(error);
    
  }

  return usuarios;
}

const obtenerUsuariosOracle = async()=>{
  const conexion = await conectarOracle();
  const resultado:any =  await conexion?.execute('select * from usuarios');
  const data = resultado?.rows?.map((x:any) => {
    return{
      nombre: x[0],
      apellido: x[1],
      edad:x[2],
      sexo: x[3]
    }
  })
  conexion?.close();
  return data || [];
}

const obtenerUsuariosMysql = async()=>{
  const conexion = conectarMysql();
  const result:any = await conexion.query('select * from usuarios');
  await conexion.end()
  return result[0];
}

const obtenerUsuariosSqlSever = async()=>{
  const conexion = await conectarMSSQL();
  const usuarios = await conexion.request().query('select * from usuarios');
  await conexion.close();
  return usuarios.recordset;
}
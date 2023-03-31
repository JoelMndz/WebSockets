import oracledb from 'oracledb'
import { HOST_ORACLE, PASSWORD_ORACLE, USER_ORACLE } from '../config'

oracledb.initOracleClient({libDir:'C:\\Driver Oracle\\instantclient_18_5'})

export async function conectarOracle() {
  try {
    // Configura los parámetros de la conexión a la base de datos Oracle
    return await oracledb.getConnection({
      user: USER_ORACLE,
      password: PASSWORD_ORACLE,
      connectString: HOST_ORACLE,
    });

  } catch (error) {
    console.error('Error al conectarse a Oracle Database', error);
  }
}
import {createPool} from 'mysql2/promise'
import { BD_MYSQL, HOST_MYSQL, PASSWORD_MYSQL, USER_MYSQL } from '../config'

export function conectarMysql(){
  const connection = createPool({
    host:HOST_MYSQL,
    user:USER_MYSQL,
    password:PASSWORD_MYSQL,
    database:BD_MYSQL,
    connectionLimit: 10
  });

  return connection;
}
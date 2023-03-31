import {config} from 'dotenv'

if(process.env.NODE_ENV !== 'production'){
  config();
}

export const PORT = process.env.PORT;
export const USER_ORACLE = process.env.USER_ORACLE;
export const PASSWORD_ORACLE = process.env.PASSWORD_ORACLE;
export const HOST_ORACLE = process.env.HOST_ORACLE;
export const USER_MYSQL=process.env.USER_MYSQL;
export const PASSWORD_MYSQL=process.env.PASSWORD_MYSQL;
export const HOST_MYSQL=process.env.HOST_MYSQL;
export const BD_MYSQL=process.env.BD_MYSQL;
export const USER_MSSQL=process.env.USER_MSSQL
export const PASSWORD_MSSQL=process.env.PASSWORD_MSSQL
export const HOST_MSSQL=process.env.HOST_MSSQL
export const DB_MSSQL=process.env.DB_MSSQL
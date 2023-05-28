import speakeasy from 'speakeasy';

import {conectarMysql} from '../db/mysql';

interface ILogin{
    email: string,
    password: string,
    codigo: string
}

export const loginStaff = async(request:ILogin):Promise<any> =>{
    const conexion = conectarMysql();
    const sql = `select * from staff where email='${request.email}' and password='${request.password}'`;
    const result:any = await conexion.query(sql);
    if(result[0].length == 0){
        return {error:'Credenciales incorrectas!'}
    }
    const usuario:any = result[0][0];
    await conexion.end();
    const verificado = speakeasy.totp.verify({
        secret: usuario.dosFA,
        encoding: 'base32',
        token: request.codigo,
        window: 2,
      });    

    if(!verificado){
        return {error:'El código no es válido!'}
    }

    return usuario;
}
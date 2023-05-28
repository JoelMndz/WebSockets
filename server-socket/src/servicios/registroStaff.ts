import speakeasy from 'speakeasy';
import qrcode from 'qrcode';

import {conectarMysql} from '../db/mysql';

interface IStaff{
    nombres: string,
    email: string,
    password: string
}

const generarQR = async(base32:string)=>{
    const otpAuthURL = speakeasy.otpauthURL({
        secret: base32,
        label: 'App',
        issuer: 'App',
        encoding: 'base32'
      });
      
      return await qrcode.toDataURL(otpAuthURL)
}

export const registrarStaff = async(staff:IStaff):Promise<any> =>{
    const secret = speakeasy.generateSecret({ length: 10, name:'App', issuer:'App' });
    const dosFA = secret.base32;
    const qr = await generarQR(dosFA);

    const conexion = conectarMysql();

    const result:any = await conexion.query(`select * from staff where email='${staff.email}'`);
    if(result[0].length > 0){
        return {error:'El email ya está registrado!'}
    }
    const sql = `insert into staff(nombres, email, password, dosFA, qr) 
                    values('${staff.nombres}','${staff.email}','${staff.password}','${dosFA}','${qr}')`;
    await conexion.query(sql);
    await conexion.end();

    return {qr};
}
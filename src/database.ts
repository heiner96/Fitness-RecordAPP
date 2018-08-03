export interface IEjercicio
{
	descripcion : string;
	explicacion : string;
    imagen : string;
 	tiempo : number;
 	musculo : number;
 	id? : number;
}
export class Ejercicio implements IEjercicio
{
	descripcion : string;
	explicacion : string;
    imagen : string;
 	tiempo : number;
 	musculo : number;
 	id? : number;
	constructor(pDescripcion? : string, pExplicacion? : string, pId?: number, pImagen? : string, pTiempo? : number, pMusculo? : number)
	{
		this.descripcion=pDescripcion;
		this.explicacion=pExplicacion;
		if(pId)this.id=pId;
		this.imagen=pImagen;
		this.tiempo=pTiempo;
		this.musculo=pMusculo;
	}
}
export interface IUser
{
	id?: number;
	email: string;
	password: string;
	diaPago: number;
	token: string;
	edad: Date;
	idGimnasio: number;
	rol: number;
	at: string;
}
export class User implements IUser
{
	id? : number;
	email: string;
	password: string;
	diaPago: number;
	token: string;
	edad: Date;
	idGimnasio: number;
	rol: number;
	at: string;
	constructor(pId? : number, pEmail?: string, pPassword? : string, pDiaPago?: number, pToken?: string, pEdad?: Date, pIdGimnasio?: number, pRol?: number, pAt?: string)
	{
		this.edad = new Date();
		if(pId)this.id=pId;
		this.email=pEmail;
		this.password=pPassword;
		this.diaPago=pDiaPago;
		this.token=pToken;
		this.edad=pEdad;
		this.idGimnasio=pIdGimnasio;
		this.rol=pRol;
		this.at=pAt;
	}
}
export class UserL implements IUser
{	
	id?: number;
	email: string;
	password: string;
	diaPago: number;
	token: string;
	edad: Date;
	idGimnasio: number;
	rol: number;
	at: string;
	constructor(pEmail: string, pPassword: string)
	{
		this.email=pEmail;
		this.password=pPassword;
	}
}
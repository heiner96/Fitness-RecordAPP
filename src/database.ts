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
	explicacion : string;
    imagen : string;
 	tiempo : number;
 	musculo : number;
 	id? : number;
	constructor(public descripcion : string, pExplicacion? : string, pId?: number, pImagen? : string, pTiempo? : number, pMusculo? : number)
	{
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
	diaPago: number;
	token: string;
	edad: Date;
	idGimnasio: number;
	rol: number;
	at: string;
	constructor(pId? : number, pEmail?: string, pDiaPago?: number, pToken?: string, pEdad?: Date, pIdGimnasio?: number, pRol?: number, pAt?: string)
	{
		this.edad = new Date();
		if(pId)this.id=pId;
		this.email=pEmail;
		this.diaPago=pDiaPago;
		this.token=pToken;
		this.edad=pEdad;
		this.idGimnasio=pIdGimnasio;
		this.rol=pRol;
		this.at=pAt;
	}
}

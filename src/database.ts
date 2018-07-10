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
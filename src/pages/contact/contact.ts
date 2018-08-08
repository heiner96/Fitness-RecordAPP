import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  idG: number ;
  codigo: string;
  constructor(public navCtrl: NavController, private servicio: AuthService) {
  	this.actualizar();
  }
  ionViewWillEnter(){
    this.actualizar();
  }

  salirse(){
  	 this.servicio.salirseGym(this.servicio.user.at).done((datas)=>{  	 	
  	 	this.actualizar();
  	 })
  }
  actualizar()
  {
  	this.servicio.checkGym(this.servicio.user.at).done((datas)=>{
  		this.servicio.user.idGimnasio=datas['idGimnasio'];
  		if(this.servicio.user.idGimnasio==1){
	  		this.idG=1;
	  	}else{
	  		this.idG=this.servicio.user.idGimnasio;
	  	}
  	});
  
  }
  meterGimnasio(){
	this.servicio.revisarCodigo( this.servicio.user.at , this.codigo ).done((datas)=>{
	  	this.servicio.joinGym( this.servicio.user.at , datas['id'] ).done((data)=>{
	  		this.actualizar();
	  	});
	});  	
  }
}

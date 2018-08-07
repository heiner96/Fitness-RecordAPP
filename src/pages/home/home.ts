import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{
	ejerciciosPage1=EjerciciosPage;
	repeticiones : number
  constructor(public navCtrl: NavController,private servicio: AuthService) {
  	 this.getRepeticiones(this.servicio.user.at);
  }
  ionViewDidLoad() {
   
  }
  showEjercicios(tipoMusculo : number){//13
  }
  getRepeticiones(access_token){
  	this.servicio.getRepeticiones(access_token).done((data) => {      
      this.repeticiones=data['repeticiones'];
  	});
  }
}

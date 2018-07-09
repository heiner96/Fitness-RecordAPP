import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EjerciciosPage } from '../ejercicios/ejercicios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{
	ejerciciosPage1=EjerciciosPage;

  constructor(public navCtrl: NavController) {
  	
  }
  showEjercicios(tipoMusculo : number){//13
  }
}

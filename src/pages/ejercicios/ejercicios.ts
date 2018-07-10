import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController  } from 'ionic-angular';
import { Ejercicio } from '../../database';
import { EjercicioPage } from '../ejercicio/ejercicio';
/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {
  ejercicios : Ejercicio [];	
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			 public modalCtrl: ModalController) {
  	this.ejercicios=[
  	{
  		descripcion:'PECHO PLANO',
		explicacion:'hago donde quiera',
		id:1,
		imagen:'https://medellinfit-medellinfit.netdna-ssl.com/wp-content/uploads/2015/12/Press-de-banca-tipo-guillotina.gif',
		tiempo:1,
		musculo:2

  	},
  	{
  		descripcion:'PECHO DECLINADO',
		explicacion:'hago donde quiera',
		id:2,
		imagen:'https://medellinfit-medellinfit.netdna-ssl.com/wp-content/uploads/2016/03/Press-de-banca-declinado.gif',		
		tiempo:20,
		musculo:2
  	}];
  }

  ionViewWillEnter() {
    
  }
  showEjercicio(ejercicio: Ejercicio){
   const modal = this.modalCtrl.create(EjercicioPage,{ ejercicio : ejercicio });
   modal.present().then(response => {
	    console.log(response);
	}).catch(e => {
	    console.log(e);
	});

  }
}
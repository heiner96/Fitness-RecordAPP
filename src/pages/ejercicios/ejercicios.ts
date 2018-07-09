import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Ejercicio} from '../../database';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ejercicios=[
  	{
  		descripcion:'pecho plano',
		explicacion:'hago donde quiera',
		id:'1',
		imagen:'https://medellinfit-medellinfit.netdna-ssl.com/wp-content/uploads/2015/12/Press-de-banca-tipo-guillotina.gif',
		tiempo:2,
		musculo:2

  	},
  	{
  		descripcion:'pecho declinado',
		explicacion:'hago donde quiera',
		id:'1',
		imagen:'https://medellinfit-medellinfit.netdna-ssl.com/wp-content/uploads/2016/03/Press-de-banca-declinado.gif',		
		tiempo:2,
		musculo:2
  	}];
  }

  ionViewWillEnter() {
    
  }

}

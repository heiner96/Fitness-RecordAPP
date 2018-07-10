import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ejercicio } from '../../database';

/**
 * Generated class for the EjercicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {
	ejercicio : Ejercicio;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {  	
  	this.ejercicio=this.navParams.get('ejercicio');
  	console.log(this.ejercicio); 
  }

  ionViewWillLoad() {  
  }
  hide(){
  	this.view.dismiss();
  }
}

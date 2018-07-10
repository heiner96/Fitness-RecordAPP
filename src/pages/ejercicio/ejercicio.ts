import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ejercicio } from '../../database';
import { Vibration } from '@ionic-native/vibration';

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
	public timer = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			 private view: ViewController, private vibration: Vibration) {  	
  	
  	this.ejercicio=this.navParams.get('ejercicio');
  	this.revisarTiempo(this.ejercicio); 
  }

  ionViewWillLoad() {  
  }
  hide(){
  	this.view.dismiss();
  }
  revisarTiempo(ejercicio : Ejercicio){
	if (ejercicio.hasOwnProperty('tiempo')) { 
		if(ejercicio.tiempo!=0){
		   var intervalVar = setInterval(function(){
		   	this.timer++;
		   	if(this.timer==ejercicio.tiempo){
		   		clearInterval(intervalVar);//hacer que vibre 5 segundos
		   		this.vibration.vibrate([2000,1000,2000]);
		   	}
		   }.bind(this),1000)
		}
		else{
			  		//no es un ejercicio por tiempo
		}
	}  	
	else{
		//no tiene tiempo
	}  	
  }
}

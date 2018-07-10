import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ejercicio } from '../../database';
import { Vibration } from '@ionic-native/vibration';
import { AlertController } from 'ionic-angular';

import { mobiscroll } from '@mobiscroll/angular';

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
	//public timer = 0;
	timer: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			 private view: ViewController, private vibration: Vibration, public alertCtrl: AlertController) {  	
  	
  	this.ejercicio=this.navParams.get('ejercicio');
  	this.timerSettings();
  	//this.revisarTiempo(this.ejercicio); 
  }

  ionViewWillLoad() {  
  }
  hide(){
  	this.view.dismiss();
  }
  revisarTiempo(ejercicio : Ejercicio){
	if (ejercicio.hasOwnProperty('tiempo')) { 
		if(ejercicio.tiempo!=0){
		    this.timer= (ejercicio.tiempo)*60;
		    var intervalVar = setInterval(function(){
		   	this.timer--;
		   	if(this.timer==0){
		   		clearInterval(intervalVar);//hacer que vibre 5 segundos
		   		this.vibration.vibrate([2000,1000,2000]);
				const alert = this.alertCtrl.create({
			      title: '!Felicidades!',
			      subTitle: '!Se acabo el tiempo!',
			      buttons: ['OK']
			    });
			    alert.present();
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
  timerSettings(){
  	var timerSettings: any = {
        display: 'inline',
        targetTime: 10,
        maxWheel: 'minutes',
        minWidth: 100,
        onFinish: function () {
            mobiscroll.alert({
                title: "Countdown finished",
                message: "Yup, that's right, time's up. <br> Restart it by setting a new time."

            	});
        	}
   		};
	}

}

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
 mobiscroll.settings = {
    theme: 'ios',
};

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {

	ejercicio : Ejercicio;
	timer: number;
  	timerSettings: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			 private view: ViewController, private vibration: Vibration, public alertCtrl: AlertController) {  	
  	
  	this.ejercicio=this.navParams.get('ejercicio');
  	console.log(this.ejercicio.tiempo);
  	this.timerSettingss();
  }
  timerSettingss(){
  	  	this.timerSettings = {
        display: 'inline',
        targetTime: this.ejercicio.tiempo*60,
        maxWheel: 'minutes',
        minWidth: 100,
        onFinish: function () {
            mobiscroll.alert({
                title: "¡TIEMPO FINALIZADO!",
                message: "¡SI, LO LOGRASTE. <br> PRESIONA RESET PARA EMPEZAR NUEVAMENTE"

            });
        },vibrar();
    };
  }
  vibrar(){
  	 this.vibration.vibrate([2000,1000,2000]);
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
 
}

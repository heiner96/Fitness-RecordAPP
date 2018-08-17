import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ejercicio } from '../../database';
import { Vibration } from '@ionic-native/vibration';
import { AlertController } from 'ionic-angular';
import { Health } from '@ionic-native/health';

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
	timer: number;
  buton : boolean;
  	timerSettings: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			     private view: ViewController, private vibration: Vibration, public alertCtrl: AlertController,private health: Health) 
  {  	  	
  	this.ejercicio=this.navParams.get('ejercicio');  	
    this.calories();
    this.buton=true;
  }
  ionViewWillLoad() {  
  }
  hide(){
  	this.view.dismiss();
  }

  revisarTiempo(ejercicio : Ejercicio){
	  let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      message: '¿Quieres iniciar el tiempo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Iniciar',
          handler: () => { 
          this.buton=false;           
              if (ejercicio.hasOwnProperty('tiempo')) { 
                if(ejercicio.tiempo!=0){
                    this.timer= (ejercicio.tiempo)*60;
                    var intervalVar = setInterval(function(){
                    this.timer--;
                    if(this.timer==0){
                      clearInterval(intervalVar);//hacer que vibre 5 segundos
                      this.buton=true;
                      this.vibration.vibrate([2000,1000,2000]);
                    const alert = this.alertCtrl.create({
                        title: '!Felicidades!',
                        subTitle: '!Se acabo el tiempo!',
                        buttons: ['OK']
                      });
                      alert.present();
                      return;
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
      ]
    });   
     alert.present().then(()=>{
      
    }); 	
  }
  calories(){
      this.health.isAvailable()
        .then((available:boolean) => 
        {
          //console.log(available);
          this.health.requestAuthorization(
            [
              'calories', 'distance',   // Read and write permissions
              {
                read : ['steps'],       // Read only permission
                write : ['height', 'weight']  // Write only permission
              }
            ])
        .then(res => alert(res+" acepta "))
        .catch(e => alert(e+" ejercicio linea 103"));
      })
      .catch(e => alert(e+"ejercicio linea 105"));
  }
 
}

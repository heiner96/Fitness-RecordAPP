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
  startDate: any;
  catidadCaloriasQuemadas :any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, 
             private view: ViewController, private vibration: Vibration, public alertCtrl: AlertController,private health: Health) 
  {       
    this.ejercicio=this.navParams.get('ejercicio');   
    //this.calories();
    this.buton=true;
    this.catidadCaloriasQuemadas=0;
    //this.calorias();
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
          this.startDate=new Date();
          this.catidadCaloriasQuemadas=0;                     
              if (ejercicio.hasOwnProperty('tiempo')) { 
                if(ejercicio.tiempo!=0){
                    this.timer= (ejercicio.tiempo)*60;
                    var intervalVar = setInterval(function(){
                    this.timer--;
                    if(this.timer==0){
                      this.calories();
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
      .then((available: boolean) => {
        this.health.requestAuthorization([
          'distance', 'calories',  //read and write permissions
          {
            read: ['steps'],       //read only permission
            write: ['height', 'weight']  //write only permission
          }
        ])
          .then(res => this.health.query({
      startDate: this.startDate, // three days ago
      endDate: new Date(), //now
      dataType: 'calories'
    }).then((value: any) => {
      for (let val in value) {
        this.catidadCaloriasQuemadas=JSON.stringify(value[val].value);
        return;
        //alert("HealthData data  113-" + JSON.stringify(value[val].value))//calorias (.unit)= kcal
        //alert("HealthData data  114-" + JSON.stringify(value[val]))
      }
      alert("si entro, pero no hay datos")
    }).catch((e: any) => {
      alert("HealthData ERROR:---" + e)
    }))
       .catch(e => alert("Lo sentimos, para hacer uso del contador de calorias, debes aceptar"));
      })
      .catch(e => alert("Si deseas hacer uso del contador de calorias, debes instalar la aplicacion de Google; Google Fit"));
  }
  }
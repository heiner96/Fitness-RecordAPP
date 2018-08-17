import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController  } from 'ionic-angular';
import { Ejercicio } from '../../database';
import { EjercicioPage } from '../ejercicio/ejercicio';
import { AuthService } from '../../services/auth.service';
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
  			 public modalCtrl: ModalController,private servicio: AuthService) {
  	this.showEjercicios();
  }

  ionViewWillEnter() {
    
  }
    showEjercicios(){
      this.servicio.getEjercicios(this.servicio.user.at).done((data)=>{
        this.ejercicios=data;
        console.log(data);
      })
    }


  showEjercicio(ejercicio: Ejercicio){
   const modal = this.modalCtrl.create(EjercicioPage,{ ejercicio : ejercicio });
   modal.present().then(response => {
	    console.log(response);
	}).catch(e => {
	     alert(e);
	});

  }
}
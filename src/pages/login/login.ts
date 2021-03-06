import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../database';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	email: string;
	password : string
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  			private servicio: AuthService) {
  }

  ionViewDidLoad() {
    
  }
	login()
	{
		this.servicio.login(this.email,this.password).done((msg) => {
			this.servicio.currentUser(msg['access_token']).done((user) => {
				this.servicio.user = new User(user['id'],user['email'],user['pDiaPago'],user['token'],user['edad'],user['idGimnasio'],1,msg['access_token']);
					try{
						window['plugins'].OneSignal.getIds((id)=>							
								this.servicio.actualizarTokenUserMovile(msg['access_token'],JSON.stringify(id.userId)).done((msg) => {
									
								})
							);
					}catch(e){
						alert(e);
					}
				this.navCtrl.setRoot(TabsPage).then(data => console.log(data),error => alert(error));
			})
		}).fail(function(data,status,err) {
		    if(err=='Unauthorized'){
		    	alert("Credenciales incorrectas");
		    }
		  });
	}

}

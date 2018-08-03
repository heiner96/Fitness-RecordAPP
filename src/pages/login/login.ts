import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
	login()
	{
		if(this.servicio.login(this.email,this.password))
		{
			this.navCtrl.setRoot(TabsPage).then(data => console.log(data),error => console.log(error));
		}
	}
}

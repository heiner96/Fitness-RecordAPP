import  {Injectable} from '@angular/core';
import { UserL } from '../database';
import * as $ from "jquery";

@Injectable()
export  class AuthService
{
	user : UserL;
	login(pEmail: string, pPassword: string)
	{
		let userl={email:pEmail,password:pPassword,	"remember_me": true};
		$.ajax({
		  type: 'POST',	
		  dataType: 'json',
		  headers: {
		        'Content-Type':'application/json',
		        'X-Requested-With':'XMLHttpRequest',
		        'Access-Control-Allow-Origin' : '*'
		  }, 
		  url: 'https://fitnessrecord.herokuapp.com/api/auth/login',
		  data: userl,
		  processData: false,
		  success: function(msg) {
		    console.log(msg);
		    return true;
		  }
		});
	}
}
import  {Injectable} from '@angular/core';
import { User } from '../database';
import * as $ from "jquery";

@Injectable()
export  class AuthService
{
	public user : User;

	login(pEmail: string, pPassword: string)
	{
		let userl={"email":pEmail,"password":pPassword,	"remember_me": true};
		$.ajax({
		  type: 'POST',	
		  dataType: "json",
		  headers: {
		        'Content-Type':'application/json',
		        'X-Requested-With':'XMLHttpRequest'
		  }, 
		  url: 'https://fitnessrecord.herokuapp.com/api/auth/login',
		  data: JSON.stringify(userl),
		  processData: false,
		  success: function(msg) {
				$.ajax({
					type: 'GET',	
					dataType: "json",
					headers: {
						'Authorization':'Bearer '+ msg['access_token']
					}, 
						url: 'https://fitnessrecord.herokuapp.com/api/auth/user',
						processData: false,
						success: function(user) {
							this.user = new User(user['id'],user['email'],user['diaPago'],'',user['edad'],user['idGimnasio'],user['rol'],msg['access_token']);						    
							console.log(this.user);							
						},
					    error: function (request, status, error) {
					    }
						});
		  },
		    error: function (request, status, error) {
		    }
		});
	}
}
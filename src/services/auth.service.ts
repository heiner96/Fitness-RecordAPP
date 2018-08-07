import  {Injectable} from '@angular/core';
import { User } from '../database';
import * as $ from "jquery";

@Injectable()
export  class AuthService
{
	public user : User;

	public login(pEmail: string, pPassword: string)
	{
		let userl={"email":pEmail,"password":pPassword,	"remember_me": true};
		let self=this;
		return $.ajax({
		  type: 'POST',	
		  dataType: "json",
		  headers: {
		        'Content-Type':'application/json',
		        'X-Requested-With':'XMLHttpRequest'
		  }, 
		  url: 'https://fitnessrecord.herokuapp.com/api/auth/login',
		  data: JSON.stringify(userl),
		  processData: false
		});
	}

	public currentUser(access_token) {
		return $.ajax({
			type: 'GET',	
			dataType: "json",
			headers: {
				'Authorization':'Bearer '+ access_token
			}, 
				url: 'https://fitnessrecord.herokuapp.com/api/auth/user',
				processData: false,
				});
	}
	public getRepeticiones(access_token){
		return $.ajax({
			type: 'GET',	
			dataType: "json",
			headers: {
				'Authorization':'Bearer '+ access_token
			}, 
				url: 'https://fitnessrecord.herokuapp.com/api/auth/repeticiones',
				processData: false,
				});
	}
}
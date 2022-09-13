import {Component} from '@angular/core';
//TODO: Create and import the login service.

class DataModel {
	email:string;
	pass:string;
};

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

	public	data_model:DataModel=new DataModel();

	//TODO: Construct with the login service.

	public	submit_form():void {

		//TODO: Call the login service.

		//TODO: If all works, add the token to the localstorage.

		//TODO: If all works, redirect somewhere else.
	}

}

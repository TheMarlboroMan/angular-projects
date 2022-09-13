import {Component} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ApiUserService, PostUserInModel} from '../core/api-user.service';

class DataModel {
	email:string="";
	pass:string="";
	verify:string="";
};

@Component({
	templateUrl: './register.component.html',
	styleUrls:['./register.component.css'],
})
export class RegisterComponent {

	public	data_model:DataModel=new DataModel();

	private	message:string="";
	private	show_form:boolean=true;

	public	constructor(private aus:ApiUserService) {}

	public	get_message():string {return this.message;}

	public	is_show_form():boolean {return this.show_form;}

	public	submit_form():void {

		this.show_form=false;
		this.message="Enviando información...";
		let model:PostUserInModel={email: this.data_model.email, pass: this.data_model.pass};

		//TODO: Perhaps we show and hide differently styled divs instead of changing a message????

		this.aus.post(model)
			.then(result => {
				if(result.repeated_email) {
					this.end_in_failure("El email introducido está en uso. Por favor, usa un email diferente");
				}
				else {
					this.end_in_success();
				}
			})
			.catch(error => {this.end_in_failure("Ha ocurrido un error en tu solicitud. Por favor, inténtalo más tarde");});
	}

	private	end_in_failure(message:string) {

		this.show_form=true;
		this.message=message;
	}

	private	end_in_success() {

		//TODO: Perhaps change the classname???
		this.message="Revisa tu correo para obtener instrucciones acerca de cómo finalizar tu registro!";
	}

}

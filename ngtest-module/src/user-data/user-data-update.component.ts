import {Component} from '@angular/core';

import {UserDataService} from './user-data.service';

//This is the data model for the form binding.
class UserDataModel{
	public	name:string="";
	public	email:string="";

	public	constructor(n:string, e:string){
		this.name=n;
		this.email=e;
	}
}

@Component({
	selector: 'user-data-update',
	templateUrl: 'user-data-update.component.html'
})
export class UserDataUpdateComponent{

	private	data_model:UserDataModel=null;

	public	constructor(private uds:UserDataService){

		let raw_data=uds.get_user_data();
		this.data_model=new UserDataModel(raw_data.name, raw_data.email);
	}

	public	get_model():UserDataModel {return this.data_model;}

	public	send_data() {
		this.uds.set_user_data(this.data_model.name, this.data_model.email);
	}
}


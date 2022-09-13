import {Component} from '@angular/core';

//We must actually import the name so the constructor knows what to handle.
import {UserDataService} from './user-data.service'; 

@Component({
	selector:'user-data',
	templateUrl:'user-data.component.html'
})
export class UserDataComponent {

	private name:string="";
	private email:string="";

	public constructor(private uds:UserDataService){

		this.subscribe_to_data_changes();
		this.load_user_data();
	}

	public load_user_data() {

		const user_data=this.uds.get_user_data();
		this.name=user_data.name;
		this.email=user_data.email;
	}

	private	subscribe_to_data_changes() {
		this.uds.data_changed$.subscribe( () => {
			this.load_user_data();
		});
	}

	public get_name():string {return this.name;}
	public get_email():string {return this.email;}
}

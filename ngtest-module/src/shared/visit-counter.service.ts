import {Injectable} from '@angular/core';

@Injectable()
export class VisitCounterService{

	private	current_key:string=null;	
	private	visits={};
	
	public	visit(key:string) {
		if(!this.visits.hasOwnProperty(key)) this.visits[key]=0;
		this.current_key=key;
		this.add_visit();
	}

	private	add_visit():void {
		if(!this.current_key) throw ("No current key set to add visit!");
		++this.visits[this.current_key];
	}
	public	get_visits():number {
		if(!this.current_key) throw ("No current key set to get visits!");
		return this.visits[this.current_key];
	}
}

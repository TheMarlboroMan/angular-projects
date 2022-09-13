import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {ApiUserVerifyService, PostInModel, PostOutModel} from '../core/api-user-verify.service';

@Component({
	templateUrl: './validate-user.component.html',
	styleUrls: ['./validate-user.component.css'],
})
export class ValidateUserComponent implements OnInit{

	private readonly tstatus={
		STATUS_VERIFYING:0,
		STATUS_OK:1,
		STATUS_ERROR:2
	};
	
	private status:number=this.tstatus.STATUS_VERIFYING;
	
	public	constructor(
		private r:ActivatedRoute,
		private auv:ApiUserVerifyService
	) {

	}

	/* Considering that there is no navigation away from this section 
	to create another component of the same type later, we can pass with 
	using the route snapshot. */

	public	ngOnInit() {

		let hash:string=this.r.snapshot.paramMap.get('hash');
		let account:string=this.r.snapshot.paramMap.get('account');
		let model:PostInModel={email:account, verification_code:hash};

		setTimeout( () => {
			this.auv.post(model)
				.then(result => {
					if(result.result!=PostOutModel.RESULT_OK) {
						throw new Error();
					}
					else {
						this.status=this.tstatus.STATUS_OK;
					}
				})
				.catch(error => {
					this.status=this.tstatus.STATUS_ERROR;
				})
			}, 3000);
	}

	public	is_verifying():boolean {return this.status==this.tstatus.STATUS_VERIFYING;}
	public	is_ok():boolean {return this.status==this.tstatus.STATUS_OK;}
	public	is_error():boolean {return this.status==this.tstatus.STATUS_ERROR;}
}

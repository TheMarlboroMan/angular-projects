import {Injectable} from '@angular/core';

//TODO: These are starting to appear repeated...
import {HttpClient} from '@angular/common/http';
import {SERVER_STATUS} from './server-responses';
import {SERVER_API_URLS} from './server-api-urls';

export class PostUserInModel {
	email:string;
	pass:string;
};

export class PostUserOutModel {
	id:number=0;
	repeated_email:boolean=false;
};

@Injectable()
export class ApiUserService {

	public	constructor(
		private http:HttpClient
	) {}

	public	post(data:PostUserInModel):Promise<PostUserOutModel> {

		let result=new PostUserOutModel();

		//The "observe" thing is needed so we can parse the full response.
		return this.http.post(SERVER_API_URLS.API_USER, data, {observe: 'response'})
			.toPromise()
			.then(response => {
				result.id=response['body']['user_id'];
				return result;
			})
			.catch(error => {
				if(error.status===SERVER_STATUS.STATUS_CODE_CONFLICT) {
					result.repeated_email=true;
					return result;
				}
				else {
					throw error;
				}
			});
	}
}

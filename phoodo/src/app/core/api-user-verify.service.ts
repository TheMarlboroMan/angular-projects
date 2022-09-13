import {Injectable} from '@angular/core';

//TODO: These are starting to appear repeated...
import {HttpClient} from '@angular/common/http';
import {SERVER_STATUS} from './server-responses';
import {SERVER_API_URLS} from './server-api-urls';

export class PostInModel {
	email:string;
	verification_code:string;
}

export class PostOutModel {
	static readonly RESULT_OK:number=1;
	static readonly RESULT_ERROR:number=0;

	result:number=PostOutModel.RESULT_ERROR;
}

@Injectable()
export class ApiUserVerifyService {

	public	constructor(
		private http:HttpClient) {
	
	}

	public	post(data:PostInModel):Promise<PostOutModel> {

		let result:PostOutModel=new PostOutModel;
		
		return this.http.post(SERVER_API_URLS.API_USER_VERIFY, data, {observe:'response'})
			.toPromise()
			.then(response => {
				result.result=response['body']['result']
				return result;
			})
			.catch(error => {
				return result;
			})
	}

};

import {Injectable} from '@angular/core';

import {StaticSectionModel} from './static-section.model';

import {static_texts} from './static-section.data';

@Injectable()
export class StaticSectionService {

	public	get_section(key:string):Promise<StaticSectionModel> {

		return new Promise<StaticSectionModel>( (resolve, reject) => {

			if(!static_texts.hasOwnProperty(key)) {
				throw new Error("Unknown section "+key);
			}

			//TODO: Remove this. This is only there to make it wait.
			setTimeout( () => resolve(static_texts[key]), 2000);
		});
	}
}

import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';

import {SongService} 		from './song.service';
import {LoaderService}		from './loader.service';
import {WindowTitleService}	from './window-title.service';
import {SongNavigationService}	from './song-navigation.service';

@NgModule({
})
export class CoreModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				SongService, 
				LoaderService,
				WindowTitleService,
				SongNavigationService
			]
		};
	}
	public	constructor(@Optional() @SkipSelf() guard:CoreModule) {

		console.log("Loading CoreModule");
		if(guard){
			throw new Error('CoreModule was already loaded.');
		}
	}
}

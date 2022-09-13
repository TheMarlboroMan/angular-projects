//Modules...
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Custom modules.
import {CoreModule} 		from './core/core.module';
import {SharedModule} 		from './shared/shared.module';
import {LayoutModule} 		from './layout/layout.module';
import {PublicModule}	 	from './public/public.module';
import {EventPagesModule} 	from './event-pages/event-pages.module';

//Components...
import { AppComponent } from './app.component';

//Routing...
import {Routing} from './routing';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		PublicModule,
		EventPagesModule,
		BrowserAnimationsModule,
		HttpClientModule,
		CoreModule.forRoot(),
		Routing
	],
	providers: [],
	bootstrap: [AppComponent],
})

export class AppModule {

}

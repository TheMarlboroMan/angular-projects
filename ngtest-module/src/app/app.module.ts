import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Custom modules
import {UserDataModule} from '../user-data/user-data.module';
import {WelcomeModule} from '../welcome/welcome.module';
import {SharedModule} from '../shared/shared.module';

//Application components...
import { AppComponent } from './app.component';
import {AppNavigationComponent} from './app-navigation.component';

//Routing...
import {AppRouting} from './app.routing';

@NgModule({
	//These are the "private" pipes, components and directives.
	declarations: [
		AppComponent,
		AppNavigationComponent,
	],
	//These are the pieces of functionality needed for the module, private.
	imports: [
		BrowserModule,	//This one is explicitly importing usual angular directives.
				//Root modules import this one, while feature modules import
				//CommonModule. Failure to do so will bring failure when
				//working with lazy loading stuff...
		UserDataModule,
		WelcomeModule,
		AppRouting,
		SharedModule.forRoot()
	],
	//This is the root component of this module. Given that AppComponent is
	//bootstrapped, it is the "root module", as opposed to "feature module".
	bootstrap: [AppComponent]
})
export class AppModule { }

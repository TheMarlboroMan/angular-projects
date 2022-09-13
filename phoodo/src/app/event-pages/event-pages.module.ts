import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

//Components...
import {ValidateUserComponent} from './validate-user.component';

import {Routing} from './routing';

@NgModule({
	declarations: [
		ValidateUserComponent
	],
	imports: [
		SharedModule,
		Routing,
	],
	exports: [
	],
	providers: [
	]
})
export class EventPagesModule {
}

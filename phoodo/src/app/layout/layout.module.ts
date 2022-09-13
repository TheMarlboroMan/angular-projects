import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {PublicLayoutComponent} from '../layout/public-layout.component';
import {PublicHeaderComponent} from './public-header.component';
import {PublicFooterComponent} from './public-footer.component';

import {SimpleLayoutComponent} from '../layout/simple-layout.component';
import {SimpleHeaderComponent} from './simple-header.component';
import {SimpleFooterComponent} from './simple-footer.component';

@NgModule({
	declarations: [
		PublicLayoutComponent,
		PublicHeaderComponent,
		PublicFooterComponent,

		SimpleLayoutComponent,
		SimpleHeaderComponent,
		SimpleFooterComponent,

	],
	imports: [
		SharedModule,
		RouterModule,
	],
	exports: [
		PublicLayoutComponent,
		PublicHeaderComponent,
		PublicFooterComponent,

		SimpleLayoutComponent,
		SimpleHeaderComponent,
		SimpleFooterComponent
	]
})
export class LayoutModule {

}

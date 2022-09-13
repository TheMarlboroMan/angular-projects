import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	imports: [CommonModule, ModuleRouting, SharedModule],
	exports: [AboutComponent],
	declarations: [AboutComponent]
})
export class AboutModule {

}



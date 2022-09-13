import {NgModule} from '@angular/core';

//This is for feature modules...
import {CommonModule} from '@angular/common';

//Pipes...

//Components...

//Directives...
import {MatchFieldValueValidator} from './match-field-value.validator';


@NgModule({
	declarations: [
		MatchFieldValueValidator,
	],
	imports: [

	],
	exports: [
		CommonModule,
		MatchFieldValueValidator
	],
	providers: [

	]
})
export class SharedModule {

}

//This validator is used like matchFieldValue="name_of_the_field_as_string".
//Some good info can be found here... https://stackoverflow.com/questions/35474991/angular-2-form-validating-for-repeat-password


import {Directive, forwardRef, Attribute} from '@angular/core';
import {AbstractControl, Validator, ValidationErrors, NG_VALIDATORS, FormControl} from '@angular/forms';

@Directive({
	selector: '[matchFieldValue][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchFieldValueValidator), multi: true }
	]
})
export class MatchFieldValueValidator implements Validator {

	constructor( @Attribute('matchFieldValue') public match_control_name: string) {

	}

/*
Straight from the Angular docs:        
	get(path: Array<string | number> | string): AbstractControl | null

	s a child control given the control's name or path. Paths can be passed in as an array or a string delimited by a dot. 
	To get a control nested within a person sub-group:
		this.form.get('person.name'); -OR- this.form.get(['person', 'name']);
*/

	public	validate(c:AbstractControl):ValidationErrors | null {

		if(!c.root.get(this.match_control_name)) {
			throw new Error(this.match_control_name+" control does not exist with that name!");
		}

		if(c.value===c.root.get(this.match_control_name).value) {
			return null;
		}
		else {
			return {matchFieldValue: false};
		}
	}
}

import {Component} from '@angular/core';

//Animations...
import {PublicAnimationChangeSection} from './animations';

@Component({
	templateUrl: './public-layout.component.html',
	animations: [PublicAnimationChangeSection]
})

export class PublicLayoutComponent{

	public	animate_public(outlet) {

		return outlet.isActivated ? outlet.activatedRoute : '';
	}

}

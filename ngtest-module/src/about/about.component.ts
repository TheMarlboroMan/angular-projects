import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VisitCounterService} from '../shared/visit-counter.service';
import {TimeAccessService} from '../shared/time-access.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	//[V10] adding the new service...
	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService,
			r:Router) {
		vcs.visit(r.url);
	}
}

import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {AboutComponent} from './about.component';

const routes=[
	{path: '', component: AboutComponent}
];

export const ModuleRouting=RouterModule.forChild(routes);

import {Routes, RouterModule} from '@angular/router';

import {SimpleLayoutComponent} from '../layout/simple-layout.component';
import {ValidateUserComponent} from './validate-user.component';

const routes=[
	//Simple layout
	{
		path: '',
		component: SimpleLayoutComponent,
		children:[
			{path:'validar-cuenta/:hash/:account',	component:ValidateUserComponent},
		]
	},
];

export const Routing=RouterModule.forChild(routes);

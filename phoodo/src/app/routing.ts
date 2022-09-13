import {Routes, RouterModule} from '@angular/router';

import {PublicLayoutComponent} from './layout/public-layout.component';
import {HomeComponent} from './public/home.component';
import {PageNotFoundComponent} from './public/page-not-found.component';

const routes=[
	//Public layout...
	{
		path: '',
		component: PublicLayoutComponent,
		children:[
			{path:'home', 			component:HomeComponent},
			//TODO: This is not working, with the children routes and so on...
			{path:'', 			redirectTo:'home', pathMatch:'full'},
			{path:'404-no-encontrado', 	component:PageNotFoundComponent},
			{path:'**', 			component:PageNotFoundComponent},
		]
	}
];

export const Routing=RouterModule.forRoot(routes);

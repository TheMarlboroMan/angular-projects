import {Routes, RouterModule} from '@angular/router';

import {PublicLayoutComponent} from '../layout/public-layout.component';
import {SimpleLayoutComponent} from '../layout/simple-layout.component';

import {TextComponent} from './text.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

/*Okay, to be honest I am not sure how this is even working with the
child routes and the different layouts and stuff, but well... */

const routes=[
	//Public layout...
	{
		path: '',
		component: PublicLayoutComponent,
		children:[
			{path:'login',			component:LoginComponent},
			{path:'registro',		component:RegisterComponent},
			{path:'acerca-de',		component:TextComponent},
			{path:'tecnologia',		component:TextComponent},
			{path:'datos-de-contacto',	component:TextComponent},
			{path:'portfolio',		component:TextComponent},
			{path:'aviso-legal',		component:TextComponent},
			{path:'proteccion-de-datos',	component:TextComponent},
			{path:'politica-de-cookies',	component:TextComponent},
			{path:'consigue-ayuda',		component:TextComponent},
			{path:'informa-de-un-fallo',	component:TextComponent},
		]
	},

	//Simple layout... These are the routes in the footer of the simple layout.
	{
		path: '',
		component: SimpleLayoutComponent,
		children:[
			{path:'ver/aviso-legal',		component:TextComponent},
			{path:'ver/proteccion-de-datos',	component:TextComponent},
			{path:'ver/politica-de-cookies',	component:TextComponent},
		]
	},
];

export const Routing=RouterModule.forChild(routes);

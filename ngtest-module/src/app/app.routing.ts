import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {WelcomeComponent} from '../welcome/welcome.component';
import {UserDataFullComponent} from '../user-data/user-data-full.component';

const routes=[
	{path: '', redirectTo: 'welcome', pathMatch:'full'},
	{path: 'welcome', component: WelcomeComponent},
	{path: 'user-data', component: UserDataFullComponent},
	{path: 'about', loadChildren: 'about/about.module#AboutModule'}
];

export const AppRouting=RouterModule.forRoot(routes);

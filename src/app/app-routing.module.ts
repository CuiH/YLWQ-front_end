/**
 * Created by CuiH on 2017/3/27.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent }       from "./log-in.component";
import { PageMyComponent } from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {PageMessagesComponent} from "./page-messages.component";
import {ClubListComponent} from "./club-list.component";


const routes: Routes = [
	{path: '', redirectTo: '/page_home', pathMatch: 'full'},
	{path: 'log_in', component: LogInComponent},
	{path: 'page_my', component: PageMyComponent},
	{path: 'page_home', component: PageHomeComponent},
	{path: 'page_messages', component: PageMessagesComponent},
	{path: 'club_list', component: ClubListComponent},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

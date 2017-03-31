/**
 * Created by CuiH on 2017/3/27.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent }       from "./log-in.component";
import { PageMyComponent } from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {UserClubsComponent} from "./user-clubs.component";
import {ClubDetailComponent} from "./club-detail.component";
import {UserActivitiesComponent} from "./user-activities.component";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ClubActivitiesComponent} from "./club-activities.component";
import {ClubMembersComponent} from "./club-members.component";


const routes: Routes = [
	{path: '', redirectTo: '/page_home', pathMatch: 'full'},
	{path: 'log_in', component: LogInComponent},
	{path: 'page_my', component: PageMyComponent},
	{path: 'page_home', component: PageHomeComponent},
	{path: 'clubs', component: UserClubsComponent},
	{path: 'club/:id', component: ClubDetailComponent},
	{path: 'activities', component: UserActivitiesComponent},
	{path: 'activity/:id', component: ActivityDetailComponent},
	{path: 'club_activities/:club_id', component: ClubActivitiesComponent},
	{path: 'club_members/:club_id', component: ClubMembersComponent},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

/**
 * Created by CuiH on 2017/4/5.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {ClubComponent} from "./club.component";
import {ClubDetailComponent} from "./club-detail.component";
import {ClubActivitiesComponent} from "./club-activities.component";
import {ClubMessagesComponent} from "./club-messages.component";
import {ClubMembersComponent} from "./club-members.component";
import {CreateClubComponent} from "./create-club.component";
import {UpdateClubComponent} from "./update-club.component";


const clubRoutes: Routes = [
	{
		path: 'club',
		component: ClubComponent,
		children: [
			{path: 'create', component: CreateClubComponent},
			{path: ':id/detail', component: ClubDetailComponent},
			{path: ':id/activities', component: ClubActivitiesComponent},
			{path: ':id/messages', component: ClubMessagesComponent},
			{path: ':id/members', component: ClubMembersComponent},
			{path: ':id/update', component: UpdateClubComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(clubRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ClubRoutingModule { }

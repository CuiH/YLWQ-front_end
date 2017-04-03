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
import {ActivityParticipantsComponent} from "./activity-participants.component";
import {CreateClubBulletinComponent} from "./create-club-bulletin.component";
import {PageMessagesComponent} from "./page-messages.component";
import {ApplicationDetailComponent} from "./application-detail.component";
import {CreateActivityComponent} from "./create-activity.component";
import {CreateClubComponent} from "./create-club.component";
import {UserDetailComponent} from "./user-detail.component";
import {ClubMessagesComponent} from "./club-messages.component";
import {UpdateUserDetailComponent} from "./update-user-detail.component";
import {CreateActivityBillComponent} from "./create-activity-bill.component";


const routes: Routes = [
	{path: '', redirectTo: '/page_home', pathMatch: 'full'},
	{path: 'log_in', component: LogInComponent},
	{path: 'page_my', component: PageMyComponent},
	{path: 'page_home', component: PageHomeComponent},
	{path: 'page_messages', component: PageMessagesComponent},
	{path: 'clubs', component: UserClubsComponent},
	{path: 'club/:id', component: ClubDetailComponent},
	{path: 'activities', component: UserActivitiesComponent},
	{path: 'activity/:id', component: ActivityDetailComponent},
	{path: 'club_activities/:club_id', component: ClubActivitiesComponent},
	{path: 'club_members/:club_id', component: ClubMembersComponent},
	{path: 'activity_participants/:activity_id', component: ActivityParticipantsComponent},
	{path: 'create_club_bulletin/:club_id', component: CreateClubBulletinComponent},
	{path: 'application/:id', component: ApplicationDetailComponent},
	{path: 'create_activity/:club_id', component: CreateActivityComponent},
	{path: 'create_club', component: CreateClubComponent},
	{path: 'user/:id', component: UserDetailComponent},
	{path: 'club_messages/:club_id', component: ClubMessagesComponent},
	{path: 'update_user_detail', component: UpdateUserDetailComponent},
	{path: 'create_activity_bill/:activity_id', component: CreateActivityBillComponent},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

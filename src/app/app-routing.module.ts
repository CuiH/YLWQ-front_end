/**
 * Created by CuiH on 2017/3/27.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent }       from "./log-in.component";
import { PageMyComponent } from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {UserClubsComponent} from "./user-clubs.component";
import {UserActivitiesComponent} from "./user-activities.component";
import {PageMessagesComponent} from "./page-messages.component";
import {UserDetailComponent} from "./user-detail.component";
import {ClubMessagesComponent} from "./club/club-messages.component";
import {UpdateUserDetailComponent} from "./update-user-detail.component";
import {CreateActivityBillComponent} from "./create-activity-bill.component";
import {ActivityBillDetailComponent} from "./activity-bill-detail.component";
import {NewsDetailComponent} from "./news-detail.component";


const routes: Routes = [
	{path: '', redirectTo: '/page_home', pathMatch: 'full'},
	{path: 'log_in', component: LogInComponent},
	{path: 'page_my', component: PageMyComponent},
	{path: 'page_home', component: PageHomeComponent},
	{path: 'page_messages', component: PageMessagesComponent},
	{path: 'clubs', component: UserClubsComponent},
	{path: 'activities', component: UserActivitiesComponent},
	{path: 'user/:id', component: UserDetailComponent},
	{path: 'club_messages/:club_id', component: ClubMessagesComponent},
	{path: 'update_user_detail', component: UpdateUserDetailComponent},
	{path: 'create_activity_bill/:activity_id', component: CreateActivityBillComponent},
	{path: 'activity_bill/:id', component: ActivityBillDetailComponent},
	{path: 'news/:id', component: NewsDetailComponent},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {UserComponent} from "./user.component";
import {UserDetailComponent} from "./user-detail.component";
import {UserActivitiesComponent} from "./user-activities.component";
import {UserClubsComponent} from "./user-clubs.component";
import {UpdateUserDetailComponent} from "./update-user-detail.component";
import {UserActivitiesSponsoredComponent} from "./user-activities-sponsored.component";
import {UserActivitiesParticipatedComponent} from "./user-activities-participated.component";


const userRoutes: Routes = [
	{
		path: 'user',
		component: UserComponent,
		children: [
			{path: ':id/detail', component: UserDetailComponent},
			{
				path: 'activities',
				component: UserActivitiesComponent,
				children: [
					{path: 'sponsored', component: UserActivitiesSponsoredComponent},
					{path: 'participated', component: UserActivitiesParticipatedComponent},
				]
			},
			{path: 'clubs', component: UserClubsComponent},
			{path: 'update', component: UpdateUserDetailComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(userRoutes)
	],
	exports: [
		RouterModule
	]
})
export class UserRoutingModule { }


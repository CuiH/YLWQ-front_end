/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ActivityComponent} from "../activity/activity.component";
import {CreateActivityComponent} from "../activity/create-activity.component";
import {UpdateActivityComponent} from "../activity/update-activity.component";
import {ActivityParticipantsComponent} from "../activity/activity-participants.component";
import {ActivityDetailComponent} from "../activity/activity-detail.component";


const activityRoutes: Routes = [
	{
		path: 'activity',
		component: ActivityComponent,
		children: [
			{path: 'create/:club_id', component: CreateActivityComponent},
			{path: ':id/update', component: UpdateActivityComponent},
			{path: ':id/participants', component: ActivityParticipantsComponent},
			{path: ':id/detail', component: ActivityDetailComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(activityRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ActivityRoutingModule { }

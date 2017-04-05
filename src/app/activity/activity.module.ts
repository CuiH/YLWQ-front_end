/**
 * Created by CuiH on 2017/4/5.
 */

import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {ActivityService} from "./activity.service";
import {ActivityComponent} from "./activity.component";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ActivityParticipantsComponent} from "./activity-participants.component";
import {CreateActivityComponent} from "./create-activity.component";
import {UpdateActivityComponent} from "./update-activity.component";
import {ActivityRoutingModule} from "./activity-routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ActivityRoutingModule,
	],
	declarations: [
		ActivityComponent,
		ActivityDetailComponent,
		CreateActivityComponent,
		UpdateActivityComponent,
		ActivityParticipantsComponent
	],
	providers: [
		ActivityService
	]
})
export class ActivityModule {}

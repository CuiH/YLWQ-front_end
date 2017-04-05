/**
 * Created by CuiH on 2017/4/5.
 */

import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import {ClubComponent} from "./club.component";
import {ClubActivitiesComponent} from "./club-activities.component";
import {ClubDetailComponent} from "./club-detail.component";
import {ClubMembersComponent} from "./club-members.component";
import {ClubMessagesComponent} from "./club-messages.component";
import {CreateClubComponent} from "./create-club.component";
import {UpdateClubComponent} from "./update-club.component";
import {ClubService} from "./club.service";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ClubRoutingModule
	],
	declarations: [
		ClubComponent,
		ClubActivitiesComponent,
		ClubDetailComponent,
		ClubMembersComponent,
		ClubMessagesComponent,
		CreateClubComponent,
		UpdateClubComponent
	],
	providers: [
		ClubService
	]
})
export class ClubModule {}

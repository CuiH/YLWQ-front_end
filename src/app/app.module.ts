import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }        from './app.component';
import { AppRoutingModule }    from "./app-routing.module";
import { UserService }         from "./user.service";
import { LogInComponent }      from "./log-in.component";
import { PageMyComponent }         from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {UserClubsComponent} from "./user-clubs.component";
import {ClubDetailComponent} from "./club-detail.component";
import {CheckingService} from "./checking.service";
import {UserActivitiesComponent} from "./user-activities.component";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ClubActivitiesComponent} from "./club-activities.component";
import {ClubMembersComponent} from "./club-members.component";
import {ActivityParticipantsComponent} from "./activity-participants.component";
import {CreateClubBulletinComponent} from "./create-club-bulletin.component";


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		ReactiveFormsModule
	],

	declarations: [
		AppComponent,
		LogInComponent,
		PageMyComponent,
		PageHomeComponent,
		UserClubsComponent,
		ClubDetailComponent,
		UserActivitiesComponent,
		ActivityDetailComponent,
		ClubActivitiesComponent,
		ClubMembersComponent,
		ActivityParticipantsComponent,
		CreateClubBulletinComponent
	],

	providers: [
		UserService,
		CheckingService,
		CookieService
	],

	bootstrap: [
		AppComponent
	]

})
export class AppModule { }

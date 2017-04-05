import {NgModule, LOCALE_ID}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }        from './app.component';
import { AppRoutingModule }    from "./app-routing.module";
import { UserService }         from "./user.service";
import { LogInComponent }      from "./log-in.component";
import { PageMyComponent }         from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {UserClubsComponent} from "./user-clubs.component";
import {CheckingService} from "./checking.service";
import {UserActivitiesComponent} from "./user-activities.component";
import {CreateClubBulletinComponent} from "./club-bulletin/create-club-bulletin.component";
import {PageMessagesComponent} from "./page-messages.component";
import {UserDetailComponent} from "./user-detail.component";
import {UpdateUserDetailComponent} from "./update-user-detail.component";
import {CreateActivityBillComponent} from "./create-activity-bill.component";
import {ActivityBillDetailComponent} from "./activity-bill-detail.component";
import {NewsDetailComponent} from "./news-detail.component";
import {ActivityModule} from "./activity/activity.module";
import {ClubModule} from "./club/club.module";
import {ApplicationModule} from "./application/application.module";
import {ClubBulletinModule} from "./club-bulletin/club-bulletin.module";


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ActivityModule,
		ClubModule,
		ApplicationModule,
		ClubBulletinModule,
		AppRoutingModule,
		ReactiveFormsModule
	],

	declarations: [
		AppComponent,
		LogInComponent,
		PageMyComponent,
		PageHomeComponent,
		UserClubsComponent,
		UserActivitiesComponent,
		PageMessagesComponent,
		UserDetailComponent,
		UpdateUserDetailComponent,
		CreateActivityBillComponent,
		ActivityBillDetailComponent,
		NewsDetailComponent,
	],

	providers: [
		{ provide: LOCALE_ID, useValue: "zh-CN" },
		UserService,
		CheckingService,
		CookieService
	],

	bootstrap: [
		AppComponent
	]

})
export class AppModule { }

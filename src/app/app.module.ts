import {NgModule, LOCALE_ID}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }        from './app.component';
import { AppRoutingModule }    from "./app-routing.module";
import { UserService }         from "./user/user.service";
import { LogInComponent }      from "./log-in.component";
import { PageMyComponent }         from "./page-my.component";
import {PageHomeComponent} from "./page-home.component";
import {CheckingService} from "./checking.service";
import {PageMessagesComponent} from "./page-messages.component";
import {ActivityModule} from "./activity/activity.module";
import {ClubModule} from "./club/club.module";
import {ApplicationModule} from "./application/application.module";
import {ClubBulletinModule} from "./club-bulletin/club-bulletin.module";
import {UserModule} from "./user/user.module";
import {ActivityBillModule} from "./activity-bill/activity-bill.module";
import {NewsModule} from "./news/news.module";
import {ClubListComponent} from "./club-list.component";


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ActivityModule,
		ClubModule,
		ApplicationModule,
		ClubBulletinModule,
		UserModule,
		NewsModule,
		ActivityBillModule,
		AppRoutingModule,
		ReactiveFormsModule
	],

	declarations: [
		AppComponent,
		LogInComponent,
		PageMyComponent,
		PageHomeComponent,
		PageMessagesComponent,
		ClubListComponent
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

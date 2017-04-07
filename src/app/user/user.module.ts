/**
 * Created by CuiH on 2017/4/5.
 */

import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user.component";
import {UserDetailComponent} from "./user-detail.component";
import {UserActivitiesComponent} from "./user-activities.component";
import {UserClubsComponent} from "./user-clubs.component";
import {UpdateUserDetailComponent} from "./update-user-detail.component";
import {UserService} from "./user.service";
import {UserActivitiesParticipatedComponent} from "./user-activities-participated.component";
import {UserActivitiesSponsoredComponent} from "./user-activities-sponsored.component";
import {UserPaymentsComponent} from "./user-payments.component";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		UserRoutingModule
	],
	declarations: [
		UserComponent,
		UserDetailComponent,
		UserActivitiesComponent,
		UserClubsComponent,
		UpdateUserDetailComponent,
		UserActivitiesParticipatedComponent,
		UserActivitiesSponsoredComponent,
		UserPaymentsComponent
	],
	providers: [
		UserService
	]
})
export class UserModule {}

/**
 * Created by CuiH on 2017/4/5.
 */

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClubBulletinService} from "./club-bulletin-service";
import {ClubBulletinComponent} from "./club-bulletin.component";
import {CreateClubBulletinComponent} from "./create-club-bulletin.component";
import {ClubBulletinRoutingModule} from "./club-bulletin-routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ClubBulletinRoutingModule,
	],
	declarations: [
		ClubBulletinComponent,
		CreateClubBulletinComponent

	],
	providers: [
		ClubBulletinService
	]
})
export class ClubBulletinModule {}

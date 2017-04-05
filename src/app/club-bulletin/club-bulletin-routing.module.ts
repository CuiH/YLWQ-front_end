/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {CreateClubBulletinComponent} from "./create-club-bulletin.component";
import {ClubBulletinComponent} from "./club-bulletin.component";


const clubBulletinRoutes: Routes = [
	{
		path: 'club_bulletin',
		component: ClubBulletinComponent,
		children: [
			{path: 'create/:club_id', component: CreateClubBulletinComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(clubBulletinRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ClubBulletinRoutingModule { }

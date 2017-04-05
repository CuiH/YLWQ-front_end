/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ApplicationComponent} from "./application.component";
import {ApplicationDetailComponent} from "./application-detail.component";


const applicationRoutes: Routes = [
	{
		path: 'application',
		component: ApplicationComponent,
		children: [
			{path: ':id/detail', component: ApplicationDetailComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(applicationRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ApplicationRoutingModule { }

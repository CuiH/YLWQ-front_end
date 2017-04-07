/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ActivityBillComponent} from "./activity-bill.component";
import {CreateActivityBillComponent} from "./create-activity-bill.component";
import {ActivityBillDetailComponent} from "./activity-bill-detail.component";
import {UpdateActivityBillComponent} from "./update-activity-bill.component";


const activityBillRoutes: Routes = [
	{
		path: 'activity_bill',
		component: ActivityBillComponent,
		children: [
			{path: ':id/detail', component: ActivityBillDetailComponent},
			{path: 'create/:activity_id', component: CreateActivityBillComponent},
			{path: ':id/update', component: UpdateActivityBillComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(activityBillRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ActivityBillRoutingModule { }


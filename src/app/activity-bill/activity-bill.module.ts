/**
 * Created by CuiH on 2017/4/5.
 */

import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ActivityBillService} from "./activity-bill.service";
import {ActivityBillComponent} from "./activity-bill.component";
import {ActivityBillDetailComponent} from "./activity-bill-detail.component";
import {CreateActivityBillComponent} from "./create-activity-bill.component";
import {ActivityBillRoutingModule} from "./activity-bill-routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ActivityBillRoutingModule,
	],
	declarations: [
		ActivityBillComponent,
		ActivityBillDetailComponent,
		CreateActivityBillComponent
	],
	providers: [
		ActivityBillService
	]
})
export class ActivityBillModule {}

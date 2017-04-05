/**
 * Created by CuiH on 2017/4/5.
 */

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ApplicationComponent} from "./application.component";
import {ApplicationDetailComponent} from "./application-detail.component";
import {ApplicationService} from "./application.service";
import {ApplicationRoutingModule} from "./application-routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ApplicationRoutingModule,
	],
	declarations: [
		ApplicationComponent,
		ApplicationDetailComponent
	],
	providers: [
		ApplicationService
	]
})
export class ApplicationModule {}


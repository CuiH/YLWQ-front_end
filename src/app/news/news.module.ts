/**
 * Created by CuiH on 2017/4/5.
 */

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {NewsComponent} from "./news.component";
import {NewsDetailComponent} from "./news-detail.component";
import {NewsService} from "./new.service";
import {NewsRoutingModule} from "./news-routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NewsRoutingModule,
	],
	declarations: [
		NewsComponent,
		NewsDetailComponent
	],
	providers: [
		NewsService
	]
})
export class NewsModule {}

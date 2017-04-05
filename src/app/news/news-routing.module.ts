/**
 * Created by CuiH on 2017/4/5.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {NewsDetailComponent} from "./news-detail.component";
import {NewsComponent} from "./news.component";


const newsRoutes: Routes = [
	{
		path: 'news',
		component: NewsComponent,
		children: [
			{path: ':id/detail', component: NewsDetailComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(newsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class NewsRoutingModule { }


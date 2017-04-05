/**
 * Created by CuiH on 2017/4/4.
 */

import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import { Location }               from '@angular/common';
import {ActivatedRoute, Params} from "@angular/router";

import {NewsService} from "./new.service";
import {News} from "./news";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class NewsDetailComponent implements OnInit {

	private news = new News();
	constructor(
		private location: Location,
		private activatedRoute: ActivatedRoute,
	    private newsService: NewsService
	) {

	}

	ngOnInit(): void {
		$.init();

		this.activatedRoute.params
			.switchMap((params: Params) => this.newsService.getNewsById(+params['id']))
			.subscribe((news) => {
				this.news = news;
			});
	}

	private goBack(): void {
		this.location.back();
	}

}

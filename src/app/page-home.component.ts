/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";

import {UserService} from "./user.service";
import {NewsService} from "./new.service";
import {News} from "./news";


@Component({
	selector: 'page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.css'],
	providers: [NewsService]
})
export class PageHomeComponent implements OnInit {

	private loggedIn: boolean;

	private news: News[] = [];

	constructor(
		private userService: UserService,
	    private newsService: NewsService
	) {

	}

	ngOnInit(): void {
		this.loggedIn = this.userService.isLoggedIn();

		this.newsService.getLatestEightNews()
			.then(news => this.news = news);
	}

}

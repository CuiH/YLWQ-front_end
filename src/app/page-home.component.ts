/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";

import {UserService} from "./user/user.service";
import {NewsService} from "./news/new.service";
import {News} from "./news/news";
import {ClubService} from "./club/club.service";
import {Club} from "./club/club";


@Component({
	selector: 'page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.css'],
	providers: [NewsService, ClubService]
})
export class PageHomeComponent implements OnInit {

	private loggedIn: boolean;

	private news: News[] = [];
	private clubs: Club[] = [];

	constructor(
		private userService: UserService,
	    private newsService: NewsService,
	    private clubService: ClubService,
	) {

	}

	ngOnInit(): void {
		this.loggedIn = this.userService.isLoggedIn();

		this.newsService.getLatestEightNews()
			.then(news => this.news = news);

		this.clubService.getHottestThreeClubs()
			.then(clubs => this.clubs = clubs);
	}

}

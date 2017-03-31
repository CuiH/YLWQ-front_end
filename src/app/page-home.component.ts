/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";

import {UserService} from "./user.service";


@Component({
	selector: 'page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {

	private loggedIn: boolean;

	constructor(
		private userService: UserService
	) {

	}

	ngOnInit(): void {
		this.loggedIn = this.userService.isLoggedIn();

	}

}

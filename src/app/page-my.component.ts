/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {UserService} from "./user.service";


@Component({
	selector: 'page-my',
	templateUrl: './page-my.component.html',
	styleUrls: ['./page-my.component.css'],
})
export class PageMyComponent implements OnInit {

	constructor(
		private userService: UserService,
	    private router: Router,
	) {
	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}
	}

	private onLogOff(): void {
		this.userService.logOff();

		this.router.navigate(['/page_home']);
	}
}

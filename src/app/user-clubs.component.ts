/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";
import {Club} from "./club/club";


@Component({
	selector: 'user-clubs',
	templateUrl: './user-clubs.component.html',
	styleUrls: ['./user-clubs.component.css'],
})
export class UserClubsComponent implements OnInit {

	private clubs: Club[];

	constructor(
		private userService: UserService,
		private location: Location,
		private router: Router,
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.userService.getAllUserClubs()
			.then((clubs) => {
				this.clubs = clubs;
			});
	}

	goBack(): void {
		this.location.back();
	}

}

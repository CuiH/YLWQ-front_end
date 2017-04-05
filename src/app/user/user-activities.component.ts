/**
 * Created by CuiH on 2017/4/5.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute} from "@angular/router";

import {UserService} from "./user.service";


@Component({
	templateUrl: './user-activities.component.html',
})
export class UserActivitiesComponent implements OnInit {

	constructor(
		private userService: UserService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router,
	) {	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}
	}

	private goBack(): void {
		this.router.navigate(['page_my'], {relativeTo: this.route.parent.parent});
	}

}

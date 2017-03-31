/**
 * Created by CuiH on 2017/3/30.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";

import {Activity} from "./activity";


@Component({
	selector: 'user-activities',
	templateUrl: './user-activities.component.html',
	styleUrls: ['./user-activities.component.css'],
})
export class UserActivitiesComponent implements OnInit {

	private currentActivities: Activity[] = null;

	private isFirst:string = "active";
	private isSecond:string = "";

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

		this.changeToParticipated()
	}

	private goBack(): void {
		this.location.back();
	}

	private changeToParticipated() {
		this.isFirst = "active";
		this.isSecond = "";

		this.userService.getAllUserParticipatedActivities()
			.then((activities) => {
				this.currentActivities = activities;
			})
	}

	private changeToSponsored() {
		this.isFirst = "";
		this.isSecond = "active";

		this.userService.getAllUserSponsoredActivities()
			.then((activities) => {
				this.currentActivities = activities;
			})
	}

}

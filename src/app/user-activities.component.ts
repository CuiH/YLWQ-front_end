/**
 * Created by CuiH on 2017/3/30.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";

import {Activity} from "./activity";
import {zipAll} from "rxjs/operator/zipAll";


@Component({
	selector: 'user-activities',
	templateUrl: './user-activities.component.html',
	styleUrls: ['./user-activities.component.css'],
})
export class UserActivitiesComponent implements OnInit {

	private currentActivities: Activity[] = [];

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
				this.initiateActivityStatus();
			})
	}

	private initiateActivityStatus() {
		for (let i = 0; i < this.currentActivities.length; i++) {
			const now = new Date();
			if (new Date(Date.parse(this.currentActivities[i].start_time)) > now) {
				this.currentActivities[i].status = "未开始";
			} else {
				this.currentActivities[i].status = "进行中";
			}

			if (new Date(Date.parse(this.currentActivities[i].end_time)) < now) {
				this.currentActivities[i].status = "已结束";
			}
		}
	}

	private changeToSponsored() {
		this.isFirst = "";
		this.isSecond = "active";

		this.userService.getAllUserSponsoredActivities()
			.then((activities) => {
				this.currentActivities = activities;
				this.initiateActivityStatus();
			})
	}

}

/**
 * Created by CuiH on 2017/4/5.
 */

import {Component, OnInit} from "@angular/core";

import {UserService} from "./user.service";
import {Activity} from "../activity/activity";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
	selector: 'user-activities-participated',
	templateUrl: './user-activities-participated.component.html',
})
export class UserActivitiesParticipatedComponent implements OnInit {

	private activities: Activity[] = [];

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router,
	) {

	}

	ngOnInit(): void {
		this.userService.getAllUserParticipatedActivities()
			.then((activities) => {
				this.activities = activities;
				this.initiateActivityStatus()
			});
	}

	private initiateActivityStatus() {
		for (let i = 0; i < this.activities.length; i++) {
			const now = new Date();
			if (new Date(Date.parse(this.activities[i].start_time)) > now) {
				this.activities[i].status = "未开始";
			} else {
				this.activities[i].status = "进行中";
			}

			if (new Date(Date.parse(this.activities[i].end_time)) < now) {
				this.activities[i].status = "已结束";
			}
		}
	}

	private changeToSponsored(): void {
		this.router.navigate(['sponsored'], {relativeTo: this.route.parent});
	}

}

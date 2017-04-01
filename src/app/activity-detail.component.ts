/**
 * Created by CuiH on 2017/3/30.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {ActivityService} from "./activity.service";
import {UserService} from "./user.service";
import {Activity} from "./activity";


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {CheckingService} from "./checking.service";

declare let $: any;


@Component({
	selector: 'activity-detail',
	templateUrl: './activity-detail.component.html',
	styleUrls: ['./activity-detail.component.css'],
	providers: [ActivityService]
})
export class ActivityDetailComponent implements OnInit {

	private activity: Activity = new Activity();

	private attendActivityButtonText = "参与该活动";

	private isParticipant = false;

	constructor(
		private location: Location,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private activityService: ActivityService,
		private userService: UserService,
		private checkingService: CheckingService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		$.init();

		this.activatedRoute.params
			.switchMap((params: Params) => this.activityService.getActivityById(+params['id']))
			.subscribe((activity) => {
				this.activity = activity;

				this.checkingService.checkUserActivityMap(this.userService.getCurrentUserId(), this.activity.id)
					.then((result) => {
						this.isParticipant = result;
					})
			});
	}

	goBack(): void {
		this.location.back();
	}

	showBriefIntro(): void {
		if (!this.activity) return;

		$.alert(this.activity.brief_intro, "简介");
	}

	showNote(): void {
		if (!this.activity) return;

		$.alert(this.activity.note, "备注");
	}

	showLocation(): void {
		if (!this.activity) return;

		$.alert(this.activity.location, "地点");
	}

	attendActivity(): void {
		this.attendActivityButtonText = "处理中...";
		this.activatedRoute.params
			.switchMap((params: Params) => this.activityService.attendActivity(+params['id']))
			.subscribe((activity) => {
				$.alert("参与成功！");

				this.isParticipant = true;
				this.activity.participant_number += 1;
			}, () => this.attendActivityButtonText = "参与该活动");
	}
}

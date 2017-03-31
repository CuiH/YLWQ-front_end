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

declare let $: any;


@Component({
	selector: 'activity-detail',
	templateUrl: './activity-detail.component.html',
	styleUrls: ['./activity-detail.component.css'],
	providers: [ActivityService]
})
export class ActivityDetailComponent implements OnInit {

	private activity: Activity = new Activity();

	constructor(
		private location: Location,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private activityService: ActivityService,
		private userService: UserService,
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
}

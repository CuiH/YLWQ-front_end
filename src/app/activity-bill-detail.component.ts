/**
 * Created by CuiH on 2017/4/4.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {ActivityService} from "./activity/activity.service";
import {UserService} from "./user.service";
import {ActivityBillService} from "./activity-bill.service";
import {ActivityBill} from "./activity-bill";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'activity-bill-detail',
	templateUrl: './activity-bill-detail.component.html',
	styleUrls: ['./activity-bill-detail.component.css'],
	providers: [
		ActivityService,
		ActivityBillService
	]
})
export class ActivityBillDetailComponent implements OnInit {

	private activityBill: ActivityBill = new ActivityBill();
	private totalCost = 0;

	constructor(
		private location: Location,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private activityBillService: ActivityBillService,
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
			.switchMap((params: Params) => this.activityBillService.getActivityBillById(+params['id']))
			.subscribe((activityBill) => {
				this.activityBill = activityBill;

				for (let i = 0; i < activityBill.activityBillItems.length; i++) this.totalCost += activityBill.activityBillItems[i].cost;
			});
	}

	private goBack(): void {
		this.location.back();
	}

}

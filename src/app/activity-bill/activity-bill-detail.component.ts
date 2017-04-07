/**
 * Created by CuiH on 2017/4/4.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {ActivityService} from "../activity/activity.service";
import {UserService} from "../user/user.service";
import {ActivityBillService} from "./activity-bill.service";
import {ActivityBill} from "./activity-bill";
import {CheckingService} from "../checking.service";
import {ChallengeService} from "../challenge/challenge.service";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {Challenge} from "../challenge/challenge";

declare let $: any;


@Component({
	selector: 'activity-bill-detail',
	templateUrl: './activity-bill-detail.component.html',
	styleUrls: ['./activity-bill-detail.component.css'],
	providers: [
		ActivityService,
		ChallengeService
	]
})
export class ActivityBillDetailComponent implements OnInit {

	private userId: number;

	private activityBill: ActivityBill = new ActivityBill();

	private challenges: Challenge[] = [];

	private totalCost = 0;

	private challengeMessage = "";

	private isCreator = false;
	private isUnfinished = false;
	private isParticipant = false;
	private isChallenged = false;

	private canFinish = false;

	private isClicked = false;

	private challengeButtonText = "提交";

	constructor(
		private location: Location,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private activityBillService: ActivityBillService,
		private userService: UserService,
	    private checkingService: CheckingService,
	    private challengeService: ChallengeService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		$.init();

		this.userId = this.userService.getCurrentUserId();

		this.activatedRoute.params
			.switchMap((params: Params) => this.activityBillService.getActivityBillById(+params['id']))
			.subscribe((activityBill) => {
				this.activityBill = activityBill;

				for (let i = 0; i < activityBill.activityBillItems.length; i++) this.totalCost += activityBill.activityBillItems[i].cost;

				this.checkingService.checkActivityBillCreator(this.userService.getCurrentUserId(), activityBill.id)
					.then(result => this.isCreator = result);
				this.checkingService.checkActivityBillUnfinished(activityBill.id)
					.then(result => this.isUnfinished = result);
				this.checkingService.checkUserActivityMap(this.userService.getCurrentUserId(), activityBill.id)
					.then(result => this.isParticipant = result);
				this.checkingService.checkChallenge(this.userService.getCurrentUserId(), activityBill.id)
					.then(result => this.isChallenged = result);

				this.activityBillService.getAllChallengesById(activityBill.id)
					.then((results) => {
						this.challenges = results;

						if (results.length == 0) {
							const now = new Date();
							const lastModifyTime = new Date(Date.parse(activityBill.last_modify_time));
							if (now.getTime() - lastModifyTime.getTime() > 86400000) {
								this.canFinish = true;
							}
						}
					});
			});
	}

	private goBack(): void {
		this.location.back();
	}

	private onDelete(id: number, index: number): void {
		this.challengeService.deleteChallenge(id)
			.then(() => {
				$.alert('撤销成功！');

				this.challenges.splice(index, 1);
				this.isChallenged = false;
			})
	}

	private onFinish(): void {
		this.activityBillService.finishActivityBill(this.activityBill.id)
			.then(() => {
				$.alert('结算成功！');

				this.activityBill.status = 'F';
				this.canFinish = false;
			})
	}

	private onChallenge(): void {
		this.challengeButtonText = "提交中";

		if (this.challengeMessage.length > 50) {
			$.alert("质疑说明过长！");
			this.challengeButtonText = "提交";

			return;
		} else if (this.challengeMessage.length == 0) {
			$.alert("请填写质疑说明！");
			this.challengeButtonText = "提交";

			return;
		}

		this.activatedRoute.params
			.switchMap((params: Params) => this.challengeService.createChallenge(+params['id'], this.challengeMessage))
			.subscribe(() => {
				this.challengeButtonText = "已提交";
				this.isChallenged = true;
				this.isClicked = false;

				let challenge = new Challenge();
				challenge.challenger_username = this.userService.getCurrentUsername();
				challenge.message = this.challengeMessage;
				this.challenges.push(challenge);

				$.alert("发送成功");
			});
	}

}

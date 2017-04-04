/**
 * Created by CuiH on 2017/4/3.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UserService} from "./user.service";

import "zepto";
import "sm";
import {ActivityBillService} from "./activity-bill.service";
import {ActivityBillParticipantPayment} from "./activity-bill-participant-payment";
import {ActivityBillItem} from "./activity-bill-item";
import {ActivityService} from "./activity.service";
import {User} from "./user";
import {ClubService} from "./club.service";
import {ActivityBill} from "./activity-bill";

declare let $: any;


@Component({
	selector: 'create-activity-bill',
	templateUrl: './create-activity-bill.component.html',
	styleUrls: ['./create-activity-bill.component.css'],
	providers: [
		ActivityBillService,
		ActivityService,
		ClubService
	]
})
export class CreateActivityBillComponent implements OnInit {

	private participants: User[] = [];
	private members: User[] = [];

	private activityBill = new ActivityBill();

	private activityBillItems: ActivityBillItem[] = [];
	private activityBillParticipantPayments: ActivityBillParticipantPayment[] = [];

	private createActivityBillButtonText = "发布";

	constructor(
		private userService: UserService,
		private activityBillService: ActivityBillService,
		private activityService: ActivityService,
		private clubService: ClubService,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.addItem();

		$.init();

		this.activatedRoute.params
			.switchMap((params: Params) => this.activityService.getActivityById(+params['activity_id']))
			.subscribe((activity) => {
				this.activityBill.id = activity.id;

				this.activityService.getAllActivityParticipantsById(activity.id)
					.then((participants) => {
						this. participants = participants;

						for (let i = 0; i < participants.length; i++) {
							let activityBillParticipantPayment = new ActivityBillParticipantPayment();
							activityBillParticipantPayment.participant_user_id = participants[i].id;
							activityBillParticipantPayment.participant_username = participants[i].username;
							this.activityBillParticipantPayments.push(activityBillParticipantPayment);
						}
					});

				this.clubService.getAllClubMembersById(activity.club_id)
					.then((members) => this.members = members);
			});
	}

	private addItem(): void {
		this.activityBillItems.push(new ActivityBillItem());
	}

	private onSubmit(): void {
		this.createActivityBillButtonText = "发布中...";

		if (this.validateAll()) {
			this.activityBill.activityBillItems = this.activityBillItems;
			this.activityBill.activityBillParticipantPayments = this.activityBillParticipantPayments;

			this.activityBillService.createActivityBill(this.activityBill)
				.then(() => {
					$.alert("发布成功！", () => this.goBack());
					this.createActivityBillButtonText = "已发布";
				})
		}

		this.createActivityBillButtonText = "发布";
	}

	private validateAll(): boolean {
		let itemsTotal = 0;
		for (let i = 0; i < this.activityBillItems.length; i++) {
			let currentItem = this.activityBillItems[i];

			if (currentItem.description.length > 30) {
				$.alert("付款项 #" + (i+1) + " 的描述过长");

				return false;
			} else if (currentItem.description.length == 0) {
				$.alert("请输入付款项 #" + (i+1) + " 的描述");

				return false;
			}

			if (currentItem.cost == null) {
				$.alert("请输入付款项 #" + (i+1) + " 的价格");

				return false;
			} else if (isNaN(currentItem.cost)) {
				$.alert("付款项 #" + (i+1) + " 的价格应为数字");

				return false;
			}

			if (currentItem.note.length > 30) {
				$.alert("付款项 #" + (i+1) + " 的备注过长");

				return false;
			}

			if (isNaN(currentItem.payer_user_id)) {
				$.alert("请为付款项 #" + (i+1) + " 选择合法支付人");

				return false;
			} else if (currentItem.payer_user_id == null) {
				$.alert("请为付款项 #" + (i+1) + " 选择支付人");

				return false;
			} else {
				currentItem.payer_user_id = +currentItem.payer_user_id;
			}

			itemsTotal += currentItem.cost;
		}

		let paymentsTotal = 0;
		for (let i = 0; i < this.activityBillParticipantPayments.length; i++) {
			let currentPayment = this.activityBillParticipantPayments[i];

			if (currentPayment.amount == null) {
				$.alert("请输入付款人 " + currentPayment.participant_username + " 的应付数额");

				return false;
			} else if (isNaN(currentPayment.amount)) {
				$.alert("付款人 #" + currentPayment.participant_username + " 的应付数额应为数字");

				return false;
			}

			paymentsTotal += currentPayment.amount;
		}

		if (itemsTotal != paymentsTotal) {
			$.alert("付款项总价与付款人总应付数额不相等！");

			return false;
		}

		return true;
	}

	private goBack(): void {
		this.location.back();
	}

}

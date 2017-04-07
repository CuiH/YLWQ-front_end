/**
 * Created by CuiH on 2017/4/6.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UserService} from "../user/user.service";
import {ActivityBillService} from "./activity-bill.service";
import {ActivityBillParticipantPayment} from "./activity-bill-participant-payment";
import {ActivityBillItem} from "./activity-bill-item";
import {ActivityService} from "../activity/activity.service";
import {User} from "../user/user";
import {ClubService} from "../club/club.service";
import {ActivityBill} from "./activity-bill";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'update-activity-bill',
	templateUrl: './update-activity-bill.component.html',
	styleUrls: ['./update-activity-bill.component.css'],
	providers: [
		ActivityService,
		ClubService
	]
})
export class UpdateActivityBillComponent implements OnInit {

	private members: User[] = [];

	private activityBill = new ActivityBill();

	private updateActivityBillButtonText = "提交";

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
			.switchMap((params: Params) => this.activityBillService.getActivityBillById(+params['id']))
			.subscribe((activityBill) => {
				this.activityBill = activityBill;

				this.activityService.getActivityById(activityBill.id)
					.then(result => this.clubService.getAllClubMembersById(result.club_id))
					.then((members) => this.members = members);
			});
	}

	private onChangeItem(item: ActivityBillItem, field: string, value: any): void {
		if (item.flag != 0 && item.flag != 1 && item.flag != 2) {
			item.flag = 1;
		}

		item[field] = value;
		if (field == 'cost') item[field] = +value;
	}

	private onChangePayment(payment: ActivityBillParticipantPayment, value: any): void {
		if (payment.flag != 1) {
			payment.flag = 1;
		}

		payment.amount = +value;
	}

	private onDeleteItem(item: ActivityBillItem, index: number): void {
		if (item.flag == 0) {
			this.activityBill.activityBillItems.splice(index, 1);
		} else {
			item.flag = 2;
		}
	}

	private addItem(): void {
		this.activityBill.activityBillItems.push(new ActivityBillItem());
	}

	private onSubmit(): void {
		this.updateActivityBillButtonText = "提交中...";

		if (this.validateAll()) {
			let activityBillSubmit = new ActivityBill();
			activityBillSubmit.id = this.activityBill.id;
			for (let i = 0; i < this.activityBill.activityBillItems.length; i++) {
				let currentItem = this.activityBill.activityBillItems[i];
				if (currentItem.flag || currentItem.flag == 0) {
					activityBillSubmit.activityBillItems.push(currentItem);
				}
			}

			for (let i = 0; i < this.activityBill.activityBillParticipantPayments.length; i++) {
				let currentPayment = this.activityBill.activityBillParticipantPayments[i];
				if (currentPayment.flag) {
					activityBillSubmit.activityBillParticipantPayments.push(currentPayment);
				}
			}

			this.activityBillService.updateActivityBill(activityBillSubmit)
				.then(() => {
					$.alert("提交成功！", () => this.goBack());
					this.updateActivityBillButtonText = "已提交";
				})
		}

		this.updateActivityBillButtonText = "提交";
	}

	private validateAll(): boolean {
		let itemsTotal = 0;
		for (let i = 0; i < this.activityBill.activityBillItems.length; i++) {
			let currentItem = this.activityBill.activityBillItems[i];

			if (currentItem.flag == 2) continue;

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

			itemsTotal += +currentItem.cost;
		}

		let paymentsTotal = 0;
		for (let i = 0; i < this.activityBill.activityBillParticipantPayments.length; i++) {
			let currentPayment = this.activityBill.activityBillParticipantPayments[i];

			if (currentPayment.amount == null) {
				$.alert("请输入付款人 " + currentPayment.participant_username + " 的应付数额");

				return false;
			} else if (isNaN(currentPayment.amount)) {
				$.alert("付款人 #" + currentPayment.participant_username + " 的应付数额应为数字");

				return false;
			}

			paymentsTotal += +currentPayment.amount;
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


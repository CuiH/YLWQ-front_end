/**
 * Created by CuiH on 2017/4/2.
 */

import {Component, OnInit, Input} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {UserDetail} from "./user-detail";


declare let $: any;


@Component({
	selector: 'update-user-detail',
	templateUrl: './update-user-detail.component.html',
	styleUrls: ['./update-user-detail.component.css'],
})
export class UpdateUserDetailComponent implements OnInit {

	private username = "";
	private userDetail = new UserDetail();

	private submitButtonText = "提交";

	constructor(
		private location: Location,
		private router: Router,
		private userService: UserService,
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		$.init();

		this.userService.getUserById(0)
			.then((user) => {
				this.username = user.username;
				this.userDetail = user.userDetail;

				this.userDetail.birthdate = this.userDetail.birthdate ? this.userDetail.birthdate.split('T')[0] : null;
				this.userDetail.description = this.userDetail.description ? this.userDetail.description : "";
			});
	}


	private onSubmit(): void {
		this.submitButtonText = "提交中...";
		if (this.validateForm()) {
			this.userService.updateUserDetail(this.userDetail)
				.then(() => {
					$.alert("修改成功！", () => this.goBack());
					this.submitButtonText = "提交";
				});
		}

		this.submitButtonText = "提交";
	}

	private validateForm(): boolean {
		if (!this.userDetail.birthdate || new Date(Date.parse(this.userDetail.birthdate)).toString() == "Invalid Date") {
			$.alert("请输入合法的生日");

			return false;
		}


		if (this.userDetail.gender && this.userDetail.gender != 1 && this.userDetail.gender != 0 && this.userDetail.gender != 2) {
			$.alert("请输入合法的性别");

			return false;
		}

		console.log(this.userDetail.description)

		if (this.userDetail.description && this.userDetail.description.length > 200) {
			$.alert("自我介绍过长");

			return false;
		}

		return true;
	}

	private goBack(): void {
		this.location.back();
	}

}


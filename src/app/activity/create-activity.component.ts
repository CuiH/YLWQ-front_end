/**
 * Created by CuiH on 2017/4/1.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {UserService} from "../user/user.service";
import {Activity} from "./activity";
import {ActivityService} from "./activity.service";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'create-activity',
	templateUrl: './create-activity.component.html',
	styleUrls: ['./create-activity.component.css'],
})
export class CreateActivityComponent implements OnInit {

	private activityForm: FormGroup;

	private createActivityText = "发起";
	private isCreated = "";

	private startTime = "";
	private endTime = "";

	constructor(
		private userService: UserService,
		private formBuilder: FormBuilder,
		private activityService: ActivityService,
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

		$.init();

		$(".datetime-picker-1").datetimePicker({});
		$(".datetime-picker-2").datetimePicker({});

		this.buildForm();
	}

	private buildForm(): void {
		this.activityForm = this.formBuilder.group({
			name: ["", [
				Validators.required,
				Validators.maxLength(30),
			]],
			location: ["", [
				Validators.required,
				Validators.maxLength(100),
			]],
			brief_intro: ["", [
				Validators.maxLength(200),
			]],
			note: ["", [
				Validators.maxLength(200),
			]]
		});
	}

	private onSubmit(): void {
		this.createActivityText = "发布中...";

		if (this.validateForm() && this.validateTime()) {
			this.activatedRoute.params
				.switchMap((params: Params) => {
					let activityObject = this.activityForm.value as Activity;
					activityObject.start_time = this.startTime;
					activityObject.end_time = this.endTime;
					activityObject.club_id = +params['club_id'];

					return this.activityService.createActivity(activityObject)
				})
				.subscribe(() => {
					$.alert("发布成功！", () => this.goBack());

					this.isCreated = "disabled";
					this.createActivityText = "已发布";
				});
		}

		this.createActivityText = "发布";
	}

	private validateForm(): boolean {
		if (!this.activityForm) return false;

		const form = this.activityForm;

		for (const field in this.formFields) {
			const control = form.get(field);
			if (control && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					$.alert(messages[key]);
					return false;
				}
			}
		}

		return true;
	}

	private validateTime(): boolean {
		const now = new Date();
		const startDate = new Date(Date.parse(this.startTime));
		const endDate = new Date(Date.parse(this.endTime));

		if (startDate.toString() == "Invalid Date") {
			$.alert("请输入合法的开始时间");
			return false;
		}

		if (endDate.toString() == "Invalid Date") {
			$.alert("请输入合法的结束时间");
			return false;
		}

		if (startDate.getTime() < now.getTime()) {
			$.alert("开始时间应晚于当前时间");
			return false;
		}

		if (endDate.getTime() < startDate.getTime()) {
			$.alert("结束时间应晚于开始时间");
			return false;
		}

		return true;
	}

	private goBack(): void {
		this.location.back();
	}

	private formFields = {
		name: '',
		location: '',
		brief_intro: '',
		note: '',
		start_time: '',
		end_time: ''
	};

	private validationMessages = {
		name: {
			required:      '请输入活动名称',
			maxLength:     '活动名称过长',
		},
		location: {
			required:      '请输入活动地点',
			maxLength:     '活动地点过长',
		},
		brief_intro: {
			maxLength:     '活动简介过长',
		},
		note: {
			maxLength:     '活动备注过长',
		},
	};

}

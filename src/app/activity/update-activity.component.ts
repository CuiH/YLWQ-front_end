/**
 * Created by CuiH on 2017/4/4.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UserService} from "../user.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Activity} from "./activity";
import {ActivityService} from "./activity.service";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'update-activity',
	templateUrl: './update-activity.component.html',
	styleUrls: ['./update-activity.component.css'],
})
export class UpdateActivityComponent implements OnInit {

	private activity = new Activity();

	private activityForm: FormGroup;

	private submitActivityText = "提交";

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

		this.buildForm();

		this.activatedRoute.params
			.switchMap((params: Params) => this.activityService.getActivityById(+params['id']))
			.subscribe((activity) => {
				this.activity = activity;

				this.initDateTimePicker();
				this.initiateForm();
			});
	}

	private initDateTimePicker(): void {
		const asd = this.activity.start_time.split(' ')[0].split('-');
		const ast = this.activity.start_time.split(' ')[1].split(':');

		$(".datetime-picker-1").datetimePicker({
			value: [asd[0], asd[1], asd[2], ast[0], ast[1]]
		});

		const aed = this.activity.end_time.split(' ')[0].split('-');
		const aet = this.activity.end_time.split(' ')[1].split(':');
		$(".datetime-picker-2").datetimePicker({
			value: [aed[0], aed[1], aed[2], aet[0], aet[1]]
		});
	}

	private initiateForm(): void {
		this.activityForm.setValue({
			location:    this.activity.location,
			brief_intro: this.activity.brief_intro,
			note: this.activity.note
		});
	}

	private buildForm(): void {
		this.activityForm = this.formBuilder.group({
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
		this.submitActivityText = "提交中...";

		if (this.validateForm() && this.validateTime()) {
			let activity = this.activityForm.value as Activity;
			activity.start_time = this.activity.start_time;
			activity.end_time = this.activity.end_time;
			activity.id = this.activity.id;

			this.activityService.updateActivity(activity)
				.then(() => {
					$.alert("提交成功！", () => this.goBack());

					this.submitActivityText = "已提交";
				});
		}

		this.submitActivityText = "提交";
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
		const startDate = new Date(Date.parse(this.activity.start_time));
		const endDate = new Date(Date.parse(this.activity.end_time));

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
		location: '',
		brief_intro: '',
		note: '',
	};

	private validationMessages = {
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

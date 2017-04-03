/**
 * Created by CuiH on 2017/4/1.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import "zepto";
import "sm";
import {ClubService} from "./club.service";
import {Club} from "./club";

declare let $: any;


@Component({
	selector: 'create-club',
	templateUrl: './create-club.component.html',
	styleUrls: ['./create-club.component.css'],
	providers: [ClubService]
})
export class CreateClubComponent implements OnInit {

	private clubForm: FormGroup;

	private createClubButtonText = "创建";
	private isCreated = "";

	constructor(
		private userService: UserService,
		private formBuilder: FormBuilder,
		private clubService: ClubService,
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
	}

	private buildForm(): void {
		this.clubForm = this.formBuilder.group({
			name: ["", [
				Validators.required,
				Validators.maxLength(30),
			]],
			brief_intro: ["", [
				Validators.maxLength(200),
			]]
		});
	}

	private onSubmit(): void {
		this.createClubButtonText = "创建中...";

		if (this.validateForm()) {

			const clubObject = this.clubForm.value as Club;
			this.clubService.createClub(clubObject).then(() => {
				$.alert("创建成功！", () => this.goBack());
				this.isCreated = "disabled";
				this.createClubButtonText = "已创建";
			});
		}

		this.createClubButtonText = "创建";
	}

	private validateForm(): boolean {
		if (!this.clubForm) return;

		const form = this.clubForm;

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

	private goBack(): void {
		this.location.back();
	}

	private formFields = {
		name: '',
		brief_intro: ''
	};

	private validationMessages = {
		name: {
			required:      '请输入名字',
			maxLength:     '名字过长',
		},
		brief_intro: {
			maxLength:     '简介过长',
		},
	};

}

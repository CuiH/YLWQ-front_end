/**
 * Created by CuiH on 2017/4/4.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {UserService} from "./user.service";
import {ClubService} from "./club.service";
import {Club} from "./club";

import "zepto";
import "sm";


declare let $: any;


@Component({
	selector: 'update-club',
	templateUrl: './update-club.component.html',
	styleUrls: ['./update-club.component.css'],
	providers: [ClubService]
})
export class UpdateClubComponent implements OnInit {

	private clubForm: FormGroup;

	private club = new Club();

	private submitClubButtonText = "提交";

	constructor(
		private userService: UserService,
		private formBuilder: FormBuilder,
		private clubService: ClubService,
		private location: Location,
		private activatedRoute: ActivatedRoute,
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
			.switchMap((params: Params) => this.clubService.getClubById(+params['id']))
			.subscribe((club) => {
				this.club = club;

				this.initiateForm();
			});
	}

	private initiateForm(): void {
		this.clubForm.setValue({
			brief_intro: this.club.brief_intro,
		});
	}

	private buildForm(): void {
		this.clubForm = this.formBuilder.group({
			brief_intro: ["", [
				Validators.maxLength(200),
			]]
		});
	}

	private onSubmit(): void {
		this.submitClubButtonText = "提交中...";

		if (this.validateForm()) {
			let clubObject = this.clubForm.value as Club;
			clubObject.id = this.club.id;

			this.clubService.updateClub(clubObject).then(() => {
				$.alert("提交成功！", () => this.goBack());
				this.submitClubButtonText = "已提交";
			});
		}

		this.submitClubButtonText = "提交";
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
		brief_intro: ''
	};

	private validationMessages = {
		brief_intro: {
			maxLength:     '简介过长',
		},
	};

}

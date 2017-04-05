/**
 * Created by CuiH on 2017/3/28.
 */

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user/user.service";
import {User} from "./user/user";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

	private userForm: FormGroup;

	private logInButtonText = "登录";
	private registerButtonText = "注册";

	constructor(
		private userService: UserService,
	    private formBuilder: FormBuilder,
	    private location: Location,
	    private router: Router
	) {
	}

	private goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {
		$.init();

		this.buildForm();
	}

	private buildForm(): void {
		this.userForm = this.formBuilder.group({
			username: ["", [
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(16),
			]],
			password: ["", [
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(16),
			]]
		});
	}

	private validateForm(): boolean {
		if (!this.userForm) return;

		const form = this.userForm;

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

	private onLogIn(): void {
		this.logInButtonText = "登录中...";

		if(this.validateForm()) {
			this.userService.logIn(this.userForm.value as User)
				.then((username) => {
					$.alert("登录成功", () => this.location.back());
				})
		}

		this.logInButtonText = "登录";
	}

	private onRegister(): void {
		this.registerButtonText = "注册中...";

		if(this.validateForm()) {
			this.userService.register(this.userForm.value as User)
				.then(() => this.userService.logIn(this.userForm.value as User))
				.then(() => $.alert("注册成功", () => this.location.back()));
		}

		this.registerButtonText = "注册";
	}

	formFields = {
		username: '',
		password: ''
	};

	validationMessages = {
		username: {
			required:      '请输入用户名',
			maxLength:     '用户名过长',
		},
		password: {
			required:      '请输入密码',
			maxLength:     '密码过长',
		},
	};
}

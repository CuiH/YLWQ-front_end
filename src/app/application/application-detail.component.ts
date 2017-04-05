/**
 * Created by CuiH on 2017/4/1.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {UserService} from "../user.service";


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {ApplicationService} from "./application.service";
import {Application} from "./application";

declare let $: any;


@Component({
	selector: 'application-detail',
	templateUrl: './application-detail.component.html',
	styleUrls: ['./application-detail.component.css'],
})
export class ApplicationDetailComponent implements OnInit {

	private application = new Application();

	constructor(
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private userService: UserService,
	    private applicationService: ApplicationService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		$.init();

		this.activatedRoute.params
			.switchMap((params: Params) => this.applicationService.getApplicationById(+params['id']))
			.subscribe((application) => {
				this.application = application;
			});
	}

	private onAccept(): void {
		this.activatedRoute.params
			.switchMap((params: Params) => this.applicationService.acceptApplication(+params['id']))
			.subscribe(() => {
				this.application.status = 'A';

				$.alert("操作成功！");
			});
	}

	private onReject(): void {
		this.activatedRoute.params
			.switchMap((params: Params) => this.applicationService.rejectApplication(+params['id']))
			.subscribe(() => {
				this.application.status = 'R';

				$.alert("操作成功！");
			});
	}

	private showMessage(): void {
		if (!this.application) return;

		$.alert(this.application.message);
	}

	private goBack(): void {
		this.location.back();
	}

}

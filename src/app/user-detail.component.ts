/**
 * Created by CuiH on 2017/4/1.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";

import {UserService} from "./user.service";
import {User} from "./user";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";


declare let $: any;


@Component({
	selector: 'user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

	private user = new User();

	private isSelf = false;

	constructor(
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private userService: UserService,
	) {

	}

	ngOnInit(): void {
		$.init();

		this.activatedRoute.params
			.switchMap((params: Params) => this.userService.getUserById(+params['id']))
			.subscribe((user) => {
				this.user = user;
				if (this.userService.getCurrentUserId() == user.id) this.isSelf = true;
			});
	}

	private showDescription(): void {
		if (!this.user) return;

		$.alert(this.user.userDetail.description, "自我介绍");
	}

	private goBack(): void {
		this.location.back();
	}

}

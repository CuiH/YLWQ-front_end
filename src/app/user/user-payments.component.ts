/**
 * Created by CuiH on 2017/4/7.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router} from "@angular/router";

import {UserService} from "./user.service";
import {UserPayment} from "./user-payment";


@Component({
	selector: 'user-payments',
	templateUrl: './user-payments.component.html',
	styleUrls: ['./user-payments.component.css'],
})
export class UserPaymentsComponent implements OnInit {

	private userPayments: UserPayment[];

	constructor(
		private userService: UserService,
		private location: Location,
		private router: Router,
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.userService.getAllUserPayments()
			.then((userPayments) => {
				this.userPayments = userPayments;
			});
	}

	goBack(): void {
		this.location.back();
	}

}


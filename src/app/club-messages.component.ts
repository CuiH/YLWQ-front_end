/**
 * Created by CuiH on 2017/4/2.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, Params, ActivatedRoute} from "@angular/router";

import {UserService} from "./user.service";
import {ClubMessage} from "./club-message";
import {ClubService} from "./club.service";


@Component({
	selector: 'club-messages',
	templateUrl: './club-messages.component.html',
	styleUrls: ['./club-messages.component.css'],
	providers: [ClubService]
})
export class ClubMessagesComponent implements OnInit {

	private clubMessages: ClubMessage[] = [];

	constructor(
		private userService: UserService,
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	    private clubService: ClubService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.activatedRoute.params
			.switchMap((params: Params) => this.clubService.getAllClubMessagesById(+params['club_id']))
			.subscribe((clubMessages) => {
				this.clubMessages = clubMessages;
			});
	}

	goBack(): void {
		this.location.back();
	}

}


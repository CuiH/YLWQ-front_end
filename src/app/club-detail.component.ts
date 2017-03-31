/**
 * Created by CuiH on 2017/3/29.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {ActivatedRoute, Params} from "@angular/router";

import {ClubService} from "./club.service";
import {Club} from "./club";
import {UserService} from "./user.service";
import {CheckingService} from "./checking.service";


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {User} from "./user";
import {ClubBulletin} from "./club-bulletin";
import {ClubMessage} from "./club-message";

declare let $: any;


@Component({
	selector: 'club-detail',
	templateUrl: './club-detail.component.html',
	styleUrls: ['./club-detail.component.css'],
	providers: [ClubService]
})
export class ClubDetailComponent implements OnInit {

	private club: Club = new Club();

	private isMember = false;
	private loggedIn = false;
	private isAdmin = false;

	private clubBulletin: ClubBulletin = new ClubBulletin();
	private clubMessages: ClubMessage[] = [];

	constructor(
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private clubService: ClubService,
	    private userService: UserService,
	    private checkingService: CheckingService
	) {

	}

	ngOnInit(): void {
		$.init();

		this.loggedIn = this.userService.isLoggedIn();

		this.activatedRoute.params
			.switchMap((params: Params) => this.clubService.getClubById(+params['id']))
			.subscribe((club) => {
				this.club = club;

				if (this.userService.isLoggedIn()) {
					this.loggedIn = true;
					this.checkingService.checkUserClubMap(this.userService.getCurrentUserId(), this.club.id)
						.then((result) => {
							this.isMember = result;

							if (this.isMember) {
								this.clubService.getLatestClubBulletinById(this.club.id).then(clubBulletin => this.clubBulletin = clubBulletin);
								this.checkingService.checkUserClubMapAdmin(this.userService.getCurrentUserId(), this.club.id).then(result => this.isAdmin = result);
								this.clubService.getLatestThreeClubMessagesById(this.club.id).then(clubMessages => this.clubMessages = clubMessages);
							}
						})
				}
			});
	}

	private goBack(): void {
		this.location.back();
	}

	private showBriefIntro(): void {
		if (!this.club) return;

		$.alert(this.club.brief_intro, "简介");
	}

}

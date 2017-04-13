/**
 * Created by CuiH on 2017/4/2.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, Params, ActivatedRoute} from "@angular/router";

import {UserService} from "../user/user.service";
import {ClubMessage} from "../club-message/club-message";
import {ClubService} from "./club.service";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'club-messages',
	templateUrl: './club-messages.component.html',
	styleUrls: ['./club-messages.component.css'],
})
export class ClubMessagesComponent implements OnInit, OnDestroy {

	private clubMessages: ClubMessage[] = [];

	private loading = true;
	private page = 1;


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

		$.init();

		this.getItems();

		$(document).on('infinite', '.infinite-scroll-bottom', () => {
			if (this.loading) return;

			this.loading = true;

			this.getItems();
		});
	}

	ngOnDestroy(): void {
		$(document).off('infinite', '.infinite-scroll-bottom')
	}

	private getItems(): void {
		const originalLength = this.clubMessages.length;

		this.activatedRoute.params
			.switchMap((params: Params) => this.clubService.getAllClubMessagesById(+params['id'], this.page))
			.subscribe((clubMessages) => {
				this.clubMessages = this.clubMessages.concat(clubMessages);

				if ((this.page == 1 && this.clubMessages.length < 10) || this.clubMessages.length == originalLength) {
					// 加载完毕，则注销无限加载事件，以防不必要的加载
					$.detachInfiniteScroll($('.infinite-scroll'));
					// 删除加载提示符
					$('.infinite-scroll-preloader').remove();
				}

				this.page += 1;

				this.loading = false;

				$.refreshScroller();
			});
	}

	private goBack(): void {
		this.location.back();
	}

}


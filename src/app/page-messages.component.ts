/**
 * Created by CuiH on 2017/3/31.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {UserService} from "./user/user.service";
import {Notification} from "./notification/notification";
import {NotificationService} from "./notification/notification.service";

import "zepto";
import "sm";

declare let $: any;


@Component({
	selector: 'page-messages',
	templateUrl: './page-messages.component.html',
	styleUrls: ['./page-messages.component.css'],
	providers: [NotificationService]
})
export class PageMessagesComponent implements OnInit {

	private notifications: Notification[] = [];

	private loading = false;
	private page = 1;

	constructor(
		private userService: UserService,
		private router: Router,
	    private notificationService: NotificationService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		$.init();

		this.getItems();

		$(document).on('infinite', '.infinite-scroll-bottom', ()=> {
			if (this.loading) return;

			this.loading = true;

			this.getItems();
		});
	}

	private getItems(): void {
		const originalLength = this.notifications.length;

		this.userService.getAllUserNotifications(this.page)
			.then((notifications) => {

				this.loading = false;

				this.notifications = this.notifications.concat(notifications);


				if ((this.page == 1 && this.notifications.length < 10) || this.notifications.length == originalLength) {
					// 加载完毕，则注销无限加载事件，以防不必要的加载
					$.detachInfiniteScroll($('.infinite-scroll'));
					// 删除加载提示符
					$('.infinite-scroll-preloader').remove();
				}

				this.page += 1;

				$.refreshScroller();
			});
	}

	private onClickNotification(notification: Notification): void {
		notification.opened = !notification.opened;

		if (notification.is_read == 0) {
			notification.is_read = 1;

			this.notificationService.readNotification(notification.id).then();
		}


	}

}


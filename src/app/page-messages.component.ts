/**
 * Created by CuiH on 2017/3/31.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {UserService} from "./user/user.service";
import {Notification} from "./notification/notification";
import {NotificationService} from "./notification/notification.service";


@Component({
	selector: 'page-messages',
	templateUrl: './page-messages.component.html',
	styleUrls: ['./page-messages.component.css'],
	providers: [NotificationService]
})
export class PageMessagesComponent implements OnInit {

	private notifications: Notification[] = [];

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

		this.userService.getAllUserNotifications()
			.then((notifications) => {
				this.notifications = notifications;
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


/**
 * Created by CuiH on 2017/3/28.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';

import {User} from "./user";
import {Club} from "./club";

import {CookieService} from 'angular2-cookie/core';
import { CookieOptionsArgs } from 'angular2-cookie/services/cookie-options-args.model';
import {Activity} from "./activity";

import "zepto";
import "sm";
import {Notification} from "./notification";

declare let $: any;


@Injectable()
export class UserService {

	private currentUserId: number;
	private currentUsername: string;
	private currentUserToken: string;
	private loggedIn: boolean;


	constructor(
		private http: Http,
	    private cookieService: CookieService
	) {
		$.init();

		this.initFromCookie();
	};

	private initFromCookie(): void {
		this.currentUserId = +this.cookieService.get("current_user_id");
		this.currentUsername = this.cookieService.get("current_username");
		this.currentUserToken = this.cookieService.get("current_user_token");

		if (this.currentUserId && this.currentUsername && this.currentUserToken) {
			this.loggedIn = true;
		} else {
			this. loggedIn = false;
		}
	}

	private saveToCookie(user: any): void {
		const expiresTime = new Date();
		expiresTime.setTime(expiresTime.getTime() + 333333333);
		const cookieOptions: CookieOptionsArgs = {
			expires: expiresTime
		};

		this.cookieService.removeAll();
		this.cookieService.put("current_user_id", user.id, cookieOptions);
		this.cookieService.put("current_username", user.username, cookieOptions);
		this.cookieService.put("current_user_token", user.token, cookieOptions);
	}

	getCurrentUsername(): string {
		return this.currentUsername;
	}

	getCurrentUserId(): number {
		return this.currentUserId;
	}

	getCurrentUserToken(): string {
		return this.currentUserToken;
	}

	isLoggedIn(): boolean {
		return this.loggedIn;
	}

	logIn(user: User): Promise<string> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded"
			}),
			body: 'username=' + user.username + '&password=' + user.password,
		});

		return this.http.request('http://172.18.43.152:3000/api/user/log_in', options)
			.toPromise()
			.then((res) => {
				const user = res.json().data;
				this.currentUserId = user.id;
				this.currentUsername = user.username;
				this.currentUserToken = user.token;
				this.loggedIn = true;

				this.saveToCookie(user);

				$.hidePreloader();

				return this.getCurrentUsername();
			})
			.catch(this.handleError);
	}

	logOff(): void {
		this.cookieService.removeAll();

		this.loggedIn = false;
	}

	getAllUserClubs(): Promise<Club[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_clubs', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.clubs as Club[];
			})
			.catch(this.handleError);
	}

	getAllUserParticipatedActivities(): Promise<Activity[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_participated_activities', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.activities as Activity[];
			})
			.catch(this.handleError);
	}

	getAllUserSponsoredActivities(): Promise<Activity[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_sponsored_activities', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.activities as Activity[];
			})
			.catch(this.handleError);
	}

	getAllUserNotifications(): Promise<Notification[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_notifications', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.notifications as Notification[];
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

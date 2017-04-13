/**
 * Created by CuiH on 2017/3/28.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import {Club} from "../club/club";
import {Activity} from "../activity/activity";
import {Notification} from "../notification/notification";
import {UserDetail} from "./user-detail";
import {User} from "./user";

import {CookieService} from 'angular2-cookie/core';
import { CookieOptionsArgs } from 'angular2-cookie/services/cookie-options-args.model';

import 'rxjs/add/operator/toPromise';
import {UserPayment} from "./user-payment";
import {UserAccount} from "./UserAccount";


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

				return this.getCurrentUsername();
			})
			.catch(this.handleError);
	}

	register(user: User): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded"
			}),
			body: 'username=' + user.username + '&password=' + user.password,
		});

		return this.http.request('http://172.18.43.152:3000/api/user/register', options)
			.toPromise()
			.then((res) => {
			})
			.catch(this.handleError);
	}

	logOff(): void {
		this.cookieService.removeAll();

		this.loggedIn = false;
	}

	getUserById(id: number): Promise<User> {
		if (id == 0) id = this.getCurrentUserId();

		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/user/' + id, options)
			.toPromise()
			.then((res) => res.json().data.user as User)
			.catch(this.handleError);
	}

	updateUserDetail(userDetail: UserDetail): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.currentUserToken
			}),
			body: 'gender=' + userDetail.gender + '&description=' + userDetail.description + '&birthdate=' + userDetail.birthdate,
		});

		return this.http.request('http://172.18.43.152:3000/api/user/update', options)
			.toPromise()
			.then(() => {
			})
			.catch(this.handleError);
	}

	getAllUserClubs(): Promise<Club[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_clubs', options)
			.toPromise()
			.then((res) => {
				return res.json().data.clubs as Club[];
			})
			.catch(this.handleError);
	}

	getAllUserParticipatedActivities(): Promise<Activity[]> {

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_participated_activities', options)
			.toPromise()
			.then((res) => {

				return res.json().data.activities as Activity[];
			})
			.catch(this.handleError);
	}

	getAllUserSponsoredActivities(): Promise<Activity[]> {

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_sponsored_activities', options)
			.toPromise()
			.then((res) => {

				return res.json().data.activities as Activity[];
			})
			.catch(this.handleError);
	}

	getAllUserNotifications(page: number): Promise<Notification[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_notifications?page=' + page, options)
			.toPromise()
			.then((res) => {
				return res.json().data.notifications as Notification[];
			})
			.catch(this.handleError);
	}

	getUserAccount(): Promise<UserAccount> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_user_account', options)
			.toPromise()
			.then((res) => {
				return res.json().data.userAccount as UserAccount;
			})
			.catch(this.handleError);
	}

	getAllUserPayments(): Promise<UserPayment[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.currentUserToken
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/user/get_all_user_payments', options)
			.toPromise()
			.then((res) => {
				return res.json().data.userPayments as UserPayment[];
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		return Promise.reject(err);
	}
}

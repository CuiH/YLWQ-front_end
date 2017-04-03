/**
 * Created by CuiH on 2017/4/1.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import {UserService} from "./user.service";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {Application} from "./application";


declare let $: any;


@Injectable()
export class ApplicationService {

	constructor(
		private http: Http,
		private userService: UserService,
	) {
		$.init();
	};

	getApplicationById(id: number): Promise<Application> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/application/' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.application as Application;
			})
			.catch(this.handleError);
	}

	createApplication(clubId: number, message: string): Promise<boolean> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken(),
			}),
			body: 'club_id=' + clubId + '&message=' + message,
		});

		return this.http.request('http://172.18.43.152:3000/api/application/create', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return;
			})
			.catch(this.handleError);
	}

	acceptApplication(id: number): Promise<boolean> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken(),
			}),
			body: 'application_id=' + id,
		});

		return this.http.request('http://localhost:3000/api/application/accept', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return;
			})
			.catch(this.handleError);
	}

	rejectApplication(id: number): Promise<boolean> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken(),
			}),
			body: 'application_id=' + id,
		});

		return this.http.request('http://localhost:3000/api/application/reject', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return;
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

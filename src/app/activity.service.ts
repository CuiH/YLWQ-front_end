/**
 * Created by CuiH on 2017/3/30.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";
import {Activity} from "./activity";
import {UserService} from "./user.service";

declare let $: any;


@Injectable()
export class ActivityService {

	constructor(
		private http: Http,
	    private userService: UserService
	) {
		$.init();
	};

	getActivityById(id: number): Promise<Activity> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://localhost:3000/api/activity/' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.activity as Activity;
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);
	}
}

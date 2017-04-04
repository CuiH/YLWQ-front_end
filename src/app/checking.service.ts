/**
 * Created by CuiH on 2017/3/29.
 */

import {Http, RequestMethod, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Injectable()
export class CheckingService {

	constructor(
		private http: Http
	) {
		$.init();
	};

	checkUserClubMap(userId: number, clubId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/checking/user_club_map?user_id=' + userId + "&club_id=" + clubId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
			.catch(this.handleError);
	}

	checkUserActivityMap(userId: number, activityId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/checking/user_activity_map?user_id=' + userId + "&activity_id=" + activityId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
			.catch(this.handleError);
	}

	checkUserClubMapAdmin(userId: number, clubId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/checking/user_club_map_admin?user_id=' + userId + "&club_id=" + clubId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
			.catch(this.handleError);
	}

	checkApplicationUnread(userId: number, clubId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/checking/application_unread?user_id=' + userId + "&club_id=" + clubId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
			.catch(this.handleError);
	}

	checkUserActivitySponsor(userId: number, activityId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/checking/user_activity_sponsor?user_id=' + userId + "&activity_id=" + activityId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

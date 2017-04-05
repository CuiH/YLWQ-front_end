/**
 * Created by CuiH on 2017/3/30.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import { Location }               from '@angular/common';

import {Activity} from "./activity";
import {UserService} from "../user/user.service";
import {User} from "../user/user";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Injectable()
export class ActivityService {

	constructor(
		private http: Http,
	    private userService: UserService,
		private location: Location
	) {
		$.init();
	};

	createActivity(activity: Activity): Promise<any> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'club_id=' + activity.club_id +
			'&name=' + activity.name +
			'&start_time=' + activity.start_time +
			'&end_time=' + activity.end_time +
			'&location=' + activity.location +
			'&brief_intro=' + activity.brief_intro +
			'&note=' + activity.note,
		});

		return this.http.request('http://172.18.43.152:3000/api/activity/create', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return true;
			})
			.catch(this.handleError);
	}

	updateActivity(activity: Activity): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'id=' + activity.id +
			'&start_time=' + activity.start_time +
			'&end_time=' + activity.end_time +
			'&location=' + activity.location +
			'&brief_intro=' + activity.brief_intro +
			'&note=' + activity.note,
		});

		return this.http.request('http://172.18.43.152:3000/api/activity/update', options)
			.toPromise()
			.then((res) => {
				return true;
			})
			.catch(this.handleError);
	}

	getActivityById(id: number): Promise<Activity> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/activity/' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.activity as Activity;
			})
			.catch(this.handleError);
	}

	getAllActivityParticipantsById(id: number): Promise<User[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/activity/get_all_participants?activity_id=' + id, options)
			.toPromise()
			.then((res) => res.json().data.participants as User[])
			.catch(this.handleError);
	}

	attendActivity(activityId: number): Promise<any> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken(),
			}),
			body: 'activity_id=' + activityId,
		});

		return this.http.request('http://172.18.43.152:3000/api/activity/attend', options)
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

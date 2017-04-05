/**
 * Created by CuiH on 2017/3/31.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import {UserService} from "../user/user.service";
import {ClubBulletin} from "./club-bulletin";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Injectable()
export class ClubBulletinService {

	constructor(
		private http: Http,
		private userService: UserService
	) {
		$.init();
	};

	createClubBulletin(clubBulletin: ClubBulletin): Promise<boolean> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'title=' + clubBulletin.title + '&content=' + clubBulletin.content + '&club_id=' + clubBulletin.club_id,
		});

		return this.http.request('http://172.18.43.152:3000/api/club_bulletin/create', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return true;
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

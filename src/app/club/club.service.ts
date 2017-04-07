/**
 * Created by CuiH on 2017/3/29.
 */

import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import {Club} from "./club";
import {Activity} from "../activity/activity";
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {ClubBulletin} from "../club-bulletin/club-bulletin";
import {ClubMessage} from "../club-message/club-message";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Injectable()
export class ClubService {

	constructor(
		private http: Http,
	    private userService: UserService
	) {
		$.init();
	};

	createClub(club: Club): Promise<boolean> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'name=' + club.name + '&brief_intro=' + club.brief_intro,
		});

		return this.http.request('http://172.18.43.152:3000/api/club/create', options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return true;
			})
			.catch(this.handleError);
	}

	updateClub(club: Club): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'id=' + club.id + '&brief_intro=' + club.brief_intro,
		});

		return this.http.request('http://172.18.43.152:3000/api/club/update', options)
			.toPromise()
			.then((res) => {
				return true;
			})
			.catch(this.handleError);
	}

	quitClub(id: number): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'club_id=' + id
		});

		return this.http.request('http://172.18.43.152:3000/api/club/quit', options)
			.toPromise()
			.then((res) => {
				return true;
			})
			.catch(this.handleError);
	}

	getClubById(id: number): Promise<Club> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/club/' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.club as Club;
			})
			.catch(this.handleError);
	}

	getAllClubsByPartName(partName: string): Promise<Club[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/club/search?part_name=' + partName, options)
			.toPromise()
			.then((res) => {
				return res.json().data.clubs as Club[];
			})
			.catch(this.handleError);
	}

	getAllClubActivitiesById(id: number): Promise<Activity[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/club/get_all_activities?club_id=' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.activities as Activity[];
			})
			.catch(this.handleError);
	}

	getAllClubMembersById(id: number): Promise<User[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/club/get_all_members?club_id=' + id, options)
			.toPromise()
			.then((res) => {
				return res.json().data.members as User[];
			})
			.catch(this.handleError);
	}

	getLatestClubBulletinById(id: number): Promise<ClubBulletin> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/club_bulletin/get_latest_one?club_id=' + id, options)
			.toPromise()
			.then((res) => {
				return res.json().data.clubBulletin as ClubBulletin;
			})
			.catch(this.handleError);
	}

	getLatestThreeClubMessagesById(id: number): Promise<ClubMessage[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/club/get_latest_three_club_messages?club_id=' + id, options)
			.toPromise()
			.then((res) => {
				return res.json().data.clubMessages as ClubMessage[];
			})
			.catch(this.handleError);
	}

	getAllClubMessagesById(id: number): Promise<ClubMessage[]> {
		$.showPreloader();

		let options = new RequestOptions({
			method: RequestMethod.Get,
			headers: new Headers({
				'x-access-token': this.userService.getCurrentUserToken()
			}),
		});

		return this.http.request('http://172.18.43.152:3000/api/club/get_all_club_messages?club_id=' + id, options)
			.toPromise()
			.then((res) => {
				$.hidePreloader();

				return res.json().data.clubMessages as ClubMessage[];
			})
			.catch(this.handleError);
	}

	getHottestThreeClubs(): Promise<Club[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/club/get_hottest_three', options)
			.toPromise()
			.then((res) => {
				return res.json().data.clubs as Club[];
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

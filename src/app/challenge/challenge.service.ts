/**
 * Created by CuiH on 2017/4/6.
 */

import {Injectable} from "@angular/core";
import {RequestMethod, RequestOptions, Http, Headers} from "@angular/http";

import {UserService} from "../user/user.service";


@Injectable()
export class ChallengeService {

	constructor(
		private http: Http,
	    private userService: UserService
	) {
	};

	createChallenge(activityBillId: number, message: string): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'activity_bill_id=' + activityBillId + '&message=' + message
		});

		return this.http.request('http://172.18.43.152:3000/api/challenge/create', options)
			.toPromise()
			.then(() => {
				return ;
			})
			.catch(this.handleError);
	}

	deleteChallenge(challengeId: number): Promise<any> {
		let options = new RequestOptions({
			method: RequestMethod.Post,
			headers: new Headers({
				'Content-Type': "application/x-www-form-urlencoded",
				'x-access-token': this.userService.getCurrentUserToken()
			}),
			body: 'challenge_id=' + challengeId
		});

		return this.http.request('http://172.18.43.152:3000/api/challenge/delete', options)
			.toPromise()
			.then(() => {
				return ;
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		return Promise.reject(err);
	}
}

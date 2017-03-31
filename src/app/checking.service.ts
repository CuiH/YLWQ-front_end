/**
 * Created by CuiH on 2017/3/29.
 */

import {Http, RequestMethod, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CheckingService {

	constructor(
		private http: Http
	) { };

	checkUserClubMap(userId: number, clubId: number): Promise<boolean> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://localhost:3000/api/checking/user_club_map?user_id=' + userId + "&club_id=" + clubId, options)
			.toPromise()
			.then((res) => {
				return res.json().data.result;
			})
	}
}

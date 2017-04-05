/**
 * Created by CuiH on 2017/4/4.
 */

import {Http, RequestMethod, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

import {News} from "./news";

import 'rxjs/add/operator/toPromise';

import "zepto";
import "sm";

declare let $: any;


@Injectable()
export class NewsService {

	constructor(
		private http: Http
	) {
		$.init();
	};

	getNewsById(id: number): Promise<News> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/news/' + id, options)
			.toPromise()
			.then((res) => {
				return res.json().data.news as News;
			})
			.catch(this.handleError);
	}

	getLatestEightNews(): Promise<News[]> {
		let options = new RequestOptions({
			method: RequestMethod.Get,
		});

		return this.http.request('http://172.18.43.152:3000/api/news/get_latest_eight', options)
			.toPromise()
			.then((res) => {
				return res.json().data.news as News[];
			})
			.catch(this.handleError);
	}

	private handleError(err: any): any {
		$.hidePreloader();

		$.alert(err.json().message);

		return Promise.reject(err);
	}
}

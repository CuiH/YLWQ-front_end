/**
 * Created by CuiH on 2017/3/31.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UserService} from "../user.service";

import {User} from "../user";
import {ActivityService} from "./activity.service";


@Component({
	selector: 'activity-participants',
	templateUrl: './activity-participants.component.html',
	styleUrls: ['./activity-participants.component.css'],
})
export class ActivityParticipantsComponent implements OnInit {

	private participants: User[] = [];

	constructor(
		private userService: UserService,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
		private activityService: ActivityService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.activatedRoute.params
			.switchMap((params: Params) => this.activityService.getAllActivityParticipantsById(+params['id']))
			.subscribe((participants) => {
				this.participants = participants;
			});
	}

	private goBack(): void {
		this.location.back();
	}

}


/**
 * Created by CuiH on 2017/3/30.
 */

import {Component, OnInit} from "@angular/core";
import { Location }               from '@angular/common';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {ClubService} from "./club.service";


@Component({
	selector: 'club-members',
	templateUrl: './club-members.component.html',
	styleUrls: ['./club-members.component.css'],
})
export class ClubMembersComponent implements OnInit {

	private members: User[] = [];

	constructor(
		private userService: UserService,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
	    private clubService: ClubService
	) {

	}

	ngOnInit(): void {
		if (!this.userService.isLoggedIn()) {
			this.router.navigate(['/log_in']);

			return;
		}

		this.activatedRoute.params
			.switchMap((params: Params) => this.clubService.getAllClubMembersById(+params['id']))
			.subscribe((members) => {
				this.members = members;
			});
	}

	private goBack(): void {
		this.location.back();
	}

}

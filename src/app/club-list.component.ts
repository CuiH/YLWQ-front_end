/**
 * Created by CuiH on 2017/4/7.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import { Location }               from '@angular/common';

import {ClubService} from "./club/club.service";
import {Club} from "./club/club";


@Component({
	selector: 'club-list',
	templateUrl: './club-list.component.html',
	styleUrls: ['./club-list.component.css'],
	providers: [ClubService]
})
export class ClubListComponent implements OnInit {

	private clubs: Club[];

	private searchName = "";

	constructor(
		private clubService: ClubService,
		private location: Location,
		private activatedRoute: ActivatedRoute,
	) {

	}

	ngOnInit(): void {
		this.activatedRoute.params
			.switchMap((params: Params) => this.clubService.getAllClubsByPartName(params['part_name']))
			.subscribe((clubs) => this.clubs = clubs);
	}

	private onSearch(): void {
		if (this.searchName == "") return;

		this.clubService.getAllClubsByPartName(this.searchName)
			.then(clubs => this.clubs = clubs);
	}

	private goBack(): void {
		this.location.back();
	}

}

/**
 * Created by CuiH on 2017/4/7.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var club_service_1 = require("./club/club.service");
var ClubListComponent = (function () {
    function ClubListComponent(clubService, location, activatedRoute) {
        this.clubService = clubService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.searchName = "";
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.clubService.getAllClubsByPartName(params['part_name']); })
            .subscribe(function (clubs) { return _this.clubs = clubs; });
    };
    ClubListComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.searchName == "")
            return;
        this.clubService.getAllClubsByPartName(this.searchName)
            .then(function (clubs) { return _this.clubs = clubs; });
    };
    ClubListComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ClubListComponent;
}());
ClubListComponent = __decorate([
    core_1.Component({
        selector: 'club-list',
        templateUrl: './club-list.component.html',
        styleUrls: ['./club-list.component.css'],
        providers: [club_service_1.ClubService]
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService,
        common_1.Location,
        router_1.ActivatedRoute])
], ClubListComponent);
exports.ClubListComponent = ClubListComponent;
//# sourceMappingURL=club-list.component.js.map
/**
 * Created by CuiH on 2017/3/29.
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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var club_service_1 = require("./club.service");
var club_1 = require("./club");
var user_service_1 = require("./user.service");
var checking_service_1 = require("./checking.service");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var club_bulletin_1 = require("./club-bulletin");
var ClubDetailComponent = (function () {
    function ClubDetailComponent(location, activatedRoute, clubService, userService, checkingService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.clubService = clubService;
        this.userService = userService;
        this.checkingService = checkingService;
        this.club = new club_1.Club();
        this.isMember = false;
        this.loggedIn = false;
        this.isAdmin = false;
        this.clubBulletin = new club_bulletin_1.ClubBulletin();
        this.clubMessages = [];
    }
    ClubDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.init();
        this.loggedIn = this.userService.isLoggedIn();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.clubService.getClubById(+params['id']); })
            .subscribe(function (club) {
            _this.club = club;
            if (_this.userService.isLoggedIn()) {
                _this.loggedIn = true;
                _this.checkingService.checkUserClubMap(_this.userService.getCurrentUserId(), _this.club.id)
                    .then(function (result) {
                    _this.isMember = result;
                    if (_this.isMember) {
                        _this.clubService.getLatestClubBulletinById(_this.club.id).then(function (clubBulletin) { return _this.clubBulletin = clubBulletin; });
                        _this.checkingService.checkUserClubMapAdmin(_this.userService.getCurrentUserId(), _this.club.id).then(function (result) { return _this.isAdmin = result; });
                        _this.clubService.getLatestThreeClubMessagesById(_this.club.id).then(function (clubMessages) { return _this.clubMessages = clubMessages; });
                    }
                });
            }
        });
    };
    ClubDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ClubDetailComponent.prototype.showBriefIntro = function () {
        if (!this.club)
            return;
        $.alert(this.club.brief_intro, "简介");
    };
    return ClubDetailComponent;
}());
ClubDetailComponent = __decorate([
    core_1.Component({
        selector: 'club-detail',
        templateUrl: './club-detail.component.html',
        styleUrls: ['./club-detail.component.css'],
        providers: [club_service_1.ClubService]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.ActivatedRoute,
        club_service_1.ClubService,
        user_service_1.UserService,
        checking_service_1.CheckingService])
], ClubDetailComponent);
exports.ClubDetailComponent = ClubDetailComponent;
//# sourceMappingURL=club-detail.component.js.map
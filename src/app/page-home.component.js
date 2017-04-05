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
var user_service_1 = require("./user/user.service");
var new_service_1 = require("./news/new.service");
var club_service_1 = require("./club/club.service");
var PageHomeComponent = (function () {
    function PageHomeComponent(userService, newsService, clubService) {
        this.userService = userService;
        this.newsService = newsService;
        this.clubService = clubService;
        this.news = [];
        this.clubs = [];
    }
    PageHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = this.userService.isLoggedIn();
        this.newsService.getLatestEightNews()
            .then(function (news) { return _this.news = news; });
        this.clubService.getHottestThreeClubs()
            .then(function (clubs) { return _this.clubs = clubs; });
    };
    return PageHomeComponent;
}());
PageHomeComponent = __decorate([
    core_1.Component({
        selector: 'page-home',
        templateUrl: './page-home.component.html',
        styleUrls: ['./page-home.component.css'],
        providers: [new_service_1.NewsService, club_service_1.ClubService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        new_service_1.NewsService,
        club_service_1.ClubService])
], PageHomeComponent);
exports.PageHomeComponent = PageHomeComponent;
//# sourceMappingURL=page-home.component.js.map
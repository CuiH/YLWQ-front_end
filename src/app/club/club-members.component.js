/**
 * Created by CuiH on 2017/3/30.
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
var user_service_1 = require("../user/user.service");
var club_service_1 = require("./club.service");
var ClubMembersComponent = (function () {
    function ClubMembersComponent(userService, activatedRoute, location, router, clubService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.clubService = clubService;
        this.members = [];
    }
    ClubMembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        this.activatedRoute.params
            .switchMap(function (params) { return _this.clubService.getAllClubMembersById(+params['id']); })
            .subscribe(function (members) {
            _this.members = members;
        });
    };
    ClubMembersComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ClubMembersComponent;
}());
ClubMembersComponent = __decorate([
    core_1.Component({
        selector: 'club-members',
        templateUrl: './club-members.component.html',
        styleUrls: ['./club-members.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router,
        club_service_1.ClubService])
], ClubMembersComponent);
exports.ClubMembersComponent = ClubMembersComponent;
//# sourceMappingURL=club-members.component.js.map
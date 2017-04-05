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
var user_service_1 = require("./user.service");
var UserClubsComponent = (function () {
    function UserClubsComponent(userService, location, router) {
        this.userService = userService;
        this.location = location;
        this.router = router;
    }
    UserClubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        this.userService.getAllUserClubs()
            .then(function (clubs) {
            _this.clubs = clubs;
        });
    };
    UserClubsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserClubsComponent;
}());
UserClubsComponent = __decorate([
    core_1.Component({
        selector: 'user-clubs',
        templateUrl: './user-clubs.component.html',
        styleUrls: ['./user-clubs.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        router_1.Router])
], UserClubsComponent);
exports.UserClubsComponent = UserClubsComponent;
//# sourceMappingURL=user-clubs.component.js.map
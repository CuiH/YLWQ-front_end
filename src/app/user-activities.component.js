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
var user_service_1 = require("./user.service");
var UserActivitiesComponent = (function () {
    function UserActivitiesComponent(userService, location, router) {
        this.userService = userService;
        this.location = location;
        this.router = router;
        this.currentActivities = null;
        this.isFirst = "active";
        this.isSecond = "";
    }
    UserActivitiesComponent.prototype.ngOnInit = function () {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        this.changeToParticipated();
    };
    UserActivitiesComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserActivitiesComponent.prototype.changeToParticipated = function () {
        var _this = this;
        this.isFirst = "active";
        this.isSecond = "";
        this.userService.getAllUserParticipatedActivities()
            .then(function (activities) {
            _this.currentActivities = activities;
        });
    };
    UserActivitiesComponent.prototype.changeToSponsored = function () {
        var _this = this;
        this.isFirst = "";
        this.isSecond = "active";
        this.userService.getAllUserSponsoredActivities()
            .then(function (activities) {
            _this.currentActivities = activities;
        });
    };
    return UserActivitiesComponent;
}());
UserActivitiesComponent = __decorate([
    core_1.Component({
        selector: 'user-activities',
        templateUrl: './user-activities.component.html',
        styleUrls: ['./user-activities.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        router_1.Router])
], UserActivitiesComponent);
exports.UserActivitiesComponent = UserActivitiesComponent;
//# sourceMappingURL=user-activities.component.js.map
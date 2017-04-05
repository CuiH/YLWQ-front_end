/**
 * Created by CuiH on 2017/4/5.
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
var user_service_1 = require("./user.service");
var router_1 = require("@angular/router");
var UserActivitiesParticipatedComponent = (function () {
    function UserActivitiesParticipatedComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.activities = [];
    }
    UserActivitiesParticipatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUserParticipatedActivities()
            .then(function (activities) {
            _this.activities = activities;
            _this.initiateActivityStatus();
        });
    };
    UserActivitiesParticipatedComponent.prototype.initiateActivityStatus = function () {
        for (var i = 0; i < this.activities.length; i++) {
            var now = new Date();
            if (new Date(Date.parse(this.activities[i].start_time)) > now) {
                this.activities[i].status = "未开始";
            }
            else {
                this.activities[i].status = "进行中";
            }
            if (new Date(Date.parse(this.activities[i].end_time)) < now) {
                this.activities[i].status = "已结束";
            }
        }
    };
    UserActivitiesParticipatedComponent.prototype.changeToSponsored = function () {
        this.router.navigate(['sponsored'], { relativeTo: this.route.parent });
    };
    return UserActivitiesParticipatedComponent;
}());
UserActivitiesParticipatedComponent = __decorate([
    core_1.Component({
        selector: 'user-activities-participated',
        templateUrl: './user-activities-participated.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserActivitiesParticipatedComponent);
exports.UserActivitiesParticipatedComponent = UserActivitiesParticipatedComponent;
//# sourceMappingURL=user-activities-participated.component.js.map
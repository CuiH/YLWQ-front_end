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
var activity_service_1 = require("./activity.service");
var user_service_1 = require("./user.service");
var activity_1 = require("./activity");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var ActivityDetailComponent = (function () {
    function ActivityDetailComponent(location, router, activatedRoute, activityService, userService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activityService = activityService;
        this.userService = userService;
        this.activity = new activity_1.Activity();
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityService.getActivityById(+params['id']); })
            .subscribe(function (activity) {
            _this.activity = activity;
        });
    };
    ActivityDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActivityDetailComponent.prototype.showBriefIntro = function () {
        if (!this.activity)
            return;
        $.alert(this.activity.brief_intro, "简介");
    };
    ActivityDetailComponent.prototype.showNote = function () {
        if (!this.activity)
            return;
        $.alert(this.activity.note, "备注");
    };
    ActivityDetailComponent.prototype.showLocation = function () {
        if (!this.activity)
            return;
        $.alert(this.activity.location, "地点");
    };
    return ActivityDetailComponent;
}());
ActivityDetailComponent = __decorate([
    core_1.Component({
        selector: 'activity-detail',
        templateUrl: './activity-detail.component.html',
        styleUrls: ['./activity-detail.component.css'],
        providers: [activity_service_1.ActivityService]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        router_1.ActivatedRoute,
        activity_service_1.ActivityService,
        user_service_1.UserService])
], ActivityDetailComponent);
exports.ActivityDetailComponent = ActivityDetailComponent;
//# sourceMappingURL=activity-detail.component.js.map
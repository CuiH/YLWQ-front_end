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
var checking_service_1 = require("./checking.service");
var ActivityDetailComponent = (function () {
    function ActivityDetailComponent(location, router, activatedRoute, activityService, userService, checkingService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activityService = activityService;
        this.userService = userService;
        this.checkingService = checkingService;
        this.activity = new activity_1.Activity();
        this.attendActivityButtonText = "参与该活动";
        this.isParticipant = false;
        this.isSponsor = false;
        this.isClubAdmin = false;
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
            _this.initiateActivityStatus();
            _this.checkingService.checkUserActivityMap(_this.userService.getCurrentUserId(), _this.activity.id).then(function (result) { return _this.isParticipant = result; });
            _this.checkingService.checkUserClubMapAdmin(_this.userService.getCurrentUserId(), _this.activity.club_id).then(function (result) { return _this.isClubAdmin = result; });
            _this.checkingService.checkUserActivitySponsor(_this.userService.getCurrentUserId(), _this.activity.id).then(function (result) { return _this.isSponsor = result; });
        });
    };
    ActivityDetailComponent.prototype.initiateActivityStatus = function () {
        var now = new Date();
        if (new Date(Date.parse(this.activity.start_time)) > now) {
            this.activity.status = "未开始";
        }
        else {
            this.activity.status = "进行中";
        }
        if (new Date(Date.parse(this.activity.end_time)) < now) {
            this.activity.status = "已结束";
        }
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
    ActivityDetailComponent.prototype.attendActivity = function () {
        var _this = this;
        this.attendActivityButtonText = "处理中...";
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityService.attendActivity(+params['id']); })
            .subscribe(function (activity) {
            $.alert("参与成功！");
            _this.isParticipant = true;
            _this.activity.participant_number += 1;
        }, function () { return _this.attendActivityButtonText = "参与该活动"; });
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
        user_service_1.UserService,
        checking_service_1.CheckingService])
], ActivityDetailComponent);
exports.ActivityDetailComponent = ActivityDetailComponent;
//# sourceMappingURL=activity-detail.component.js.map
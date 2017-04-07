/**
 * Created by CuiH on 2017/4/4.
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
var activity_service_1 = require("../activity/activity.service");
var user_service_1 = require("../user/user.service");
var activity_bill_service_1 = require("./activity-bill.service");
var activity_bill_1 = require("./activity-bill");
var checking_service_1 = require("../checking.service");
var challenge_service_1 = require("../challenge/challenge.service");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var challenge_1 = require("../challenge/challenge");
var ActivityBillDetailComponent = (function () {
    function ActivityBillDetailComponent(location, router, activatedRoute, activityBillService, userService, checkingService, challengeService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activityBillService = activityBillService;
        this.userService = userService;
        this.checkingService = checkingService;
        this.challengeService = challengeService;
        this.activityBill = new activity_bill_1.ActivityBill();
        this.challenges = [];
        this.totalCost = 0;
        this.challengeMessage = "";
        this.isCreator = false;
        this.isUnfinished = false;
        this.isParticipant = false;
        this.isChallenged = false;
        this.canFinish = false;
        this.isClicked = false;
        this.challengeButtonText = "提交";
    }
    ActivityBillDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.userId = this.userService.getCurrentUserId();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityBillService.getActivityBillById(+params['id']); })
            .subscribe(function (activityBill) {
            _this.activityBill = activityBill;
            for (var i = 0; i < activityBill.activityBillItems.length; i++)
                _this.totalCost += activityBill.activityBillItems[i].cost;
            _this.checkingService.checkActivityBillCreator(_this.userService.getCurrentUserId(), activityBill.id)
                .then(function (result) { return _this.isCreator = result; });
            _this.checkingService.checkActivityBillUnfinished(activityBill.id)
                .then(function (result) { return _this.isUnfinished = result; });
            _this.checkingService.checkUserActivityMap(_this.userService.getCurrentUserId(), activityBill.id)
                .then(function (result) { return _this.isParticipant = result; });
            _this.checkingService.checkChallenge(_this.userService.getCurrentUserId(), activityBill.id)
                .then(function (result) { return _this.isChallenged = result; });
            _this.activityBillService.getAllChallengesById(activityBill.id)
                .then(function (results) {
                _this.challenges = results;
                if (results.length == 0) {
                    var now = new Date();
                    var lastModifyTime = new Date(Date.parse(activityBill.last_modify_time));
                    if (now.getTime() - lastModifyTime.getTime() > 86400000) {
                        _this.canFinish = true;
                    }
                }
            });
        });
    };
    ActivityBillDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActivityBillDetailComponent.prototype.onDelete = function (id, index) {
        var _this = this;
        this.challengeService.deleteChallenge(id)
            .then(function () {
            $.alert('撤销成功！');
            _this.challenges.splice(index, 1);
            _this.isChallenged = false;
        });
    };
    ActivityBillDetailComponent.prototype.onFinish = function () {
        var _this = this;
        this.activityBillService.finishActivityBill(this.activityBill.id)
            .then(function () {
            $.alert('结算成功！');
            _this.activityBill.status = 'F';
            _this.canFinish = false;
        });
    };
    ActivityBillDetailComponent.prototype.onChallenge = function () {
        var _this = this;
        this.challengeButtonText = "提交中";
        if (this.challengeMessage.length > 50) {
            $.alert("质疑说明过长！");
            this.challengeButtonText = "提交";
            return;
        }
        else if (this.challengeMessage.length == 0) {
            $.alert("请填写质疑说明！");
            this.challengeButtonText = "提交";
            return;
        }
        this.activatedRoute.params
            .switchMap(function (params) { return _this.challengeService.createChallenge(+params['id'], _this.challengeMessage); })
            .subscribe(function () {
            _this.challengeButtonText = "已提交";
            _this.isChallenged = true;
            _this.isClicked = false;
            var challenge = new challenge_1.Challenge();
            challenge.challenger_username = _this.userService.getCurrentUsername();
            challenge.message = _this.challengeMessage;
            _this.challenges.push(challenge);
            $.alert("发送成功");
        });
    };
    return ActivityBillDetailComponent;
}());
ActivityBillDetailComponent = __decorate([
    core_1.Component({
        selector: 'activity-bill-detail',
        templateUrl: './activity-bill-detail.component.html',
        styleUrls: ['./activity-bill-detail.component.css'],
        providers: [
            activity_service_1.ActivityService,
            challenge_service_1.ChallengeService
        ]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        router_1.ActivatedRoute,
        activity_bill_service_1.ActivityBillService,
        user_service_1.UserService,
        checking_service_1.CheckingService,
        challenge_service_1.ChallengeService])
], ActivityBillDetailComponent);
exports.ActivityBillDetailComponent = ActivityBillDetailComponent;
//# sourceMappingURL=activity-bill-detail.component.js.map
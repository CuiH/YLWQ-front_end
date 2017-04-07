/**
 * Created by CuiH on 2017/4/6.
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
var activity_bill_service_1 = require("./activity-bill.service");
var activity_bill_item_1 = require("./activity-bill-item");
var activity_service_1 = require("../activity/activity.service");
var club_service_1 = require("../club/club.service");
var activity_bill_1 = require("./activity-bill");
require("zepto");
require("sm");
var UpdateActivityBillComponent = (function () {
    function UpdateActivityBillComponent(userService, activityBillService, activityService, clubService, activatedRoute, location, router) {
        this.userService = userService;
        this.activityBillService = activityBillService;
        this.activityService = activityService;
        this.clubService = clubService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.members = [];
        this.activityBill = new activity_bill_1.ActivityBill();
        this.updateActivityBillButtonText = "提交";
    }
    UpdateActivityBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        this.addItem();
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityBillService.getActivityBillById(+params['id']); })
            .subscribe(function (activityBill) {
            _this.activityBill = activityBill;
            _this.activityService.getActivityById(activityBill.id)
                .then(function (result) { return _this.clubService.getAllClubMembersById(result.club_id); })
                .then(function (members) { return _this.members = members; });
        });
    };
    UpdateActivityBillComponent.prototype.onChangeItem = function (item, field, value) {
        if (item.flag != 0 && item.flag != 1 && item.flag != 2) {
            item.flag = 1;
        }
        item[field] = value;
        if (field == 'cost')
            item[field] = +value;
    };
    UpdateActivityBillComponent.prototype.onChangePayment = function (payment, value) {
        if (payment.flag != 1) {
            payment.flag = 1;
        }
        payment.amount = +value;
    };
    UpdateActivityBillComponent.prototype.onDeleteItem = function (item, index) {
        if (item.flag == 0) {
            this.activityBill.activityBillItems.splice(index, 1);
        }
        else {
            item.flag = 2;
        }
    };
    UpdateActivityBillComponent.prototype.addItem = function () {
        this.activityBill.activityBillItems.push(new activity_bill_item_1.ActivityBillItem());
    };
    UpdateActivityBillComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateActivityBillButtonText = "提交中...";
        if (this.validateAll()) {
            var activityBillSubmit = new activity_bill_1.ActivityBill();
            activityBillSubmit.id = this.activityBill.id;
            for (var i = 0; i < this.activityBill.activityBillItems.length; i++) {
                var currentItem = this.activityBill.activityBillItems[i];
                if (currentItem.flag || currentItem.flag == 0) {
                    activityBillSubmit.activityBillItems.push(currentItem);
                }
            }
            for (var i = 0; i < this.activityBill.activityBillParticipantPayments.length; i++) {
                var currentPayment = this.activityBill.activityBillParticipantPayments[i];
                if (currentPayment.flag) {
                    activityBillSubmit.activityBillParticipantPayments.push(currentPayment);
                }
            }
            this.activityBillService.updateActivityBill(activityBillSubmit)
                .then(function () {
                $.alert("提交成功！", function () { return _this.goBack(); });
                _this.updateActivityBillButtonText = "已提交";
            });
        }
        this.updateActivityBillButtonText = "提交";
    };
    UpdateActivityBillComponent.prototype.validateAll = function () {
        var itemsTotal = 0;
        for (var i = 0; i < this.activityBill.activityBillItems.length; i++) {
            var currentItem = this.activityBill.activityBillItems[i];
            if (currentItem.flag == 2)
                continue;
            if (currentItem.description.length > 30) {
                $.alert("付款项 #" + (i + 1) + " 的描述过长");
                return false;
            }
            else if (currentItem.description.length == 0) {
                $.alert("请输入付款项 #" + (i + 1) + " 的描述");
                return false;
            }
            if (currentItem.cost == null) {
                $.alert("请输入付款项 #" + (i + 1) + " 的价格");
                return false;
            }
            else if (isNaN(currentItem.cost)) {
                $.alert("付款项 #" + (i + 1) + " 的价格应为数字");
                return false;
            }
            if (currentItem.note.length > 30) {
                $.alert("付款项 #" + (i + 1) + " 的备注过长");
                return false;
            }
            if (isNaN(currentItem.payer_user_id)) {
                $.alert("请为付款项 #" + (i + 1) + " 选择合法支付人");
                return false;
            }
            else if (currentItem.payer_user_id == null) {
                $.alert("请为付款项 #" + (i + 1) + " 选择支付人");
                return false;
            }
            else {
                currentItem.payer_user_id = +currentItem.payer_user_id;
            }
            itemsTotal += +currentItem.cost;
        }
        var paymentsTotal = 0;
        for (var i = 0; i < this.activityBill.activityBillParticipantPayments.length; i++) {
            var currentPayment = this.activityBill.activityBillParticipantPayments[i];
            if (currentPayment.amount == null) {
                $.alert("请输入付款人 " + currentPayment.participant_username + " 的应付数额");
                return false;
            }
            else if (isNaN(currentPayment.amount)) {
                $.alert("付款人 #" + currentPayment.participant_username + " 的应付数额应为数字");
                return false;
            }
            paymentsTotal += +currentPayment.amount;
        }
        if (itemsTotal != paymentsTotal) {
            $.alert("付款项总价与付款人总应付数额不相等！");
            return false;
        }
        return true;
    };
    UpdateActivityBillComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateActivityBillComponent;
}());
UpdateActivityBillComponent = __decorate([
    core_1.Component({
        selector: 'update-activity-bill',
        templateUrl: './update-activity-bill.component.html',
        styleUrls: ['./update-activity-bill.component.css'],
        providers: [
            activity_service_1.ActivityService,
            club_service_1.ClubService
        ]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        activity_bill_service_1.ActivityBillService,
        activity_service_1.ActivityService,
        club_service_1.ClubService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], UpdateActivityBillComponent);
exports.UpdateActivityBillComponent = UpdateActivityBillComponent;
//# sourceMappingURL=update-activity-bill.component.js.map
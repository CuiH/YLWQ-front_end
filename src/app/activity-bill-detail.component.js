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
var activity_service_1 = require("./activity/activity.service");
var user_service_1 = require("./user.service");
var activity_bill_service_1 = require("./activity-bill.service");
var activity_bill_1 = require("./activity-bill");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var ActivityBillDetailComponent = (function () {
    function ActivityBillDetailComponent(location, router, activatedRoute, activityBillService, userService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activityBillService = activityBillService;
        this.userService = userService;
        this.activityBill = new activity_bill_1.ActivityBill();
        this.totalCost = 0;
    }
    ActivityBillDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityBillService.getActivityBillById(+params['id']); })
            .subscribe(function (activityBill) {
            _this.activityBill = activityBill;
            for (var i = 0; i < activityBill.activityBillItems.length; i++)
                _this.totalCost += activityBill.activityBillItems[i].cost;
        });
    };
    ActivityBillDetailComponent.prototype.goBack = function () {
        this.location.back();
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
            activity_bill_service_1.ActivityBillService
        ]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        router_1.ActivatedRoute,
        activity_bill_service_1.ActivityBillService,
        user_service_1.UserService])
], ActivityBillDetailComponent);
exports.ActivityBillDetailComponent = ActivityBillDetailComponent;
//# sourceMappingURL=activity-bill-detail.component.js.map
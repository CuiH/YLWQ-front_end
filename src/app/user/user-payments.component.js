/**
 * Created by CuiH on 2017/4/7.
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
var UserAccount_1 = require("./UserAccount");
var UserPaymentsComponent = (function () {
    function UserPaymentsComponent(userService, location, router) {
        this.userService = userService;
        this.location = location;
        this.router = router;
        this.userAccount = new UserAccount_1.UserAccount();
    }
    UserPaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        this.userService.getAllUserPayments()
            .then(function (userPayments) {
            _this.userPayments = userPayments;
        });
        this.userService.getUserAccount()
            .then(function (userAccount) { return _this.userAccount = userAccount; });
    };
    UserPaymentsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserPaymentsComponent;
}());
UserPaymentsComponent = __decorate([
    core_1.Component({
        selector: 'user-payments',
        templateUrl: './user-payments.component.html',
        styleUrls: ['./user-payments.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        router_1.Router])
], UserPaymentsComponent);
exports.UserPaymentsComponent = UserPaymentsComponent;
//# sourceMappingURL=user-payments.component.js.map
/**
 * Created by CuiH on 2017/4/1.
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
var user_1 = require("./user");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var UserDetailComponent = (function () {
    function UserDetailComponent(location, activatedRoute, userService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = new user_1.User();
        this.isSelf = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.userService.getUserById(+params['id']); })
            .subscribe(function (user) {
            _this.user = user;
            if (_this.userService.getCurrentUserId() == user.id)
                _this.isSelf = true;
        });
    };
    UserDetailComponent.prototype.showDescription = function () {
        if (!this.user)
            return;
        $.alert(this.user.userDetail.description, "自我介绍");
    };
    UserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.css'],
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.ActivatedRoute,
        user_service_1.UserService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map
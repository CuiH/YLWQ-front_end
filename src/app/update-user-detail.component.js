/**
 * Created by CuiH on 2017/4/2.
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
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var user_detail_1 = require("./user-detail");
var UpdateUserDetailComponent = (function () {
    function UpdateUserDetailComponent(location, router, userService) {
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.username = "";
        this.userDetail = new user_detail_1.UserDetail();
        this.submitButtonText = "提交";
    }
    UpdateUserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.userService.getUserById(0)
            .then(function (user) {
            _this.username = user.username;
            _this.userDetail = user.userDetail;
            _this.userDetail.description = _this.userDetail.description ? _this.userDetail.description : "";
        });
    };
    UpdateUserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitButtonText = "提交中...";
        if (this.validateForm()) {
            this.userService.updateUserDetail(this.userDetail)
                .then(function () {
                $.alert("修改成功！", function () { return _this.goBack(); });
                _this.submitButtonText = "提交";
            });
        }
        this.submitButtonText = "提交";
    };
    UpdateUserDetailComponent.prototype.validateForm = function () {
        if (!this.userDetail.birthdate || new Date(Date.parse(this.userDetail.birthdate)).toString() == "Invalid Date") {
            $.alert("请输入合法的生日");
            return false;
        }
        if (this.userDetail.gender && this.userDetail.gender != 1 && this.userDetail.gender != 0 && this.userDetail.gender != 2) {
            $.alert("请输入合法的性别");
            return false;
        }
        if (this.userDetail.description && this.userDetail.description.length > 200) {
            $.alert("自我介绍过长");
            return false;
        }
        return true;
    };
    UpdateUserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateUserDetailComponent;
}());
UpdateUserDetailComponent = __decorate([
    core_1.Component({
        selector: 'update-user-detail',
        templateUrl: './update-user-detail.component.html',
        styleUrls: ['./update-user-detail.component.css'],
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        user_service_1.UserService])
], UpdateUserDetailComponent);
exports.UpdateUserDetailComponent = UpdateUserDetailComponent;
//# sourceMappingURL=update-user-detail.component.js.map
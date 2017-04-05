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
var user_service_1 = require("../user/user.service");
var application_service_1 = require("./application.service");
var application_1 = require("./application");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var ApplicationDetailComponent = (function () {
    function ApplicationDetailComponent(location, activatedRoute, router, userService, applicationService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.applicationService = applicationService;
        this.application = new application_1.Application();
    }
    ApplicationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.applicationService.getApplicationById(+params['id']); })
            .subscribe(function (application) {
            _this.application = application;
        });
    };
    ApplicationDetailComponent.prototype.onAccept = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.applicationService.acceptApplication(+params['id']); })
            .subscribe(function () {
            _this.application.status = 'A';
            $.alert("操作成功！");
        });
    };
    ApplicationDetailComponent.prototype.onReject = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.applicationService.rejectApplication(+params['id']); })
            .subscribe(function () {
            _this.application.status = 'R';
            $.alert("操作成功！");
        });
    };
    ApplicationDetailComponent.prototype.showMessage = function () {
        if (!this.application)
            return;
        $.alert(this.application.message);
    };
    ApplicationDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ApplicationDetailComponent;
}());
ApplicationDetailComponent = __decorate([
    core_1.Component({
        selector: 'application-detail',
        templateUrl: './application-detail.component.html',
        styleUrls: ['./application-detail.component.css'],
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService,
        application_service_1.ApplicationService])
], ApplicationDetailComponent);
exports.ApplicationDetailComponent = ApplicationDetailComponent;
//# sourceMappingURL=application-detail.component.js.map
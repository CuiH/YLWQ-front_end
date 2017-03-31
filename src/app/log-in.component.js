/**
 * Created by CuiH on 2017/3/28.
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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
require("zepto");
require("sm");
var LogInComponent = (function () {
    function LogInComponent(userService, formBuilder, location, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.location = location;
        this.router = router;
        this.submitted = "";
        this.logInButtonText = "登录";
        this.formFields = {
            username: '',
            password: ''
        };
        this.validationMessages = {
            username: {
                required: '请输入用户名',
                maxLength: '用户名过长',
            },
            password: {
                required: '请输入密码',
                maxLength: '密码过长',
            },
        };
    }
    LogInComponent.prototype.goBack = function () {
        this.location.back();
    };
    LogInComponent.prototype.ngOnInit = function () {
        $.init();
        this.buildForm();
    };
    LogInComponent.prototype.buildForm = function () {
        this.userForm = this.formBuilder.group({
            username: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(16),
                ]],
            password: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(16),
                ]]
        });
    };
    LogInComponent.prototype.validateForm = function () {
        if (!this.userForm)
            return;
        var form = this.userForm;
        for (var field in this.formFields) {
            var control = form.get(field);
            if (control && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    $.alert(messages[key]);
                    return false;
                }
            }
        }
        return true;
    };
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = "disabled";
        this.logInButtonText = "登录中...";
        if (!this.validateForm()) {
            this.submitted = "";
        }
        else {
            this.userService.logIn(this.userForm.value)
                .then(function (username) {
                _this.logInButtonText = "登录成功";
                _this.location.back();
            })
                .catch(function (err) {
                $.alert(err.json().message);
                _this.logInButtonText = "登录";
                _this.submitted = "";
            });
        }
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: 'log-in',
        templateUrl: './log-in.component.html',
        styleUrls: ['./log-in.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        common_1.Location,
        router_1.Router])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=log-in.component.js.map
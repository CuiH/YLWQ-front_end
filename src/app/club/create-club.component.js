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
var forms_1 = require("@angular/forms");
var club_service_1 = require("./club.service");
require("zepto");
require("sm");
var CreateClubComponent = (function () {
    function CreateClubComponent(userService, formBuilder, clubService, location, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.clubService = clubService;
        this.location = location;
        this.router = router;
        this.createClubButtonText = "创建";
        this.isCreated = "";
        this.formFields = {
            name: '',
            brief_intro: ''
        };
        this.validationMessages = {
            name: {
                required: '请输入名字',
                maxLength: '名字过长',
            },
            brief_intro: {
                maxLength: '简介过长',
            },
        };
    }
    CreateClubComponent.prototype.ngOnInit = function () {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.buildForm();
    };
    CreateClubComponent.prototype.buildForm = function () {
        this.clubForm = this.formBuilder.group({
            name: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30),
                ]],
            brief_intro: ["", [
                    forms_1.Validators.maxLength(200),
                ]]
        });
    };
    CreateClubComponent.prototype.onSubmit = function () {
        var _this = this;
        this.createClubButtonText = "创建中...";
        if (this.validateForm()) {
            var clubObject = this.clubForm.value;
            this.clubService.createClub(clubObject).then(function () {
                $.alert("创建成功！", function () { return _this.goBack(); });
                _this.isCreated = "disabled";
                _this.createClubButtonText = "已创建";
            });
        }
        this.createClubButtonText = "创建";
    };
    CreateClubComponent.prototype.validateForm = function () {
        if (!this.clubForm)
            return;
        var form = this.clubForm;
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
    CreateClubComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CreateClubComponent;
}());
CreateClubComponent = __decorate([
    core_1.Component({
        selector: 'create-club',
        templateUrl: './create-club.component.html',
        styleUrls: ['./create-club.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        club_service_1.ClubService,
        common_1.Location,
        router_1.Router])
], CreateClubComponent);
exports.CreateClubComponent = CreateClubComponent;
//# sourceMappingURL=create-club.component.js.map
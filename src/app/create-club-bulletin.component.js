/**
 * Created by CuiH on 2017/3/31.
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
var forms_1 = require("@angular/forms");
var club_bulletin_service_1 = require("./club-bulletin-service");
require("zepto");
require("sm");
var CreateClubBulletinComponent = (function () {
    function CreateClubBulletinComponent(userService, formBuilder, clubBulletinService, activatedRoute, location, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.clubBulletinService = clubBulletinService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.createClubBulletinButtonText = "发布";
        this.isPublished = "";
        this.formFields = {
            title: '',
            content: ''
        };
        this.validationMessages = {
            title: {
                required: '请输入标题',
                maxLength: '标题过长',
            },
            content: {
                required: '请输入内容',
                maxLength: '内容过长',
            },
        };
    }
    CreateClubBulletinComponent.prototype.ngOnInit = function () {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.buildForm();
    };
    CreateClubBulletinComponent.prototype.buildForm = function () {
        this.clubBulletinForm = this.formBuilder.group({
            title: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(30),
                ]],
            content: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(200),
                ]]
        });
    };
    CreateClubBulletinComponent.prototype.onSubmit = function () {
        var _this = this;
        this.createClubBulletinButtonText = "发布中...";
        if (this.validateForm()) {
            var clubBulletinObject_1 = this.clubBulletinForm.value;
            this.activatedRoute.params
                .switchMap(function (params) {
                clubBulletinObject_1.club_id = +params['club_id'];
                return _this.clubBulletinService.createClubBulletin(clubBulletinObject_1);
            })
                .subscribe(function () {
                $.alert("发布成功！", function () { return _this.goBack(); });
                _this.isPublished = "disabled";
                _this.createClubBulletinButtonText = "已发布";
            });
        }
        this.createClubBulletinButtonText = "发布";
    };
    CreateClubBulletinComponent.prototype.validateForm = function () {
        if (!this.clubBulletinForm)
            return;
        var form = this.clubBulletinForm;
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
    CreateClubBulletinComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CreateClubBulletinComponent;
}());
CreateClubBulletinComponent = __decorate([
    core_1.Component({
        selector: 'create-club-bulletin',
        templateUrl: './create-club-bulletin.component.html',
        styleUrls: ['./create-club-bulletin.component.css'],
        providers: [club_bulletin_service_1.ClubBulletinService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        club_bulletin_service_1.ClubBulletinService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], CreateClubBulletinComponent);
exports.CreateClubBulletinComponent = CreateClubBulletinComponent;
//# sourceMappingURL=create-club-bulletin.component.js.map
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
var forms_1 = require("@angular/forms");
var user_service_1 = require("./user.service");
var club_service_1 = require("./club.service");
var club_1 = require("./club");
require("zepto");
require("sm");
var UpdateClubComponent = (function () {
    function UpdateClubComponent(userService, formBuilder, clubService, location, activatedRoute, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.clubService = clubService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.club = new club_1.Club();
        this.submitClubButtonText = "提交";
        this.formFields = {
            brief_intro: ''
        };
        this.validationMessages = {
            brief_intro: {
                maxLength: '简介过长',
            },
        };
    }
    UpdateClubComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.buildForm();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.clubService.getClubById(+params['id']); })
            .subscribe(function (club) {
            _this.club = club;
            _this.initiateForm();
        });
    };
    UpdateClubComponent.prototype.initiateForm = function () {
        this.clubForm.setValue({
            brief_intro: this.club.brief_intro,
        });
    };
    UpdateClubComponent.prototype.buildForm = function () {
        this.clubForm = this.formBuilder.group({
            brief_intro: ["", [
                    forms_1.Validators.maxLength(200),
                ]]
        });
    };
    UpdateClubComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitClubButtonText = "提交中...";
        if (this.validateForm()) {
            var clubObject = this.clubForm.value;
            clubObject.id = this.club.id;
            this.clubService.updateClub(clubObject).then(function () {
                $.alert("提交成功！", function () { return _this.goBack(); });
                _this.submitClubButtonText = "已提交";
            });
        }
        this.submitClubButtonText = "提交";
    };
    UpdateClubComponent.prototype.validateForm = function () {
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
    UpdateClubComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateClubComponent;
}());
UpdateClubComponent = __decorate([
    core_1.Component({
        selector: 'update-club',
        templateUrl: './update-club.component.html',
        styleUrls: ['./update-club.component.css'],
        providers: [club_service_1.ClubService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        club_service_1.ClubService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], UpdateClubComponent);
exports.UpdateClubComponent = UpdateClubComponent;
//# sourceMappingURL=update-club.component.js.map
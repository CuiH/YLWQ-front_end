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
var user_service_1 = require("../user/user.service");
var activity_1 = require("./activity");
var activity_service_1 = require("./activity.service");
require("zepto");
require("sm");
var UpdateActivityComponent = (function () {
    function UpdateActivityComponent(userService, formBuilder, activityService, activatedRoute, location, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.activityService = activityService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.activity = new activity_1.Activity();
        this.submitActivityText = "提交";
        this.formFields = {
            location: '',
            brief_intro: '',
            note: '',
        };
        this.validationMessages = {
            location: {
                required: '请输入活动地点',
                maxLength: '活动地点过长',
            },
            brief_intro: {
                maxLength: '活动简介过长',
            },
            note: {
                maxLength: '活动备注过长',
            },
        };
    }
    UpdateActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        this.buildForm();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.activityService.getActivityById(+params['id']); })
            .subscribe(function (activity) {
            _this.activity = activity;
            _this.initDateTimePicker();
            _this.initiateForm();
        });
    };
    UpdateActivityComponent.prototype.initDateTimePicker = function () {
        var asd = this.activity.start_time.split(' ')[0].split('-');
        var ast = this.activity.start_time.split(' ')[1].split(':');
        $(".datetime-picker-1").datetimePicker({
            value: [asd[0], asd[1], asd[2], ast[0], ast[1]]
        });
        var aed = this.activity.end_time.split(' ')[0].split('-');
        var aet = this.activity.end_time.split(' ')[1].split(':');
        $(".datetime-picker-2").datetimePicker({
            value: [aed[0], aed[1], aed[2], aet[0], aet[1]]
        });
    };
    UpdateActivityComponent.prototype.initiateForm = function () {
        this.activityForm.setValue({
            location: this.activity.location,
            brief_intro: this.activity.brief_intro,
            note: this.activity.note
        });
    };
    UpdateActivityComponent.prototype.buildForm = function () {
        this.activityForm = this.formBuilder.group({
            location: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(100),
                ]],
            brief_intro: ["", [
                    forms_1.Validators.maxLength(200),
                ]],
            note: ["", [
                    forms_1.Validators.maxLength(200),
                ]]
        });
    };
    UpdateActivityComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitActivityText = "提交中...";
        if (this.validateForm() && this.validateTime()) {
            var activity = this.activityForm.value;
            activity.start_time = this.activity.start_time;
            activity.end_time = this.activity.end_time;
            activity.id = this.activity.id;
            this.activityService.updateActivity(activity)
                .then(function () {
                $.alert("提交成功！", function () { return _this.goBack(); });
                _this.submitActivityText = "已提交";
            });
        }
        this.submitActivityText = "提交";
    };
    UpdateActivityComponent.prototype.validateForm = function () {
        if (!this.activityForm)
            return false;
        var form = this.activityForm;
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
    UpdateActivityComponent.prototype.validateTime = function () {
        var now = new Date();
        var startDate = new Date(Date.parse(this.activity.start_time));
        var endDate = new Date(Date.parse(this.activity.end_time));
        if (startDate.toString() == "Invalid Date") {
            $.alert("请输入合法的开始时间");
            return false;
        }
        if (endDate.toString() == "Invalid Date") {
            $.alert("请输入合法的结束时间");
            return false;
        }
        if (startDate.getTime() < now.getTime()) {
            $.alert("开始时间应晚于当前时间");
            return false;
        }
        if (endDate.getTime() < startDate.getTime()) {
            $.alert("结束时间应晚于开始时间");
            return false;
        }
        return true;
    };
    UpdateActivityComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateActivityComponent;
}());
UpdateActivityComponent = __decorate([
    core_1.Component({
        selector: 'update-activity',
        templateUrl: './update-activity.component.html',
        styleUrls: ['./update-activity.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        activity_service_1.ActivityService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], UpdateActivityComponent);
exports.UpdateActivityComponent = UpdateActivityComponent;
//# sourceMappingURL=update-activity.component.js.map
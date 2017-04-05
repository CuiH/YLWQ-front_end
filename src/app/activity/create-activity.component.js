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
var forms_1 = require("@angular/forms");
var user_service_1 = require("../user/user.service");
var activity_service_1 = require("./activity.service");
require("zepto");
require("sm");
var CreateActivityComponent = (function () {
    function CreateActivityComponent(userService, formBuilder, activityService, activatedRoute, location, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.activityService = activityService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.createActivityText = "发起";
        this.isCreated = "";
        this.startTime = "";
        this.endTime = "";
        this.formFields = {
            name: '',
            location: '',
            brief_intro: '',
            note: '',
            start_time: '',
            end_time: ''
        };
        this.validationMessages = {
            name: {
                required: '请输入活动名称',
                maxLength: '活动名称过长',
            },
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
    CreateActivityComponent.prototype.ngOnInit = function () {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/log_in']);
            return;
        }
        $.init();
        $(".datetime-picker-1").datetimePicker({});
        $(".datetime-picker-2").datetimePicker({});
        this.buildForm();
    };
    CreateActivityComponent.prototype.buildForm = function () {
        this.activityForm = this.formBuilder.group({
            name: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30),
                ]],
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
    CreateActivityComponent.prototype.onSubmit = function () {
        var _this = this;
        this.createActivityText = "发布中...";
        if (this.validateForm() && this.validateTime()) {
            this.activatedRoute.params
                .switchMap(function (params) {
                var activityObject = _this.activityForm.value;
                activityObject.start_time = _this.startTime;
                activityObject.end_time = _this.endTime;
                activityObject.club_id = +params['club_id'];
                return _this.activityService.createActivity(activityObject);
            })
                .subscribe(function () {
                $.alert("发布成功！", function () { return _this.goBack(); });
                _this.isCreated = "disabled";
                _this.createActivityText = "已发布";
            });
        }
        this.createActivityText = "发布";
    };
    CreateActivityComponent.prototype.validateForm = function () {
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
    CreateActivityComponent.prototype.validateTime = function () {
        var now = new Date();
        var startDate = new Date(Date.parse(this.startTime));
        var endDate = new Date(Date.parse(this.endTime));
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
    CreateActivityComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CreateActivityComponent;
}());
CreateActivityComponent = __decorate([
    core_1.Component({
        selector: 'create-activity',
        templateUrl: './create-activity.component.html',
        styleUrls: ['./create-activity.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        activity_service_1.ActivityService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], CreateActivityComponent);
exports.CreateActivityComponent = CreateActivityComponent;
//# sourceMappingURL=create-activity.component.js.map
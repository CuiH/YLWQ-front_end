/**
 * Created by CuiH on 2017/3/30.
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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var user_service_1 = require("./user.service");
var ActivityService = (function () {
    function ActivityService(http, userService, location) {
        this.http = http;
        this.userService = userService;
        this.location = location;
        $.init();
    }
    ;
    ActivityService.prototype.createActivity = function (activity) {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded",
                'x-access-token': this.userService.getCurrentUserToken()
            }),
            body: 'club_id=' + activity.club_id +
                '&name=' + activity.name +
                '&start_time=' + activity.start_time +
                '&end_time=' + activity.end_time +
                '&location=' + activity.location +
                '&brief_intro=' + activity.brief_intro +
                '&note=' + activity.note,
        });
        return this.http.request('http://172.18.43.152:3000/api/activity/create', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return true;
        })
            .catch(this.handleError);
    };
    ActivityService.prototype.getActivityById = function (id) {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.userService.getCurrentUserToken()
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/activity/' + id, options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return res.json().data.activity;
        })
            .catch(this.handleError);
    };
    ActivityService.prototype.getAllActivityParticipantsById = function (id) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.userService.getCurrentUserToken()
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/activity/get_all_participants?activity_id=' + id, options)
            .toPromise()
            .then(function (res) { return res.json().data.participants; })
            .catch(this.handleError);
    };
    ActivityService.prototype.attendActivity = function (activityId) {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded",
                'x-access-token': this.userService.getCurrentUserToken(),
            }),
            body: 'activity_id=' + activityId,
        });
        return this.http.request('http://172.18.43.152:3000/api/activity/attend', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return;
        })
            .catch(this.handleError);
    };
    ActivityService.prototype.handleError = function (err) {
        $.hidePreloader();
        $.alert(err.json().message);
        return Promise.reject(err);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        user_service_1.UserService,
        common_1.Location])
], ActivityService);
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map
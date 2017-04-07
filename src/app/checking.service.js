/**
 * Created by CuiH on 2017/3/29.
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
require("rxjs/add/operator/toPromise");
var CheckingService = (function () {
    function CheckingService(http) {
        this.http = http;
    }
    ;
    CheckingService.prototype.checkUserClubMap = function (userId, clubId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/user_club_map?user_id=' + userId + "&club_id=" + clubId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkUserActivityMap = function (userId, activityId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/user_activity_map?user_id=' + userId + "&activity_id=" + activityId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkUserClubMapAdmin = function (userId, clubId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/user_club_map_admin?user_id=' + userId + "&club_id=" + clubId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkApplicationUnread = function (userId, clubId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/application_unread?user_id=' + userId + "&club_id=" + clubId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkUserActivitySponsor = function (userId, activityId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/user_activity_sponsor?user_id=' + userId + "&activity_id=" + activityId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkActivityBillCreator = function (userId, activityBillId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/activity_bill_creator?user_id=' + userId + "&activity_bill_id=" + activityBillId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkActivityBillUnfinished = function (activityBillId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/activity_bill_unfinished?activity_bill_id=' + activityBillId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.checkChallenge = function (userId, activityBillId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/checking/challenge?user_id=' + userId + '&activity_bill_id=' + activityBillId, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.result;
        })
            .catch(this.handleError);
    };
    CheckingService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    return CheckingService;
}());
CheckingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CheckingService);
exports.CheckingService = CheckingService;
//# sourceMappingURL=checking.service.js.map
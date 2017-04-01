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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var core_2 = require("angular2-cookie/core");
require("zepto");
require("sm");
var UserService = (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        $.init();
        this.initFromCookie();
    }
    ;
    UserService.prototype.initFromCookie = function () {
        this.currentUserId = +this.cookieService.get("current_user_id");
        this.currentUsername = this.cookieService.get("current_username");
        this.currentUserToken = this.cookieService.get("current_user_token");
        if (this.currentUserId && this.currentUsername && this.currentUserToken) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    UserService.prototype.saveToCookie = function (user) {
        var expiresTime = new Date();
        expiresTime.setTime(expiresTime.getTime() + 333333333);
        var cookieOptions = {
            expires: expiresTime
        };
        this.cookieService.removeAll();
        this.cookieService.put("current_user_id", user.id, cookieOptions);
        this.cookieService.put("current_username", user.username, cookieOptions);
        this.cookieService.put("current_user_token", user.token, cookieOptions);
    };
    UserService.prototype.getCurrentUsername = function () {
        return this.currentUsername;
    };
    UserService.prototype.getCurrentUserId = function () {
        return this.currentUserId;
    };
    UserService.prototype.getCurrentUserToken = function () {
        return this.currentUserToken;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.logIn = function (user) {
        var _this = this;
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded"
            }),
            body: 'username=' + user.username + '&password=' + user.password,
        });
        return this.http.request('http://172.18.43.152:3000/api/user/log_in', options)
            .toPromise()
            .then(function (res) {
            var user = res.json().data;
            _this.currentUserId = user.id;
            _this.currentUsername = user.username;
            _this.currentUserToken = user.token;
            _this.loggedIn = true;
            _this.saveToCookie(user);
            $.hidePreloader();
            return _this.getCurrentUsername();
        })
            .catch(this.handleError);
    };
    UserService.prototype.logOff = function () {
        this.cookieService.removeAll();
        this.loggedIn = false;
    };
    UserService.prototype.getAllUserClubs = function () {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.currentUserToken
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/user/get_all_clubs', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return res.json().data.clubs;
        })
            .catch(this.handleError);
    };
    UserService.prototype.getAllUserParticipatedActivities = function () {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.currentUserToken
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/user/get_all_participated_activities', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return res.json().data.activities;
        })
            .catch(this.handleError);
    };
    UserService.prototype.getAllUserSponsoredActivities = function () {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.currentUserToken
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/user/get_all_sponsored_activities', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return res.json().data.activities;
        })
            .catch(this.handleError);
    };
    UserService.prototype.getAllUserNotifications = function () {
        $.showPreloader();
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({
                'x-access-token': this.currentUserToken
            }),
        });
        return this.http.request('http://172.18.43.152:3000/api/user/get_all_notifications', options)
            .toPromise()
            .then(function (res) {
            $.hidePreloader();
            return res.json().data.notifications;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (err) {
        $.hidePreloader();
        $.alert(err.json().message);
        return Promise.reject(err);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        core_2.CookieService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
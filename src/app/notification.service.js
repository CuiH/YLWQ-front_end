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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var NotificationService = (function () {
    function NotificationService(http, userService) {
        this.http = http;
        this.userService = userService;
        $.init();
    }
    ;
    NotificationService.prototype.readNotification = function (id) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded",
                'x-access-token': this.userService.getCurrentUserToken(),
            }),
            body: 'notification_id=' + id,
        });
        return this.http.request('http://172.18.43.152:3000/api/notification/read', options)
            .toPromise()
            .then(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    NotificationService.prototype.handleError = function (err) {
        $.hidePreloader();
        $.alert(err.json().message);
        return Promise.reject(err);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        user_service_1.UserService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map
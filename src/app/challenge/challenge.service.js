/**
 * Created by CuiH on 2017/4/6.
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
var http_1 = require("@angular/http");
var user_service_1 = require("../user/user.service");
var ChallengeService = (function () {
    function ChallengeService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    ;
    ChallengeService.prototype.createChallenge = function (activityBillId, message) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded",
                'x-access-token': this.userService.getCurrentUserToken()
            }),
            body: 'activity_bill_id=' + activityBillId + '&message=' + message
        });
        return this.http.request('http://172.18.43.152:3000/api/challenge/create', options)
            .toPromise()
            .then(function () {
            return;
        })
            .catch(this.handleError);
    };
    ChallengeService.prototype.deleteChallenge = function (challengeId) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({
                'Content-Type': "application/x-www-form-urlencoded",
                'x-access-token': this.userService.getCurrentUserToken()
            }),
            body: 'challenge_id=' + challengeId
        });
        return this.http.request('http://172.18.43.152:3000/api/challenge/delete', options)
            .toPromise()
            .then(function () {
            return;
        })
            .catch(this.handleError);
    };
    ChallengeService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    return ChallengeService;
}());
ChallengeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        user_service_1.UserService])
], ChallengeService);
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=challenge.service.js.map
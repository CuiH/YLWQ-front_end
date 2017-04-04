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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        $.init();
    }
    ;
    NewsService.prototype.getNewsById = function (id) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/news/' + id, options)
            .toPromise()
            .then(function (res) {
            return res.json().data.news;
        })
            .catch(this.handleError);
    };
    NewsService.prototype.getLatestEightNews = function () {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
        });
        return this.http.request('http://172.18.43.152:3000/api/news/get_latest_eight', options)
            .toPromise()
            .then(function (res) {
            return res.json().data.news;
        })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (err) {
        $.hidePreloader();
        $.alert(err.json().message);
        return Promise.reject(err);
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=new.service.js.map
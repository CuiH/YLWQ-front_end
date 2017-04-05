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
var new_service_1 = require("./new.service");
var news_1 = require("./news");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("zepto");
require("sm");
var NewsDetailComponent = (function () {
    function NewsDetailComponent(location, activatedRoute, newsService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.newsService = newsService;
        this.news = new news_1.News();
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.init();
        this.activatedRoute.params
            .switchMap(function (params) { return _this.newsService.getNewsById(+params['id']); })
            .subscribe(function (news) {
            _this.news = news;
        });
    };
    NewsDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return NewsDetailComponent;
}());
NewsDetailComponent = __decorate([
    core_1.Component({
        selector: 'news-detail',
        templateUrl: './news-detail.component.html',
        styleUrls: ['./news-detail.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.ActivatedRoute,
        new_service_1.NewsService])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map